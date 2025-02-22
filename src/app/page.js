import HeroSection from "@/components/HeroSection";
import SuccessBanner from "@/components/SuccessBanner";
import SuccessSamples from "@/components/SuccessSamples";
import SuccessMessage from "@/components/SuccessMessage";
import AboutSection from "@/components/AboutSection";
import ConcernsSection from "@/components/ConcernsSection";
import BreakthroughSection from "@/components/BreakthroughSection";
import CTASection from "@/components/CTASection";


export default function Home() {
  return (
    <>
      <HeroSection /> 
      <SuccessBanner />
      <SuccessSamples />
      <SuccessMessage />
      <AboutSection />
      <ConcernsSection />
      <BreakthroughSection />
      <CTASection />
      
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to WAYS</h1>
      </div>
    </>
  );
}