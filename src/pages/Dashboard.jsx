
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import PayslipPDF from "../../public/Dummy_Payslip_Mar_2025.pdf";

const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

export default function Dashboard() {
  const [attendance, setAttendance] = useState([
    { date: "Apr 22, 2024", status: "Present" },
    { date: "Apr 23, 2024", status: "Absent" },
    { date: "Apr 24, 2024", status: "Present" },
  ]);

  const [signInTime, setSignInTime] = useState(null);
  const [signOutTime, setSignOutTime] = useState(null);

  const handleSignIn = () => setSignInTime(new Date().toLocaleTimeString());
  const handleSignOut = () => setSignOutTime(new Date().toLocaleTimeString());

  const pieSections = [
    {
      title: "Attendance Summary",
      data: [
        { name: "Present", value: 20 },
        { name: "Absent", value: 5 },
      ],
      color: "#4CAF50",
    },
    {
      title: "Payslip Distribution",
      data: [
        { name: "Basic", value: 30000 },
        { name: "Bonus", value: 5000 },
        { name: "Deductions", value: 2000 },
      ],
      color: "#2196F3",
    },
    {
      title: "Work Days Split",
      data: [
        { name: "Working Days", value: 22 },
        { name: "Off Days", value: 8 },
      ],
      color: "#F44336",
    },
  ];

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>ATTENDANCE AND PAYSLIP MANAGEMENT SYSTEM</h1>
        <h2>Welcome, Kiran Tondchore</h2>

     

        <div
          className="attendance-buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>

          {/* Payslips section aligned to the right */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ marginRight: "10px" }}>My Payslips</h3>
            <a href={PayslipPDF} download="Dummy_Payslip_Mar_2025.pdf">
              March 2025
            </a>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {signInTime && (
            <p style={{ marginRight: "20px", color:"green"}}>Signed in at: {signInTime}</p>
          )}
          {signOutTime && <p>Signed out at: {signOutTime}</p>}
        </div>

        {/* Pie Charts Section */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "30px",
            justifyContent: "space-between",
          }}
        >
          {pieSections.map((section, idx) => (
            <div
              key={idx}
              style={{
                width: "30%",
                backgroundColor: "#f9f9f9",
                border: `2px solid ${section.color}`,
                borderRadius: "12px",
                padding: "15px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ textAlign: "center", marginBottom: "10px" }}>
                {section.title}
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={section.data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={60}
                    label
                  >
                    {section.data.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "20px" }}>Recent Attendance</h3>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
