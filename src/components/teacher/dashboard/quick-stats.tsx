import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, School, FileText, BookOpenCheck } from 'lucide-react';

const stats = [
  { title: 'Total Students', icon: <Users className="text-primary" />, value: '150', delay: 150 },
  { title: 'Active Classes', icon: <School className="text-secondary" />, value: '5', delay: 300 },
  { title: 'Assignments Given', icon: <FileText className="text-accent" />, value: '25', delay: 450 },
  { title: 'Modules Completed', icon: <BookOpenCheck className="text-green-500" />, value: '1,200', delay: 600 },
];

export default function QuickStats() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="animate-in fade-in-0 slide-in-from-bottom-10 fill-mode-both"
            style={{ animationDelay: `${stat.delay}ms` }}
          >
            <Card className="hover:bg-muted/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium font-raleway text-foreground/80">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
