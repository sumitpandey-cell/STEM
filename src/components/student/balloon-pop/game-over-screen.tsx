import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import AnimatedCounter from '@/components/ui/animated-counter';

type GameOverScreenProps = {
  score: number;
  onRestart: () => void;
};

export default function GameOverScreen({ score, onRestart }: GameOverScreenProps) {
  const xpEarned = Math.floor(score / 10);

  return (
    <Card className="w-full max-w-lg text-center bg-background/80 backdrop-blur-sm border-primary/30 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-1000">
      <CardHeader>
        <CardTitle className="font-headline text-4xl font-bold animated-gradient-text">
          Game Over!
        </CardTitle>
        <CardDescription>Well done! Here's how you did:</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground">Total Score</p>
            <p className="text-5xl font-bold text-accent">
              <AnimatedCounter to={score} />
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">XP Earned</p>
            <p className="text-3xl font-bold text-secondary">
              +<AnimatedCounter to={xpEarned} /> XP
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button onClick={onRestart} size="lg" className="transition-transform hover:scale-105">
            Play Again
          </Button>
          <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
            <Link href="/student/dashboard">Return to Dashboard</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
