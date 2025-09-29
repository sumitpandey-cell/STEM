'use client';

import { useState } from 'react';
import StartScreen from '@/components/student/balloon-pop/start-screen';
import GamePlay from '@/components/student/balloon-pop/game-play';
import GameOverScreen from '@/components/student/balloon-pop/game-over-screen';

export type GameState = 'start' | 'playing' | 'over';

export default function BalloonPopPage() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [finalScore, setFinalScore] = useState(0);

  const startGame = () => {
    setGameState('playing');
  };

  const endGame = (score: number) => {
    setFinalScore(score);
    setGameState('over');
  };

  const restartGame = () => {
    setFinalScore(0);
    setGameState('start');
  };

  return (
    <>
      {gameState === 'start' && <StartScreen onStart={startGame} />}
      {gameState === 'playing' && <GamePlay onGameOver={endGame} />}
      {gameState === 'over' && <GameOverScreen score={finalScore} onRestart={restartGame} />}
    </>
  );
}
