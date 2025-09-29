import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type StartScreenProps = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <Card className="w-full max-w-lg text-center bg-background/80 backdrop-blur-sm border-secondary/30 shadow-2xl animate-in fade-in-0 duration-1000">
      <CardHeader>
        <CardTitle className="font-headline text-4xl font-bold animated-gradient-text">
          Math Quest – Balloon Pop
        </CardTitle>
        <CardDescription>Pop the balloons with the correct answers!</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <Button onClick={onStart} size="lg" className="w-full max-w-xs transition-transform duration-300 hover:scale-110">
          Start Game
        </Button>
        <div className="flex gap-4">
          <Button variant="outline" className="transition-transform hover:scale-105">Instructions</Button>
          <Button variant="outline" className="transition-transform hover:scale-105">Leaderboard</Button>
        </div>
      </CardContent>
    </Card>
  );
}
