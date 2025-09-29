import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Lightbulb, Puzzle, WifiOff } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Interactive Quizzes",
    description: "Engaging quizzes for grades 6-12 with real-time feedback and detailed explanations.",
    delay: 200,
  },
  {
    icon: <Puzzle className="w-8 h-8 text-secondary" />,
    title: "STEM Puzzles",
    description: "Brain-teasing puzzles that enhance critical thinking and problem-solving skills.",
    delay: 400,
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-accent" />,
    title: "Simulations",
    description: "Explore complex science concepts through hands-on, interactive simulations.",
    delay: 600,
  },
  {
    icon: <WifiOff className="w-8 h-8 text-destructive" />,
    title: "Offline Mode",
    description: "Access content and track your progress even without an internet connection.",
    delay: 800,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            A New Way to Learn STEM
          </h2>
          <p className="font-raleway mt-4 text-lg text-foreground/70">
            EduSpark combines cutting-edge technology with proven pedagogical methods to make learning fun, effective, and accessible for everyone.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="animate-in fade-in-0 slide-in-from-bottom-10 fill-mode-both"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <Card className="h-full text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-background">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-raleway font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
