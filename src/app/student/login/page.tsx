'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Puzzle, Rocket } from 'lucide-react';
import { AtomIcon } from '@/components/icons/atom-icon';


const PlayfulLockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 9.33-2.5"></path>
    <path d="M15.5 7.5a.5.5 0 0 1-1 0 .5.5 0 0 1 1 0z" fill="currentColor"></path>
  </svg>
);


export default function StudentLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Rocket className="absolute top-[20%] left-[15%] w-24 h-24 text-gray-700/70 animate-float-1" />
        <AtomIcon className="absolute bottom-[25%] right-[10%] w-28 h-28 text-gray-700/70 animate-float-2" />
        <Puzzle className="absolute top-[50%] right-[25%] w-20 h-20 text-gray-700/70 animate-float-3" />
      </div>
      <Card className="w-full max-w-sm mx-4 p-2 bg-background/80 backdrop-blur-sm border-gray-700/50 shadow-2xl animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl font-bold">Welcome Back, Learner!</CardTitle>
          <CardDescription className="font-body text-foreground/70 pt-2">
            Log in to continue your STEM adventure.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Input type="text" placeholder="Username or Email" className="font-body transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="relative space-y-2">
              <PlayfulLockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="pl-10 font-body transition-transform duration-300 hover:scale-105"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <Button
              type="submit"
              className="w-full text-white font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] transform transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
            >
              Login as Student
            </Button>
          </form>
          <div className="mt-6 flex justify-between items-center text-sm font-body">
            <Link href="#" className="text-primary hover:underline">
              Forgot Password?
            </Link>
            <Link href="/student/signup" className="text-primary hover:underline">
              New here? Sign up as Student
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
