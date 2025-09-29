'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle, PenSquare, Ruler } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';


export default function TeacherSignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: 'Please check your passwords and try again.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: fullName });
      // You can save `schoolName` to your database (e.g., Firestore) associated with the user UID.
      router.push('/teacher/dashboard');
    } catch (error: any) {
      toast({
        title: 'Signup Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 -z-10">
            <PenSquare className="absolute top-[10%] left-[20%] w-20 h-20 text-primary/30 animate-float-subtle-1" />
            <BookOpen className="absolute bottom-[15%] right-[10%] w-24 h-24 text-secondary/30 animate-float-subtle-2" />
            <Ruler className="absolute top-[50%] right-[20%] w-20 h-20 text-accent/30 animate-float-subtle-3" />
        </div>
      <Card className="w-full max-w-md mx-4 p-2 sm:p-4 bg-background/80 backdrop-blur-sm border-border shadow-2xl animate-in fade-in-0 duration-1000">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl font-bold animated-gradient-text">Create Teacher Account</CardTitle>
          <CardDescription className="font-body text-foreground/70 pt-2">
            Set up your profile to guide and track students’ STEM journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="animate-in fade-in-0 delay-200 duration-1000 fill-mode-both">
              <Input type="text" placeholder="Full Name" required className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="animate-in fade-in-0 delay-300 duration-1000 fill-mode-both">
              <Input type="email" placeholder="Email" required className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="animate-in fade-in-0 delay-400 duration-1000 fill-mode-both">
              <Input type="password" placeholder="Password" required className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="animate-in fade-in-0 delay-500 duration-1000 fill-mode-both">
              <Input type="password" placeholder="Confirm Password" required className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="animate-in fade-in-0 delay-600 duration-1000 fill-mode-both">
              <Input type="text" placeholder="School Name (Optional)" className="font-body focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
            </div>
            <div className="pt-2 animate-in fade-in-0 delay-700 duration-1000 fill-mode-both">
              <Button type="submit" className="w-full text-white font-bold bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg relative" disabled={loading}>
                {loading && <CheckCircle className="absolute left-4 h-5 w-5 animate-in zoom-in-50 duration-500" />}
                {loading ? 'Creating Account...' : 'Sign Up as Teacher'}
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
