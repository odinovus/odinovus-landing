import HeroSection from "../components/HeroSection";
import ModulesSection from "../components/ModulesSection";
import RoadmapSection from "@/components/RoadmapSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="bg-[#0B0F1A] text-white">
      {/* Hero */}
      <section className="relative py-32">
        <HeroSection />
        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-b from-transparent to-[#0B0F1A] pointer-events-none" />
      </section>

      {/* Modules */}
      <section className="relative bg-[#0B0F1A] py-32">
        {/* Gradient overlay top */}
        <div className="absolute top-0 left-0 w-full h-16 bg-linear-to-t from-transparent to-[#0B0F1A] pointer-events-none" />
        <ModulesSection />
        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-b from-transparent to-[#070A12] pointer-events-none" />
      </section>

      {/* Roadmap */}
      <section className="relative bg-[#070A12] py-32">
        {/* Gradient overlay top */}
        <div className="absolute top-0 left-0 w-full h-16 bg-linear-to-t from-transparent to-[#0B0F1A] pointer-events-none" />
        <RoadmapSection />
        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-b from-transparent to-[#0B0F1A] pointer-events-none" />
      </section>

      {/* Contact */}
      <section className="relative bg-[#0B0F1A] py-32">
        {/* Gradient overlay top */}
        <div className="absolute top-0 left-0 w-full h-16 bg-linear-to-t from-transparent to-[#070A12] pointer-events-none" />
        <ContactSection />
        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-b from-transparent to-[#0B0F1A] pointer-events-none" />
      </section>
    </main>
  );
}
