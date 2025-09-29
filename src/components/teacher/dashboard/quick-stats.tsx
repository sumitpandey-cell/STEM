import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTeacherQuickStats } from '@/lib/teacher-data';
import { Users, School, FileText, BookOpenCheck } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
  Users: <Users className="text-primary" />,
  School: <School className="text-secondary" />,
  FileText: <FileText className="text-accent" />,
  BookOpenCheck: <BookOpenCheck className="text-green-500" />,
};

export default async function QuickStats() {
  const stats = await getTeacherQuickStats();

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
                {iconMap[stat.iconName]}
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
