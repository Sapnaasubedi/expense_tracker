import api from "../api/api";

export interface Expense {
  _id?: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export const getExpenses = async () => {
  const res = await api.get("/expenses");
  return res.data;
};

export const addExpense = async (expense: Expense) => {
  const res = await api.post("/expenses", expense);
  return res.data;
};
