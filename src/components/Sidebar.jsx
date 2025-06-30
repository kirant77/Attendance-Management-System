import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/4144413.jpg";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <h2></h2>
      <img src={logo} style={{ width: "100%" }} alt="Logo" />

      <ul className="nav-links">
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/attendance" activeClassName="active">
            Attendance
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaveapply" activeClassName="active">
            Leave Apply
          </NavLink>
        </li>
        <li>
          <NavLink to="/payslip" activeClassName="active">
            Payslip
          </NavLink>
        </li>
      </ul>

      <div style={{ marginTop: "auto", padding: "20px" }}>
        <button
          onClick={handleLogout}
          style={{
            background: "#e53e3e",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            width: "100%",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
