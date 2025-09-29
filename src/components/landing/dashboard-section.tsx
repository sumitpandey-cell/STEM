import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function DashboardSection() {
  const dashboardImage = PlaceHolderImages.find(
    (image) => image.id === "dashboard-mockup"
  );

  return (
    <section id="dashboard" className="py-20 sm:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Insightful Teacher Dashboard
          </h2>
          <p className="font-raleway mt-4 text-lg text-foreground/70">
            Monitor student progress, identify learning gaps, and provide targeted support with our powerful analytics dashboard.
          </p>
        </div>

        <div className="mt-12 relative" >
           {dashboardImage && (
             <div className="animate-in fade-in-0 slide-in-from-bottom-10 duration-1000">
                <div className="relative rounded-xl shadow-2xl shadow-primary/20 ring-1 ring-black/10">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl"></div>
                     <Image
                        src={dashboardImage.imageUrl}
                        alt={dashboardImage.description}
                        width={1200}
                        height={750}
                        className="rounded-xl"
                        data-ai-hint={dashboardImage.imageHint}
                        priority
                     />
                </div>
             </div>
           )}
        </div>
      </div>
    </section>
  );
}
