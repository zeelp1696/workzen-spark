export interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  username: string;
  status: 'active' | 'away';
  avatar: string;
}

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    email: 'sarah.j@company.com',
    phone: '+1 (555) 123-4567',
    username: 'sarah.johnson',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    email: 'michael.c@company.com',
    phone: '+1 (555) 234-5678',
    username: 'michael.chen',
    status: 'away',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'UX Designer',
    email: 'emily.d@company.com',
    phone: '+1 (555) 345-6789',
    username: 'emily.davis',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'Backend Developer',
    email: 'james.w@company.com',
    phone: '+1 (555) 456-7890',
    username: 'james.wilson',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    role: 'HR Manager',
    email: 'lisa.a@company.com',
    phone: '+1 (555) 567-8901',
    username: 'lisa.anderson',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
  },
  {
    id: '6',
    name: 'David Martinez',
    role: 'DevOps Engineer',
    email: 'david.m@company.com',
    phone: '+1 (555) 678-9012',
    username: 'david.martinez',
    status: 'away',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
  },
];

export interface DashboardStats {
  totalEmployees: number;
  attendanceRate: number;
  approvedLeaves: number;
  totalPayroll: number;
}

export const mockDashboardStats: DashboardStats = {
  totalEmployees: 156,
  attendanceRate: 94.5,
  approvedLeaves: 12,
  totalPayroll: 450000,
};
