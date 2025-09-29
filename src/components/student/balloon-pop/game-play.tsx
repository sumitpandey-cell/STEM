'use client';

import { useState, useEffect, useCallback } from 'react';
import { getBalloonPopQuestions, BalloonQuestion } from '@/lib/balloon-pop-data';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const Balloon = ({
  option,
  onClick,
  isAnswered,
  isCorrect,
  isSelected,
  style,
}: {
  option: string;
  onClick: (option: string) => void;
  isAnswered: boolean;
  isCorrect: boolean;
  isSelected: boolean;
  style: React.CSSProperties;
}) => (
  <div
    className={cn(
      "absolute flex items-center justify-center text-white text-2xl font-bold cursor-pointer transition-all duration-500",
      "w-24 h-32 bg-red-500 rounded-full rounded-b-lg",
      isAnswered && isCorrect && isSelected && "animate-in zoom-out-0 fade-out-0",
      isAnswered && isSelected && !isCorrect && "animate-in shake",
      isAnswered && !isSelected && "opacity-30"
    )}
    style={style}
    onClick={() => onClick(option)}
  >
    {option}
    <div className="absolute bottom-0 w-3 h-3 bg-red-600 rounded-b-full transform translate-y-1" />
  </div>
);

export default function GamePlay({ onGameOver }: { onGameOver: (score: number) => void }) {
  const [questions, setQuestions] = useState<BalloonQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    getBalloonPopQuestions().then((qs) => setQuestions(qs.sort(() => Math.random() - 0.5)));
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onGameOver(score);
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, score, onGameOver]);

  const nextQuestion = useCallback(() => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  }, [questions.length]);

  const handleAnswer = useCallback((option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;

    if (isCorrect) {
      setScore((s) => s + 100);
      toast({
        title: '🎉 Pop! Correct!',
        description: '+100 points! +10 XP!',
      });
    } else {
      toast({
        title: '❌ Woops!',
        description: 'That was not the right balloon.',
        variant: 'destructive',
      });
    }

    setTimeout(() => {
      nextQuestion();
    }, 1500);
  }, [isAnswered, questions, currentQuestionIndex, nextQuestion, toast]);

  if (questions.length === 0) {
    return <div>Loading Game...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  const balloonPositions = [
    { top: '10%', left: '15%', backgroundColor: '#FF6B6B' },
    { top: '30%', left: '70%', backgroundColor: '#4ECDC4' },
    { top: '60%', left: '20%', backgroundColor: '#FFD93D' },
    { top: '50%', left: '85%', backgroundColor: '#5DADE2' },
  ];

  return (
    <div className="w-full h-[70vh] relative flex flex-col items-center justify-between p-8 bg-background/50 rounded-2xl shadow-lg border border-border">
      <div className="w-full flex justify-between items-center text-white">
        <div className="text-2xl font-bold">Score: <span className="text-accent">{score}</span></div>
        <div className={cn("text-3xl font-bold font-mono", timeLeft < 10 && "text-red-500 animate-pulse")}>
          {timeLeft}
        </div>
      </div>
      
      <div className="text-center my-8">
        <p className="text-4xl md:text-6xl font-bold animated-gradient-text">{currentQuestion.question}</p>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        {currentQuestion.options.map((option, i) => {
          const isCorrect = option === currentQuestion.correctAnswer;
          const isSelected = option === selectedAnswer;
          const posStyle = balloonPositions[i];
          
          return (
            <Balloon
              key={i}
              option={option}
              onClick={handleAnswer}
              isAnswered={isAnswered}
              isCorrect={isCorrect}
              isSelected={isSelected}
              style={{
                top: posStyle.top,
                left: posStyle.left,
                backgroundColor: posStyle.backgroundColor,
                animation: `float ${(i % 2 === 0 ? 6 : 8) + i}s ease-in-out infinite`,
              }}
            />
          );
        })}
      </div>

      <div />
    </div>
  );
}
