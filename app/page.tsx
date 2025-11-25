import HeroSection from "../components/HeroSection";
import ModulesSection from "../components/ModulesSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <HeroSection />
      <ModulesSection />
      <RoadmapSection />
      <FooterSection />
    </main>
  );
}
