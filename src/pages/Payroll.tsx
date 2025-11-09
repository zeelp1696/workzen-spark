import { useEffect, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import Chart libraries as needed

// Role helper
function getRole() {
  return localStorage.getItem("userRole");
}

const Payroll = () => {
  const role = getRole();
  const [warnings, setWarnings] = useState([]);
  const [payruns, setPayruns] = useState([]);
  const [costData, setCostData] = useState([]);
  const [employeeCounts, setEmployeeCounts] = useState([]);
  const [payslips, setPayslips] = useState([]);

  useEffect(() => {
    // Fetch warnings (missing bank/manager)
    // setWarnings([{type: "bank", text: "1 Employee without Bank A/c"}, ...]);

    // Fetch payruns [replace with getData("payruns")] as needed
    // setPayruns([{month: "Oct 2025", slips: 3, link: "/oct2025"}, ...])

    // Fetch costData/employeeCounts/payslips similarly from backend
    // setCostData([...]);
    // setEmployeeCounts([...]);
    // setPayslips([...]);
  }, []);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* WARNINGS */}
            <Card>
              <CardHeader>
                <CardTitle>Warning</CardTitle>
              </CardHeader>
              <CardContent>
                {warnings.length === 0
                  ? <p>No warnings!</p>
                  : warnings.map((w, idx) => (
                      <p key={idx} style={{color:'red'}}>{w.text}</p>
                    ))}
              </CardContent>
            </Card>

            {/* PAYRUN SUMMARY */}
            <Card>
              <CardHeader>
                <CardTitle>Payrun</CardTitle>
              </CardHeader>
              <CardContent>
                {payruns.map((run, idx) => (
                  <p key={idx}>
                    <a href={run.link} className="text-blue-600 underline">
                      Payrun for {run.month} ({run.slips} Payslip{run.slips > 1 ? "s" : ""})
                    </a>
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Employer cost and employee count bars (dummy sample, use real chart lib or numbers) */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Employer cost</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Replace below with real chart/bar */}
                  <p>Jan 2025: ₹30L, Feb 2025: ₹20L, Mar 2025: ₹30L</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Employee count</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Replace below with real chart/bar */}
                  <p>Jan 2025: 30, Feb 2025: 22, Mar 2025: 30</p>
                </CardContent>
              </Card>
            </div>

            {/* PAYSLIP LIST */}
            <Card>
              <CardHeader>
                <CardTitle>Payslip List View</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full mt-4">
                  <thead>
                    <tr>
                      <th>Pay Period</th>
                      <th>Employee</th>
                      <th>Employer Cost</th>
                      <th>Basic Wage</th>
                      <th>Gross Wage</th>
                      <th>Status</th>
                      <th>Net</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payslips.map((p, idx) => (
                      <tr key={idx}>
                        <td>{p.period}</td>
                        <td>{p.employee}</td>
                        <td>{p.employerCost}</td>
                        <td>{p.basicWage}</td>
                        <td>{p.grossWage}</td>
                        <td>{p.status}</td>
                        <td>{p.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {payslips.length === 0 && <p className="mt-4">No payslips generated yet.</p>}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payroll;
