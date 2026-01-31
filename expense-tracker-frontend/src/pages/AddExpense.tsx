import { useState } from "react";
import { addExpense } from "../services/expenseService";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const [form, setForm] = useState({
    amount: 0,
    category: "",
    description: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addExpense(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setForm({ ...form, amount: +e.target.value })}
      />
      <input
        placeholder="Category"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <input
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <button>Add</button>
    </form>
  );
};

export default AddExpense;
