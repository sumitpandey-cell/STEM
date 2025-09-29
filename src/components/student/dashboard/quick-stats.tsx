'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getQuickStats, getStudentQuickStats } from '@/lib/student-data';
import { Zap, Ruler, Beaker, Medal, Brain } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { Skeleton } from '@/components/ui/skeleton';

const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap className="text-yellow-400" />,
  Ruler: <Ruler className="text-amber-600" />,
  Beaker: <Beaker className="text-blue-400" />,
  Medal: <Medal className="text-purple-500" />,
  Brain: <Brain className="text-green-500" />,
};

export default function QuickStats() {
  const [user, loading] = useAuthState(auth);
  const [stats, setStats] = useState<any[]>([]);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setStatsLoading(true);
      getStudentQuickStats(user.uid)
        .then(setStats)
        .catch(() => {
          // Fallback to default stats
          getQuickStats().then(setStats);
        })
        .finally(() => setStatsLoading(false));
    } else if (!loading) {
      // Use default stats for non-authenticated users
      getQuickStats().then(setStats);
      setStatsLoading(false);
    }
  }, [user, loading]);

  if (loading || statsLoading) {
    return (
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-6 rounded" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  
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
