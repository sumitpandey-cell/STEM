'use client';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import AnimatedCounter from '@/components/ui/animated-counter';

export default function GameStatusBar() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <Card className="p-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 shadow-lg animate-in slide-in-from-top-12 duration-1000">
      <div className="grid grid-cols-3 gap-4 text-center items-center">
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground/80">XP</p>
          <Progress value={33} className="h-3 [&>div]:animated-gradient-progress" />
        </div>
        <div className="space-y-1 animate-pulse-slow">
          <p className="text-sm font-medium text-foreground/80">Time Left</p>
          <p className="text-3xl font-bold font-mono">{timeLeft}s</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground/80">Score</p>
          <p className="text-3xl font-bold font-mono"><AnimatedCounter to={1100} /></p>
        </div>
      </div>
    </Card>
  );
}
