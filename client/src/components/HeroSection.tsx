import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, FileText, Briefcase } from "lucide-react";
import { personalInfo, researchInterests } from "@/data/portfolioData";
import { useLocation } from "wouter";

export function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-start justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 transition-colors duration-500 pt-10"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col lg:flex-row items-start justify-between gap-10">
        
        {/* === Left: Content === */}
        <div className="flex-1 text-left space-y-6">
          {/* Name + Title */}
          <div>
  <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight text-foreground flex flex-wrap items-baseline gap-2">
    {personalInfo.name}
<span className="text-primary/90 text-2xl sm:text-3xl font-semibold tracking-tight">
      ({personalInfo.title})
    </span>
  </h1>
</div>

          {/* Position + Department */}
          <div className="space-y-1.5 border-l-4 border-primary/70 pl-4">
            <p className="text-base sm:text-lg text-primary font-medium">
              {personalInfo.position}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              {personalInfo.department}{", "}{personalInfo.institution}
              
            </p>
            <p className="text-base sm:text-lg text-primary font-medium">
              {personalInfo.position2}
              </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              {personalInfo.dept2}{", "}{personalInfo.institution}
            </p>
          </div>

          {/* Tagline */}
          <p className="italic text-muted-foreground text-lg border-l-4 border-primary/60 pl-4 mt-3">
            “{personalInfo.tagline}”
          </p>

          {/* === Research Interests Box === */}
          <div className="pt-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Research Interests
            </h3>
            <div className="group border border-border bg-card/40 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:bg-card/70">
              <div className="flex flex-wrap gap-2 justify-start">
                {researchInterests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm rounded-full transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* === CTA Buttons === */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              size="lg"
              onClick={() => setLocation("/publications")}
              className="gap-2 hover:scale-[1.03] transition-transform"
            >
              <FileText className="h-5 w-5" />
              View Publications
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => setLocation("/research")}
              className="gap-2 hover:bg-primary/10 transition-colors"
            >
              <Briefcase className="h-5 w-5" />
              Research Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => setLocation("/contact")}
              className="gap-2 hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Contact
            </Button>
          </div>

          {/* === Download CV === */}
          <div>
            <a href="/CV.pdf" download="Dr_Jatinder_Manhas_CV.pdf" className="block mt-4">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:bg-primary/10"
              >
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>
        </div>

        {/* === Right: Profile Image === */}
<div className="flex-1 flex justify-center lg:justify-end items-start">
  <div className="relative w-[400px] h-[400px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 p-5 flex items-center justify-center shadow-2xl 
                  transition-all duration-500 hover:shadow-primary/40 hover:scale-[1.03] hover:-rotate-1">
    <div className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden ring-8 ring-primary/30 shadow-2xl 
                    transition-all duration-500 hover:ring-primary hover:ring-offset-4 hover:ring-offset-background hover:shadow-xl hover:scale-[1.05]">
      <img
        src="/jatinder.jpg"
        alt="Dr. Jatinder Manhas"
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
