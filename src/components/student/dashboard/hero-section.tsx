'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { getStudentProfile, StudentProfile } from '@/lib/student-data';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function HeroSection() {
  const [user, loading] = useAuthState(auth);
  const [profile, setProfile] = useState<StudentProfile | null>(null);

  useEffect(() => {
    if (user) {
      getStudentProfile(user.uid).then(setProfile);
    }
  }, [user]);

  if (loading || !profile) {
    return (
      <section>
        <Card className="bg-muted/30 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>
              <Skeleton className="h-10 w-64 mb-2" />
              <Skeleton className="h-6 w-96" />
            </div>
            <Card className="ml-auto p-4 flex items-center gap-4 bg-background/50 shadow-lg">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-5 w-24 mb-2" />
                <Skeleton className="h-3 w-48" />
              </div>
            </Card>
          </div>
        </Card>
      </section>
    );
  }

  const progressValue = (profile.xp / profile.xpGoal) * 100;

  return (
    <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <Card className="bg-muted/30 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold">
              Welcome Back, {profile.username}!
            </h1>
            <p className="font-raleway mt-2 text-lg text-foreground/70">
              Continue your STEM journey with games, quizzes, and challenges.
            </p>
          </div>
          <Card className="ml-auto p-4 flex items-center gap-4 bg-background/50 shadow-lg animate-pulse-slow">
            <Avatar className="h-16 w-16 shadow-lg ring-2 ring-offset-2 ring-offset-background ring-primary animate-in zoom-in-50 duration-1000">
              <AvatarImage src={profile.avatarUrl} />
              <AvatarFallback>{profile.username.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className='flex items-center gap-2'>
                <h3 className="font-bold text-lg">{profile.username}</h3>
                <Badge variant="secondary" className="animate-in fade-in delay-500">Level {profile.level}</Badge>
              </div>
              <div className="w-full">
                <p className="text-xs text-foreground/60 mb-1">XP Progress ({profile.xp.toLocaleString()} / {profile.xpGoal.toLocaleString()})</p>
                <Progress value={progressValue} className="h-3 [&>div]:animated-gradient-progress" />
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </section>
  );
}
