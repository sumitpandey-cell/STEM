import { AtomIcon } from "@/components/icons/atom-icon";
import { MicroscopeIcon } from "@/components/icons/microscope-icon";
import { RocketIcon } from "@/components/icons/rocket-icon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-gray-500/10 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 opacity-10 text-primary animate-float-1">
          <AtomIcon className="w-full h-full" />
        </div>
        <div className="absolute top-[60%] right-[10%] w-20 h-20 opacity-10 text-secondary animate-float-2">
          <MicroscopeIcon className="w-full h-full" />
        </div>
        <div className="absolute bottom-[20%] left-[20%] w-28 h-28 opacity-10 text-accent animate-float-3">
          <RocketIcon className="w-full h-full" />
        </div>
         <div className="absolute top-[20%] right-[15%] w-16 h-16 opacity-10 text-primary/80 animate-float-2">
          <RocketIcon className="w-full h-full" />
        </div>
        <div className="absolute bottom-[15%] right-[30%] w-24 h-24 opacity-10 text-secondary/80 animate-float-1">
          <AtomIcon className="w-full h-full" />
        </div>
      </div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div 
          className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-both"
        >
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 animated-gradient-text">
            Gamify Learning.
            <br />
            Empower Rural Minds.
          </h1>
        </div>
        <div 
          className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 fill-mode-both"
        >
          <p className="font-raleway max-w-2xl text-lg md:text-xl text-foreground/80 mb-8">
            Interactive STEM quizzes, puzzles & simulations for grades 6–12.
          </p>
        </div>
        <div 
          className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600 fill-mode-both"
        >
          <Button size="lg" className="group text-lg py-7 px-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
