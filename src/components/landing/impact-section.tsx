import AnimatedCounter from "@/components/ui/animated-counter";
import { Users, Zap, Milestone } from "lucide-react";

const stats = [
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    value: 15,
    label: "Engagement Increase",
    suffix: "%",
  },
  {
    icon: <Users className="w-10 h-10 text-secondary" />,
    value: 10,
    label: "Million+ Students Reached",
    suffix: "M+",
  },
  {
    icon: <Milestone className="w-10 h-10 text-accent" />,
    value: 5000,
    label: "Schools Partnered",
    suffix: "+",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Making a Tangible Impact
          </h2>
          <p className="font-raleway mt-4 text-lg text-foreground/70">
            We are proud to be a part of the educational journey for millions of students across the nation.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="flex flex-col items-center gap-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 fill-mode-both"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold tracking-tighter animated-gradient-text">
                <AnimatedCounter to={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-lg text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
