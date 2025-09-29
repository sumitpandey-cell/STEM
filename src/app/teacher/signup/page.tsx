'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle, PenSquare, Ruler } from 'lucide-react';

export default function TeacherSignupPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-[#E0F7FA] overflow-hidden">
        <div className="absolute inset-0 -z-10">
            <PenSquare className="absolute top-[10%] left-[20%] w-20 h-20 text-gray-300/60 animate-float-subtle-1" />
            <BookOpen className="absolute bottom-[15%] right-[10%] w-24 h-24 text-gray-300/60 animate-float-subtle-2" />
            <Ruler className="absolute top-[50%] right-[20%] w-20 h-20 text-gray-300/60 animate-float-subtle-3" />
        </div>
      <Card className="w-full max-w-md mx-4 p-2 sm:p-4 bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-2xl animate-in fade-in-0 duration-1000">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl font-bold">Create Teacher Account</CardTitle>
          <CardDescription className="font-body text-foreground/70 pt-2">
            Set up your profile to guide and track students’ STEM journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="animate-in fade-in-0 delay-200 duration-1000 fill-mode-both">
              <Input type="text" placeholder="Full Name" required className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" />
            </div>
            <div className="animate-in fade-in-0 delay-300 duration-1000 fill-mode-both">
              <Input type="email" placeholder="Email" required className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" />
            </div>
            <div className="animate-in fade-in-0 delay-400 duration-1000 fill-mode-both">
              <Input type="password" placeholder="Password" required className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" />
            </div>
            <div className="animate-in fade-in-0 delay-500 duration-1000 fill-mode-both">
              <Input type="password" placeholder="Confirm Password" required className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" />
            </div>
            <div className="animate-in fade-in-0 delay-600 duration-1000 fill-mode-both">
              <Input type="text" placeholder="School Name (Optional)" className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" />
            </div>
            <div className="pt-2 animate-in fade-in-0 delay-700 duration-1000 fill-mode-both">
              <Button type="submit" className="w-full text-white font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg relative">
                {isSubmitted && <CheckCircle className="absolute left-4 h-5 w-5 animate-in zoom-in-50 duration-500" />}
                Sign Up as Teacher
              </Button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm font-body animate-in fade-in-0 delay-800 duration-1000 fill-mode-both">
            Already have an account?{' '}
            <Link href="/teacher/login" className="text-primary font-medium hover:underline">
              Login here.
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
