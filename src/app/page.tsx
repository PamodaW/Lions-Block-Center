import { AboutSection } from "@/components/sections/about-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsBand } from "@/components/sections/stats-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesSection />
      <ProjectsGrid />
      <ProcessSteps />
      <AboutSection />
      <CtaBanner />
    </>
  );
}
