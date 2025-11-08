import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AcademicSection } from "@/components/AcademicSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { EventsSection } from "@/components/EventsSection";
import { TeachingSection } from "@/components/TeachingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AcademicSection />
        <ResearchSection />
        <ProjectsSection />
        <PublicationsSection />
        <AwardsSection />
        <EventsSection />
        <TeachingSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
