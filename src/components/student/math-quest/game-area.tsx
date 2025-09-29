'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMathQuestions, GameQuestion } from '@/lib/math-quest-data';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const Typewriter = ({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default function GameArea() {
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    getMathQuestions().then(setQuestions);
  }, []);

  const handleAnswer = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;

    toast({
      title: isCorrect ? '🎉 Correct!' : '❌ Wrong Answer!',
      description: isCorrect ? '+10 XP earned!' : 'Better luck next time.',
      variant: isCorrect ? 'default' : 'destructive',
    });

    setTimeout(() => {
      setIsAnswered(false);
      setSelectedAnswer(null);
      setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    }, 2000);
  };

  if (questions.length === 0) {
    return <Card className="flex items-center justify-center h-96"><p>Loading Questions...</p></Card>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card className="bg-background/70 backdrop-blur-sm border-primary/50 shadow-lg animate-in fade-in-0 duration-1000">
      <CardHeader>
        <CardTitle className="font-headline text-3xl font-bold text-center animated-gradient-text">
          Solve the Challenge!
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="h-20 flex items-center justify-center">
           <h2 className="text-4xl font-bold font-mono">
            <Typewriter text={currentQuestion.question} />
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 my-8">
          {currentQuestion.options.map((option) => {
            const isCorrect = option === currentQuestion.correctAnswer;
            const isSelected = option === selectedAnswer;
            const isWrong = isSelected && !isCorrect;

            return (
              <Button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className={cn(
                  "h-24 text-3xl font-bold transition-all duration-300 transform hover:scale-110",
                  isAnswered && isCorrect && "bg-green-500/80 animate-in zoom-in-105",
                  isAnswered && isWrong && "bg-destructive/80 animate-in shake",
                  isAnswered && !isSelected && "opacity-50"
                )}
              >
                {option}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
