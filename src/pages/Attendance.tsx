// These go at the very top of Attendance.tsx (and any other page that needs role/username)
function getRole() {
  return localStorage.getItem("userRole");
}
function getUsername() {
  return localStorage.getItem("username");
}
import { useEffect, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
//import { getRole, getUsername } from '../utils/auth'; // See below for code
import { getData } from "../api/api"; // Your fetch helper

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [error, setError] = useState('');
  const role = getRole();
  const username = getUsername();
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    getData("attendance?date=" + today)
      .then(data => {
        // If employee, filter records to show only self
        if (role === "employee") {
          setAttendance(data.filter((rec: any) => rec.employee === username));
        } else {
          setAttendance(data);
        }
      })
      .catch(err => setError(err.message));
  }, [role, username, today]);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* NOTE Section, as per your mockup */}
            <Card>
              <CardHeader>
                <CardTitle>Note</CardTitle>
              </CardHeader>
              <CardContent>
                {role === "employee" ? (
                  <p>
                    You can only view your own day-wise attendance record, including checkin/checkout.<br/>
                    Unpaid/missing attendance impacts payroll.
                  </p>
                ) : (
                  <p>
                    You can view attendance of all present employees for the day.<br/>
                    Attendance data is used for payroll generation.<br/>
                    Any unpaid leave or missing attendance reduces payable days.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Attendance Table */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance List View</CardTitle>
                <CardDescription>
                  {today}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {error && <div style={{color:'red'}}>Error: {error}</div>}
                <table className="w-full mt-4">
                  <thead>
                    <tr>
                      <th>Emp</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Work Hours</th>
                      <th>Extra Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                  {attendance.map((rec: any, idx: number) => (
                    <tr key={idx}>
                      <td>{rec.employee}</td>
                      <td>{rec.check_in}</td>
                      <td>{rec.check_out}</td>
                      <td>{rec.work_hours}</td>
                      <td>{rec.extra_hours}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
                {attendance.length === 0 && <p className="mt-4">No attendance found for today.</p>}
              </CardContent>
            </Card>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Attendance;
