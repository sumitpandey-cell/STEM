'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Book, FlaskConical, Gamepad2, Medal } from 'lucide-react';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';


const AnimatedIllustration = () => (
    <div className="absolute inset-0 -z-10 opacity-70">
        <Book className="absolute top-[10%] left-[5%] w-16 h-16 text-primary/30 animate-float-1" />
        <Gamepad2 className="absolute top-[20%] right-[10%] w-20 h-20 text-secondary/30 animate-float-2" />
        <FlaskConical className="absolute bottom-[15%] left-[20%] w-24 h-24 text-accent/30 animate-float-3" />
        <Medal className="absolute bottom-[30%] right-[15%] w-16 h-16 text-primary/30 animate-float-1" />
    </div>
)

export default function StudentSignupPage() {
    const [fullName, setFullName] = useState('');
    const [grade, setGrade] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast({
                title: "Passwords don't match",
                description: 'Please check your passwords and try again.',
                variant: 'destructive',
            });
            return;
        }
         if (!grade) {
            toast({
                title: 'Please select a grade',
                description: 'You must select your grade to sign up.',
                variant: 'destructive',
            });
            return;
        }
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: fullName });
            
            // Save student data to Firestore
            await setDoc(doc(db, "students", user.uid), {
                fullName: fullName,
                grade: parseInt(grade),
                email: email,
            });

            router.push('/student/dashboard');
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
      <AnimatedIllustration />
      <Card className="w-full max-w-md mx-4 p-2 sm:p-4 bg-background/80 backdrop-blur-sm border-border shadow-2xl animate-in fade-in-0 duration-1000">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl font-bold animated-gradient-text">Start Your Learning Journey</CardTitle>
          <CardDescription className="font-body text-foreground/70 pt-2">
            Create your free account to play, learn, and earn rewards.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="animate-in fade-in-0 delay-200 duration-1000 fill-mode-both">
              <Input type="text" placeholder="Full Name" required className="font-body" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            
            <div className="animate-in fade-in-0 delay-300 duration-1000 fill-mode-both">
              <Select onValueChange={setGrade} value={grade} required>
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
              <Input type="email" placeholder="Email" required className="font-body" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="animate-in fade-in-0 delay-500 duration-1000 fill-mode-both">
              <Input type="password" placeholder="Password" required className="font-body" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="animate-in fade-in-0 delay-600 duration-1000 fill-mode-both">
              <Input type="password" placeholder="Confirm Password" required className="font-body" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="pt-2 animate-in fade-in-0 delay-700 duration-1000 fill-mode-both">
              <Button
                type="submit"
                className="w-full text-white font-bold bg-gradient-to-r from-secondary to-accent transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 animate-pulse-slow hover:animate-none"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Sign Up as Student'}
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
