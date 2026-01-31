import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav style={{ padding: 16, background: "#1e293b", color: "white" }}>
      <Link to="/" style={{ marginRight: 12 }}>
        Dashboard
      </Link>
      <Link to="/add">Add Expense</Link>
      <button onClick={logout} style={{ float: "right" }}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
