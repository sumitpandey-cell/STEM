import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-20 sm:py-28"
    >
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-8 md:p-12 text-center shadow-lg">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join the Movement in Education
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Ready to spark a change? Get started today and bring the future of learning to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background/20 text-white hover:bg-background/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              For Students
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              For Teachers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
