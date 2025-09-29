'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Lock, BarChart2, Pencil } from 'lucide-react';

export default function TeacherLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F7FFF7] to-[#E0F7FA] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Pencil className="absolute top-[15%] left-[10%] w-20 h-20 text-gray-300/70 animate-float-subtle-1" />
        <BarChart2 className="absolute bottom-[20%] right-[15%] w-24 h-24 text-gray-300/70 animate-float-subtle-2" />
        <Pencil className="absolute bottom-[10%] left-[25%] w-16 h-16 text-gray-300/70 animate-float-subtle-3 opacity-50" />
      </div>
      <Card className="w-full max-w-md mx-4 p-2 sm:p-4 bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-2xl animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl font-bold tracking-tight">Welcome Back, Teacher!</CardTitle>
          <CardDescription className="font-body text-foreground/70 pt-2">
            Log in to manage classes, track progress, and empower students.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2 animate-in fade-in-0 delay-200 duration-1000 fill-mode-both">
              <Input type="email" placeholder="Email" className="font-body" />
            </div>
            <div className="relative space-y-2 animate-in fade-in-0 delay-400 duration-1000 fill-mode-both">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="pl-10 font-body"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <div className="animate-in fade-in-0 delay-600 duration-1000 fill-mode-both">
              <Button
                type="submit"
                className="w-full text-white font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
                style={{'--bounce-scale': 1.05} as React.CSSProperties}
              >
                Login as Teacher
              </Button>
            </div>
          </form>
          <div className="mt-6 flex justify-between items-center text-sm font-body animate-in fade-in-0 delay-800 duration-1000 fill-mode-both">
            <Link href="#" className="text-primary hover:underline">
              Forgot Password?
            </Link>
            <Link href="/teacher/signup" className="text-primary hover:underline">
              New here? Sign up as Teacher
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
