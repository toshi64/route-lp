import HeroSection from "@/components/HeroSection";
import SuccessBanner from "@/components/SuccessBanner";
import SuccessSamples from "@/components/SuccessSamples";

export default function Home() {
  return (
    <>
      <HeroSection /> 
      <SuccessBanner />
      <SuccessSamples />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to WAYS</h1>
      </div>
    </>
  );
}