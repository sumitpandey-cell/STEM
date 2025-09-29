
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SIZE = 30;
const OBSTACLE_SIZE = 40;
const COLLECTIBLE_SIZE = 25;

type GameState = 'start' | 'playing' | 'over';

const ElectronPlayer = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    animate={{ x, y }}
    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    className="absolute w-[30px] h-[30px] bg-yellow-400 rounded-full border-2 border-yellow-200 shadow-lg"
    style={{
      boxShadow: '0 0 15px 5px rgba(250, 204, 21, 0.7)',
    }}
  >
    <div className="absolute inset-0.5 rounded-full bg-yellow-300 flex items-center justify-center text-black font-bold text-lg">e⁻</div>
  </motion.div>
);

const Obstacle = ({ x, y }: { x: number; y: number }) => (
  <div
    className="absolute w-[40px] h-[40px] bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl"
    style={{ left: x, top: y, boxShadow: '0 0 15px 5px rgba(239, 68, 68, 0.6)' }}
  >
    +
  </div>
);

const Collectible = ({ x, y }: { x: number; y: number }) => (
  <div
    className="absolute w-[25px] h-[25px] bg-green-400 rounded-full animate-pulse"
    style={{ left: x, top: y, boxShadow: '0 0 15px 5px rgba(74, 222, 128, 0.6)' }}
  />
);

export default function ElectronAdventurePage() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [score, setScore] = useState(0);
  const [playerPosition, setPlayerPosition] = useState({ x: GAME_WIDTH / 2, y: GAME_HEIGHT - PLAYER_SIZE - 10 });
  const { toast } = useToast();

  const obstacles = useMemo(() => [
    { x: 100, y: 400 },
    { x: 500, y: 300 },
    { x: 300, y: 150 },
  ], []);

  const [collectibles, setCollectibles] = useState([
    { id: 1, x: 200, y: 500 },
    { id: 2, x: 600, y: 450 },
    { id: 3, x: 400, y: 200 },
    { id: 4, x: 700, y: 100 },
  ]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameState !== 'playing') return;
    setPlayerPosition(prev => {
      let newX = prev.x;
      if (e.key === 'ArrowLeft') newX -= 20;
      if (e.key === 'ArrowRight') newX += 20;
      
      // Prevent player from going out of bounds
      newX = Math.max(0, Math.min(newX, GAME_WIDTH - PLAYER_SIZE));
      
      return { ...prev, x: newX };
    });
  }, [gameState]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  
  const checkCollisions = useCallback(() => {
      // Check for obstacle collisions
      for (const obstacle of obstacles) {
          const dx = playerPosition.x - obstacle.x;
          const dy = playerPosition.y - obstacle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < PLAYER_SIZE / 2 + OBSTACLE_SIZE / 2) {
              setGameState('over');
              toast({ title: 'Collision!', description: 'You hit a proton!', variant: 'destructive' });
              return;
          }
      }

      // Check for collectible collisions
      const newCollectibles = collectibles.filter(collectible => {
          const dx = playerPosition.x - collectible.x;
          const dy = playerPosition.y - collectible.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < PLAYER_SIZE / 2 + COLLECTIBLE_SIZE / 2) {
              setScore(s => s + 100);
              toast({ title: 'Energy collected!', description: '+100 points!' });
              return false; // Remove collectible
          }
          return true;
      });
      setCollectibles(newCollectibles);

  }, [playerPosition, obstacles, collectibles, toast]);


  useEffect(() => {
    if (gameState === 'playing') {
      const gameLoop = setInterval(() => {
        checkCollisions();
         if (collectibles.length === 0) {
            setGameState('over');
            toast({ title: 'Level Complete!', description: 'You collected all energy points!' });
        }
      }, 100);
      return () => clearInterval(gameLoop);
    }
  }, [gameState, checkCollisions, collectibles]);

  const startGame = () => {
    setScore(0);
    setPlayerPosition({ x: GAME_WIDTH / 2, y: GAME_HEIGHT - PLAYER_SIZE - 10 });
    setCollectibles([
        { id: 1, x: 200, y: 500 },
        { id: 2, x: 600, y: 450 },
        { id: 3, x: 400, y: 200 },
        { id: 4, x: 700, y: 100 },
    ]);
    setGameState('playing');
  };

  const renderGameContent = () => {
    switch (gameState) {
      case 'start':
        return (
          <Card className="w-full max-w-lg text-center bg-background/80 backdrop-blur-sm border-primary/30 shadow-2xl animate-in fade-in-0 duration-1000">
            <CardHeader>
              <CardTitle className="font-headline text-4xl font-bold animated-gradient-text">Electron Adventure</CardTitle>
              <CardDescription>Navigate the subatomic world!</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={startGame} size="lg">Start Game</Button>
            </CardContent>
          </Card>
        );
      case 'playing':
        return (
          <div
            className="relative bg-gray-900/50 border-2 border-primary rounded-2xl overflow-hidden"
            style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
          >
            <div className="absolute top-4 right-4 text-white font-bold text-2xl z-10">Score: {score}</div>
            <AnimatePresence>
              {collectibles.map(c => <Collectible key={c.id} x={c.x} y={c.y} />)}
            </AnimatePresence>
            {obstacles.map((o, i) => <Obstacle key={i} x={o.x} y={o.y} />)}
            <ElectronPlayer x={playerPosition.x} y={playerPosition.y} />
          </div>
        );
      case 'over':
        return (
          <Card className="w-full max-w-lg text-center bg-background/80 backdrop-blur-sm border-secondary/30 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-1000">
            <CardHeader>
              <CardTitle className="font-headline text-4xl font-bold animated-gradient-text">Game Over</CardTitle>
              <CardDescription>Your final score is:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-5xl font-bold text-accent">{score}</p>
              <div className="flex gap-4 justify-center">
                <Button onClick={startGame} size="lg">Play Again</Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/student/dashboard">Return to Dashboard</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return <div className="w-full h-full flex items-center justify-center">{renderGameContent()}</div>;
}
