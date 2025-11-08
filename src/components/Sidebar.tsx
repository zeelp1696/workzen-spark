import { Users, Calendar, Clock, DollarSign, FileText } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Employees', href: '/employees', icon: Users },
  { name: 'Attendance', href: '/attendance', icon: Calendar },
  { name: 'Time Off', href: '/timeoff', icon: Clock },
  { name: 'Payroll', href: '/payroll', icon: DollarSign },
  { name: 'Reports', href: '/reports', icon: FileText },
];

export const Sidebar = () => {
  return (
    <aside className="w-60 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-semibold text-sidebar-foreground">WorkZen</h2>
        <p className="text-sm text-muted-foreground">Smart HRMS</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
              "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
            activeClassName="bg-sidebar-accent text-sidebar-accent-foreground"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
