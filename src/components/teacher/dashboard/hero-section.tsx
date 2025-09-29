'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { getTeacherProfile, TeacherProfile } from '@/lib/teacher-data';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function HeroSection() {
  const [user, loading] = useAuthState(auth);
  const [profile, setProfile] = useState<TeacherProfile | null>(null);

  useEffect(() => {
    if (user) {
      getTeacherProfile(user.uid).then(setProfile);
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
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
                 <Skeleton className="h-3 w-28 pt-1" />
              </div>
            </Card>
          </div>
        </Card>
      </section>
    );
  }

  return (
    <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <Card className="bg-muted/30 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold">
              Welcome Back, {profile.name.split(' ')[0]}!
            </h1>
            <p className="font-raleway mt-2 text-lg text-foreground/70">
              Manage your classes, track student progress, and enhance STEM learning.
            </p>
          </div>
          <Card className="ml-auto p-4 flex items-center gap-4 bg-background/50 shadow-lg animate-pulse-slow">
            <Avatar className="h-16 w-16 shadow-lg ring-2 ring-offset-2 ring-offset-background ring-primary animate-in zoom-in-50 duration-1000">
              <AvatarImage src={profile.avatarUrl} />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <h3 className="font-bold text-lg">{profile.name}</h3>
                <Badge variant="secondary" className="animate-in fade-in delay-500">{profile.role}</Badge>
                <p className="text-xs text-foreground/60 pt-1">{profile.school}</p>
            </div>
          </Card>
        </div>
      </Card>
    </section>
  );
}
