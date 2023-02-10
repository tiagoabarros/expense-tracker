import { Item } from "../types";

export const getCurrentMonth = () => {
  // eslint-disable-next-line prefer-const
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  // eslint-disable-next-line prefer-const
  let newList: Item[] = [];
  // eslint-disable-next-line prefer-const
  let [year, month] = date.split("-");

  // eslint-disable-next-line prefer-const
  for (let i in list) {
    if (list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() + 1) === parseInt(month)) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  // eslint-disable-next-line prefer-const
  let year = date.getFullYear();
  // eslint-disable-next-line prefer-const
  let month = date.getMonth() + 1;
  // eslint-disable-next-line prefer-const
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
  // eslint-disable-next-line prefer-const
  let [year, month] = currentMonth.split("-");
  // eslint-disable-next-line prefer-const
  let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  return `${months[parseInt(month) - 1]} de ${year}`;
};