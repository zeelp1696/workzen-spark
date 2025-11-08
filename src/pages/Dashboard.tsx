import { Users, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { DashboardCard } from '@/components/DashboardCard';
import { mockDashboardStats } from '@/data/mockData';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Welcome to WorkZen HRMS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DashboardCard
                title="Total Employees"
                value={mockDashboardStats.totalEmployees}
                icon={Users}
                description="Active workforce"
              />
              <DashboardCard
                title="Attendance Rate"
                value={`${mockDashboardStats.attendanceRate}%`}
                icon={TrendingUp}
                description="This month"
              />
              <DashboardCard
                title="Approved Leaves"
                value={mockDashboardStats.approvedLeaves}
                icon={CheckCircle}
                description="Pending requests"
              />
              <DashboardCard
                title="Total Payroll"
                value={`$${mockDashboardStats.totalPayroll.toLocaleString()}`}
                icon={DollarSign}
                description="This month"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
