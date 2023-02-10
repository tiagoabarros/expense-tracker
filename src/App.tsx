import { useState, useEffect } from "react";

import * as C from "./styles/App.styled";

import { Item, Category } from "./types";
import { items, categories } from "./data";

import { getCurrentMonth, filterListByMonth } from "./helpers";

import { InfoArea, TableArea, FormArea } from "./components";

export const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let sumIncome = 0;
    let sumExpense = 0;

    for (const i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        sumExpense += filteredList[i].value;
      } else {
        sumIncome += filteredList[i].value;
      }
    }

    setIncome(sumIncome);
    setExpense(sumExpense);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    const newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Área de Informações*/}
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense} />

        {/* Área de inserção*/}
        <FormArea onAdd={handleAddItem} />

        {/* Área de Listagem*/}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};
