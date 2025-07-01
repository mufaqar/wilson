import CardGrid from "@/components/CardGrid";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
       <CardGrid />
    </>
  );
}
