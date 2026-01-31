import { useEffect, useState } from "react";
import { getExpenses, type Expense } from "../services/expenseService";

const Dashboard = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch {
        setError("Failed to load expenses");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Dashboard</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet</p>
      ) : (
        expenses.map((e) => (
          <div key={e._id}>
            <strong>{e.category}</strong> — ${e.amount}
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
