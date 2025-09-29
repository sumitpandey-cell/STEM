'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, LogOut, Menu, Trophy, User } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/student/dashboard', icon: <Home /> },
  { name: 'Profile', href: '#', icon: <User /> },
  { name: 'Achievements', href: '#', icon: <Trophy /> },
];

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm animate-in fade-in slide-in-from-top-4 duration-1000">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg animated-gradient-text">
              Gamified STEM
            </span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-foreground/60 transition-colors hover:text-foreground/80 flex items-center gap-2"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="outline" asChild>
            <Link href="/"><LogOut /> Logout</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <span className="font-bold font-headline text-lg animated-gradient-text">Gamified STEM</span>
              </Link>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-medium text-foreground transition-colors hover:text-foreground/80 text-lg flex items-center gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
                <hr className="my-4" />
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/"><LogOut /> Logout</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
