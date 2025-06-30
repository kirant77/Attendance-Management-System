import { FaUserCircle, FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1e293b",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>Attendance & Payslip System</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <FaBell size={22} style={{ cursor: "pointer" }} title="Notifications" />
        <FaUserCircle size={26} style={{ cursor: "pointer" }} title="Profile" />
      </div>
    </header>
  );
}
