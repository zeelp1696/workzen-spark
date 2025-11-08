import { Mail, Phone, User } from 'lucide-react';
import { Employee } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface EmployeeCardProps {
  employee: Employee;
  onClick?: () => void;
}

export const EmployeeCard = ({ employee, onClick }: EmployeeCardProps) => {
  return (
    <Card 
      className="relative overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
      onClick={onClick}
    >
      <div 
        className={cn(
          "absolute top-4 right-4 w-3 h-3 rounded-full",
          employee.status === 'active' ? 'bg-status-active' : 'bg-status-away'
        )}
      />
      
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={employee.avatar} alt={employee.name} />
            <AvatarFallback className="text-lg">
              {employee.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>

          <div>
            <h3 className="text-lg font-semibold text-card-foreground">{employee.name}</h3>
            <p className="text-sm text-muted-foreground">{employee.role}</p>
          </div>

          <div className="w-full space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="truncate">{employee.email}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{employee.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{employee.username}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
