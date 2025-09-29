import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Trophy, UserPlus } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-10 h-10 text-primary" />,
    title: "1. Create Your Account",
    description: "Quick and easy onboarding to get you started on your learning adventure in minutes.",
  },
  {
    icon: <Gamepad2 className="w-10 h-10 text-secondary" />,
    title: "2. Play & Learn",
    description: "Dive into a world of interactive quizzes, puzzles, and simulations designed for your grade level.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-accent" />,
    title: "3. Earn Rewards",
    description: "Collect points, unlock badges, and climb the leaderboard as you master new skills.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Get Started in 3 Easy Steps
          </h2>
          <p className="font-raleway mt-4 text-lg text-foreground/70">
            Our platform is designed to be simple, intuitive, and engaging from the moment you sign up.
          </p>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="md:flex items-center md:gap-12 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-300 fill-mode-both"
                style={{ animationDelay: `${index * 200}ms`}}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6 md:order-2'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="flex-shrink-0 bg-background p-3 rounded-full">
                        {step.icon}
                      </div>
                      <div>
                        <CardTitle className="font-raleway font-semibold text-xl">{step.title}</CardTitle>
                        <CardDescription className="mt-1">{step.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
