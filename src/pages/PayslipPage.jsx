
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PayslipCard from "../components/PayslipCard";

export default function PayslipPage() {
  const [payslip, setPayslip] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/payslip/johndoe")
      .then((res) => setPayslip(res.data))
      .catch((err) => console.error("Failed to fetch payslip", err));
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>ATTENDANCE AND PAYSLIP MANAGEMENT SYSTEM</h1>

        <Navbar />
        <h1>My Payslip</h1>
        {payslip ? (
          <PayslipCard payslip={payslip} />
        ) : (
          <p>Loading payslip data...</p>
        )}
      </div>
    </div>
  );
}
