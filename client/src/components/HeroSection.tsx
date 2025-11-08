import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, FileText, Briefcase } from "lucide-react";
import { personalInfo, researchInterests } from "@/data/portfolioData";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-name">
                {personalInfo.name}
                <span className="text-primary">, {personalInfo.title}</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-medium text-foreground/90" data-testid="text-position">
                  {personalInfo.position}
                </p>
                <p className="text-lg text-muted-foreground" data-testid="text-department">
                  {personalInfo.department}
                </p>
                <p className="text-lg text-muted-foreground" data-testid="text-institution">
                  {personalInfo.institution}
                </p>
                <p className="text-lg font-medium text-primary/90" data-testid="text-subtitle">
                  {personalInfo.subTitle}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4" data-testid="text-tagline">
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* Research Interests Tags */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm"
                    data-testid={`badge-interest-${index}`}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("publications")}
                className="gap-2"
                data-testid="button-view-publications"
              >
                <FileText className="h-5 w-5" />
                View Publications
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="gap-2"
                data-testid="button-research-projects"
              >
                <Briefcase className="h-5 w-5" />
                Research Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="gap-2"
                data-testid="button-contact"
              >
                <Mail className="h-5 w-5" />
                Contact
              </Button>
            </div>

            {/* Download CV */}
            <div className="pt-2">
              <a href="/attached_assets/id-8-CV_1762620412606.pdf" download>
                <Button variant="secondary" size="lg" className="gap-2" data-testid="button-download-cv">
                  <Download className="h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl font-bold text-primary">JM</span>
                  </div>
                  <div className="text-sm text-muted-foreground px-4">
                    <p className="font-medium">Profile Photo</p>
                    <p className="text-xs">Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
