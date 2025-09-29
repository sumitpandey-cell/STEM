'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getActiveModules } from '@/lib/student-data';
import { Zap, Ruler, Beaker } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap className="w-8 h-8 text-yellow-400" />,
  Ruler: <Ruler className="w-8 h-8 text-green-400" />,
  Beaker: <Beaker className="w-8 h-8 text-purple-400" />,
};

export default function ActiveModules() {
  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getActiveModules().then((data) => {
      setModules(data);
      setLoading(false);
    });
  }, []);

  const handleModuleClick = (module: any) => {
    // For now, all modules navigate to the math-quest page.
    // This can be updated later when other game pages are created.
    if (module.title === 'Math Quest') {
      router.push('/student/math-quest');
    } else {
      router.push('/student/math-quest');
    }
  };

  if (loading) {
    return (
      <section>
        <h2 className="font-headline text-2xl font-bold mb-4">Your Current Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </CardHeader>
              <CardFooter>
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="font-headline text-2xl font-bold mb-4">Your Current Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <Card key={index} className="flex flex-col justify-between hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                {iconMap[module.iconName]}
                <div>
                  <CardTitle className="font-raleway">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={() => handleModuleClick(module)}
              >
                {module.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
