import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import PayslipPage from "./pages/PayslipPage";
import Register from "./pages/Register";
import LeaveApply from "./pages/LeaveApply";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/payslip" element={<PayslipPage />} />
        <Route path="/leaveapply" element={<LeaveApply />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
