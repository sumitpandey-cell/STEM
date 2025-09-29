import CtaSection from "@/components/landing/cta-section";
import DashboardSection from "@/components/landing/dashboard-section";
import FeaturesSection from "@/components/landing/features-section";
import HeroSection from "@/components/landing/hero-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import ImpactSection from "@/components/landing/impact-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ImpactSection />
        <HowItWorksSection />
        <DashboardSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
