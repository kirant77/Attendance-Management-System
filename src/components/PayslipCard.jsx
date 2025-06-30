export default function PayslipCard({ payslip }) {
  return (
    <div className="payslip-card">
      <h3>Payslip for {payslip.month}</h3>
      <p>Basic: {payslip.basic}</p>
      <p>Bonus: {payslip.bonus}</p>
      <p>Deductions: {payslip.deductions}</p>
      <p>Total: {payslip.total}</p>
    </div>
  );
}
