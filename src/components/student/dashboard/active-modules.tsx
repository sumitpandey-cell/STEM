import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getActiveModules } from '@/lib/student-data';
import { Zap, Ruler, Beaker } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap className="w-8 h-8 text-yellow-400" />,
  Ruler: <Ruler className="w-8 h-8 text-green-400" />,
  Beaker: <Beaker className="w-8 h-8 text-purple-400" />,
};


export default async function ActiveModules() {
  const modules = await getActiveModules();

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
              <Button className="w-full">{module.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
