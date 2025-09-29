import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const achievements = [
  'Fast Learner',
  'Math Master',
  'Science Explorer',
  'Puzzle Pro',
  'Quiz Whiz',
  'Physics Phan',
  'Chemistry King',
];

export default function Achievements() {
  return (
    <section>
      <h2 className="font-headline text-2xl font-bold mb-4">Recent Achievements</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {achievements.map((achievement, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="hover:bg-muted/50 hover:shadow-md transition-all duration-300">
                  <CardContent className="flex items-center justify-center p-4">
                    <Badge variant="secondary" className="text-base py-2 px-4 transition-transform hover:scale-105 hover:shadow-accent/50 shadow-sm">
                      🏅 {achievement}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
