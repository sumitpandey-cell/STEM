import { Button } from '@/components/ui/button';
import { Book, Home, LogOut, Medal, Trophy, User } from 'lucide-react';
import Link from 'next/link';

export default function GameHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm animate-in fade-in slide-in-from-top-4 duration-1000">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/student/dashboard" className="mr-6 flex items-center space-x-2">
          <span className="font-bold font-headline text-lg animated-gradient-text">
            Math Quest
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex flex-grow">
          <Link href="/student/dashboard" className="font-medium text-foreground/60 transition-colors hover:text-foreground/80 flex items-center gap-2">
            <Home /> Dashboard
          </Link>
          <Link href="#" className="font-medium text-foreground/60 transition-colors hover:text-foreground/80 flex items-center gap-2">
            <Trophy /> Leaderboard
          </Link>
        </nav>
        <Button variant="destructive" asChild>
          <Link href="/student/dashboard"><LogOut /> Exit Game</Link>
        </Button>
      </div>
    </header>
  );
}
