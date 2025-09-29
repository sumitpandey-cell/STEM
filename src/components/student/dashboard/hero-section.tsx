import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

export default function HeroSection() {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <Card className="bg-muted/30 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold">
              Welcome Back, Learner!
            </h1>
            <p className="font-raleway mt-2 text-lg text-foreground/70">
              Continue your STEM journey with games, quizzes, and challenges.
            </p>
          </div>
          <Card className="ml-auto p-4 flex items-center gap-4 bg-background/50 shadow-lg animate-pulse-slow">
            <Avatar className="h-16 w-16 shadow-lg ring-2 ring-offset-2 ring-offset-background ring-primary animate-in zoom-in-50 duration-1000">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className='flex items-center gap-2'>
                <h3 className="font-bold text-lg">Username</h3>
                <Badge variant="secondary" className="animate-in fade-in delay-500">Level 5</Badge>
              </div>
              <div className="w-full">
                <p className="text-xs text-foreground/60 mb-1">XP Progress</p>
                <Progress value={65} className="h-3 [&>div]:animated-gradient-progress" />
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </section>
  );
}
