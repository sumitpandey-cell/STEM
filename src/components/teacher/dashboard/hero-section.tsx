import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function HeroSection() {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <Card className="bg-muted/30 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold">
              Welcome Back, Teacher!
            </h1>
            <p className="font-raleway mt-2 text-lg text-foreground/70">
              Manage your classes, track student progress, and enhance STEM learning.
            </p>
          </div>
          <Card className="ml-auto p-4 flex items-center gap-4 bg-background/50 shadow-lg animate-pulse-slow">
            <Avatar className="h-16 w-16 shadow-lg ring-2 ring-offset-2 ring-offset-background ring-primary animate-in zoom-in-50 duration-1000">
              <AvatarImage src="https://i.pravatar.cc/150?u=teacher" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <h3 className="font-bold text-lg">Teacher Name</h3>
                <Badge variant="secondary" className="animate-in fade-in delay-500">STEM Educator</Badge>
                <p className="text-xs text-foreground/60 pt-1">Dynamic School Name</p>
            </div>
          </Card>
        </div>
      </Card>
    </section>
  );
}
