import { Item } from "../types";

export const gerCurrentMonth = () => {
  const now = new Date();
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