import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Attendance() {
  const [month, setMonth] = useState("2024-04");

  const attendanceData = {
    "2024-04-25": "P",
    "2024-04-26": "P",
    "2024-04-27": "A",
    "2024-05-01": "P",
    "2024-05-15": "A",
    "2024-05-24": "P",
  };

  const generateDates = () => {
    const dates = [];
    const start = new Date(`${month}-25`);
    const end = new Date(start);
    end.setMonth(start.getMonth() + 1);
    end.setDate(24);

    while (start <= end) {
      const formatted = start.toISOString().split("T")[0];
      dates.push({ date: formatted, status: attendanceData[formatted] || "" });
      start.setDate(start.getDate() + 1);
    }
    return dates;
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>ATTENDANCE AND PAYSLIP MANAGEMENT SYSTEM</h1>

        <h1>Attendance Calendar (25 - 25 Cycle)</h1>
        <label>Select Month:</label>
        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

        <div className="calendar-grid">
          {generateDates().map(({ date, status }) => (
            <div
              key={date}
              className={`calendar-cell ${
                status === "P" ? "present" : status === "A" ? "absent" : ""
              }`}
            >
              <div>{date.slice(-2)}</div>
              <div>{status}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <strong>Legend:</strong> <span className="present">P - Present</span>,{" "}
          <span className="absent">A - Absent</span>
        </div>
      </div>
    </div>
  );
}
