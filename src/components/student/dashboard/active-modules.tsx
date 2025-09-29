
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getStemModules, StemModule } from '@/lib/student-data';
import { Zap, Ruler, Beaker, Brain } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap className="w-8 h-8 text-yellow-400" />,
  Ruler: <Ruler className="w-8 h-8 text-green-400" />,
  Beaker: <Beaker className="w-8 h-8 text-purple-400" />,
  Brain: <Brain className="w-8 h-8 text-pink-400" />,
};

export default function StemModules() {
  const [modules, setModules] = useState<StemModule[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getStemModules().then((data) => {
      setModules(data);
      setLoading(false);
    });
  }, []);

  const handleGameClick = (href: string) => {
    if (href) {
      router.push(href);
    }
  };

  if (loading) {
    return (
      <section>
        <h2 className="font-headline text-2xl font-bold mb-4">Your STEM Modules</h2>
        <div className="space-y-8">
          {[1, 2].map(section => (
            <div key={section}>
              <div className="h-8 bg-muted rounded w-1/4 mb-4 animate-pulse"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((index) => (
                  <Card key={index} className="flex flex-col justify-between">
                    <CardHeader>
                      <div className="animate-pulse">
                        <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-muted rounded w-full"></div>
                      </div>
                    </CardHeader>
                    <CardFooter>
                      <div className="w-full h-10 bg-muted rounded animate-pulse"></div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="font-headline text-2xl font-bold mb-6">Your STEM Modules</h2>
      <div className="space-y-10">
        {modules.map((module) => (
          <div key={module.title}>
            <div className="flex items-center gap-3 mb-4">
              {iconMap[module.iconName]}
              <h3 className="font-headline text-xl font-semibold">{module.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {module.games.map((game, index) => (
                <Card key={index} className="flex flex-col justify-between hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                      <div>
                        <CardTitle className="font-raleway">{game.title}</CardTitle>
                        <CardDescription>{game.description}</CardDescription>
                      </div>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleGameClick(game.href)}
                    >
                      {game.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
