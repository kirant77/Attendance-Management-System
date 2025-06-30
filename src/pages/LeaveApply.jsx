import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function LeaveApply() {
  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromSession, setFromSession] = useState("");
  const [toSession, setToSession] = useState("");
  const [leaveBalance, setLeaveBalance] = useState(10);
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);
  const [contactDetails, setContactDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      leaveType,
      fromDate,
      toDate,
      fromSession,
      toSession,
      leaveBalance,
      reason,
      file,
      contactDetails,
    });
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        
        <h1 style={{ textAlign: "center" }}>Leave Application</h1>
        <div className="leave-container">
          <form onSubmit={handleSubmit}>
            <div className="row">
             
              <div className="half">
                <label>Leave Type:</label>
                <select
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Short Leave">Short Leave</option>
                </select>
              </div>
              <div className="half" style={{ marginLeft: "20px" }}>
                <label>Leave Balance:</label>
                <input type="number" value={leaveBalance} readOnly />
              </div>
            </div>

            {/* Row with From Date and From Session */}
            <div className="row">
              <div className="half">
                <label>From Date:</label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  required
                />
              </div>
              <div className="half" style={{ marginLeft: "20px" }}>
                <label>From Session:</label>
                <input
                  type="text"
                  value={fromSession}
                  onChange={(e) => setFromSession(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Row with To Date and To Session */}
            <div className="row">
              <div className="half">
                <label>To Date:</label>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  required
                />
              </div>
              <div className="half" style={{ marginLeft: "20px" }}>
                <label>To Session:</label>
                <input
                  type="text"
                  value={toSession}
                  onChange={(e) => setToSession(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="half">
                <label>Applying For:</label>
                <input
                  type="text"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  required
                />
              </div>

              <div className="half" style={{ marginLeft: "20px" }}>
                <label>Applying To:</label>
                <input
                  type="text"
                  value={contactDetails}
                  onChange={(e) => setContactDetails(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="half">
                <label>CC To:</label>
                <input
                  type="text"
                  value={contactDetails}
                  onChange={(e) => setContactDetails(e.target.value)}
                />
              </div>

              <div className="half" style={{ marginLeft: "20px" }}>
                <label>Reason:</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label>Attach File:</label>
              <input
                type="file"
                accept=".pdf,.xls,.xlsx,.doc,.docx,.txt,.ppt,.pptx,.gif,.jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div>
              <button type="submit">Submit Leave Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
