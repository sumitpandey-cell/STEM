import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Beaker, Ruler, Zap } from 'lucide-react';

const modules = [
  {
    title: 'Physics Puzzle',
    description: 'Solve motion & force challenges',
    cta: 'Resume',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: 'Math Quest',
    description: 'Algebra & geometry adventures',
    cta: 'Play',
    icon: <Ruler className="w-8 h-8 text-green-400" />,
  },
  {
    title: 'Chemistry Lab',
    description: 'Elements & reactions as fun games',
    cta: 'Start',
    icon: <Beaker className="w-8 h-8 text-purple-400" />,
  },
];

export default function ActiveModules() {
  return (
    <section>
      <h2 className="font-headline text-2xl font-bold mb-4">Your Current Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <Card key={index} className="flex flex-col justify-between hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                {module.icon}
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
