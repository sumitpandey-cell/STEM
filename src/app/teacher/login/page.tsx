'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Lock, BarChart2, Pencil } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

export default function TeacherLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: 'Login Failed',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      setLoading(false);
      return;
    }
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Success',
        description: 'Logged in successfully!',
      });
      router.push('/teacher/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      let errorMessage = 'An error occurred during login';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email address';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please try again later';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email or password';
          break;
        default:
          errorMessage = error.message || 'Login failed';
      }
      
      toast({
        title: 'Login Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Pencil className="absolute top-[15%] left-[10%] w-20 h-20 text-primary/30 animate-float-subtle-1" />
        <BarChart2 className="absolute bottom-[20%] right-[15%] w-24 h-24 text-secondary/30 animate-float-subtle-2" />
        <Pencil className="absolute bottom-[10%] left-[25%] w-16 h-16 text-accent/30 animate-float-subtle-3 opacity-50" />
      </div>
      <Card className="w-full max-w-md mx-4 p-2 sm:p-4 bg-background/80 backdrop-blur-sm border-border shadow-2xl animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl font-bold tracking-tight animated-gradient-text">Welcome Back, Teacher!</CardTitle>
          <CardDescription className="font-body text-foreground/70 pt-2">
            Log in to manage classes, track progress, and empower students.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 animate-in fade-in-0 delay-200 duration-1000 fill-mode-both">
              <Input 
                type="email" 
                placeholder="Email" 
                className="font-body" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative space-y-2 animate-in fade-in-0 delay-400 duration-1000 fill-mode-both">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="pl-10 font-body"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <div className="animate-in fade-in-0 delay-600 duration-1000 fill-mode-both">
              <Button
                type="submit"
                className="w-full text-white font-bold bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login as Teacher'}
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
