import { useState, useEffect } from "react";

import * as C from "./styles/App.styled";

import { Item, Category } from "./types";
import { items, categories } from "./data";

import { gerCurrentMonth, filterListByMonth } from "./helpers";

export const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(gerCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        Olá Mundo
      </C.Body>
    </C.Container>
  );
};
