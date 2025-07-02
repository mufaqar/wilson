import CardGrid from "@/components/BlogGrid";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HeroSection from "@/components/HeroSection";
import Industries from "@/components/industries";
import ServicesSection from "@/components/ServicesSection";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Industries />
      <Partners />
      <CaseStudiesSection />
       <CardGrid />
    </>
  );
}
