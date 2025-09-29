import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getQuickStats } from '@/lib/student-data';
import { Zap, Ruler, Beaker } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap className="text-yellow-400" />,
  Ruler: <Ruler className="text-amber-600" />,
  Beaker: <Beaker className="text-blue-400" />,
};

export default async function QuickStats() {
  const stats = await getQuickStats();
  
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="animate-in fade-in-0 slide-in-from-bottom-10 fill-mode-both"
            style={{ animationDelay: `${index * 150}ms` }}
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
