'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Book, FlaskConical, Gamepad2, Medal } from 'lucide-react';

const AnimatedIllustration = () => (
    <div className="absolute inset-0 -z-10 opacity-70">
        <Book className="absolute top-[10%] left-[5%] w-16 h-16 text-gray-300/50 animate-float-1" />
        <Gamepad2 className="absolute top-[20%] right-[10%] w-20 h-20 text-gray-300/50 animate-float-2" />
        <FlaskConical className="absolute bottom-[15%] left-[20%] w-24 h-24 text-gray-300/50 animate-float-3" />
        <Medal className="absolute bottom-[30%] right-[15%] w-16 h-16 text-gray-300/50 animate-float-1" />
    </div>
)

export default function StudentSignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-[#d6f4ff] overflow-hidden">
      <AnimatedIllustration />
      <Card className="w-full max-w-md mx-4 p-2 sm:p-4 bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-2xl animate-in fade-in-0 duration-1000">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl font-bold">Start Your Learning Journey</CardTitle>
          <CardDescription className="font-body text-foreground/70 pt-2">
            Create your free account to play, learn, and earn rewards.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="animate-in fade-in-0 delay-200 duration-1000 fill-mode-both">
              <Input type="text" placeholder="Full Name" required className="font-body" />
            </div>
            
            <div className="animate-in fade-in-0 delay-300 duration-1000 fill-mode-both">
              <Select>
                <SelectTrigger className="w-full font-body text-foreground/70">
                  <SelectValue placeholder="Select Grade" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 7 }, (_, i) => i + 6).map((grade) => (
                    <SelectItem key={grade} value={String(grade)}>Grade {grade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="animate-in fade-in-0 delay-400 duration-1000 fill-mode-both">
              <Input type="email" placeholder="Email" required className="font-body" />
            </div>
            <div className="animate-in fade-in-0 delay-500 duration-1000 fill-mode-both">
              <Input type="password" placeholder="Password" required className="font-body" />
            </div>
            <div className="animate-in fade-in-0 delay-600 duration-1000 fill-mode-both">
              <Input type="password" placeholder="Confirm Password" required className="font-body" />
            </div>
            <div className="pt-2 animate-in fade-in-0 delay-700 duration-1000 fill-mode-both">
              <Button
                type="submit"
                className="w-full text-white font-bold bg-gradient-to-r from-[#4ECDC4] to-[#FFD93D] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-300/50 animate-pulse-slow hover:animate-none"
              >
                Sign Up as Student
              </Button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm font-body animate-in fade-in-0 delay-800 duration-1000 fill-mode-both">
            Already have an account?{' '}
            <Link href="/student/login" className="text-primary font-medium hover:underline">
              Login here.
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
