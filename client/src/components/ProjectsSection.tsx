import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Rocket, Building2, IndianRupee, Calendar } from "lucide-react";
import { researchProjects, laboratoriesEstablished } from "@/data/portfolioData";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="heading-projects">
            Research Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Funded research initiatives and technology infrastructure
          </p>
        </div>

        <div className="space-y-12">
          {/* Research Projects */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              Funded Research Projects
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {researchProjects.map((project, index) => (
                <AccordionItem key={index} value={`project-${index}`} className="border rounded-lg px-1">
                  <AccordionTrigger
                    className="hover:no-underline px-4 py-4 hover-elevate rounded-lg"
                    data-testid={`accordion-project-${index}`}
                  >
                    <div className="flex flex-col items-start gap-2 text-left pr-4">
                      <span className="font-semibold text-base" data-testid={`text-project-title-${index}`}>
                        {project.title}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.budget}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {project.duration}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-xs text-muted-foreground uppercase">Sponsoring Agency</p>
                          <p className="text-foreground" data-testid={`text-agency-${index}`}>{project.agency}</p>
                        </div>
                      </div>
                      {project.scheme && (
                        <div className="flex items-start gap-2">
                          <Rocket className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-xs text-muted-foreground uppercase">Scheme</p>
                            <p className="text-foreground">{project.scheme}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-2">
                        <IndianRupee className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-xs text-muted-foreground uppercase">Budget</p>
                          <p className="text-foreground font-semibold text-primary">{project.budget}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-xs text-muted-foreground uppercase">Duration</p>
                          <p className="text-foreground">{project.duration}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Laboratories Established */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Building2 className="h-6 w-6 text-primary" />
                Laboratories & Technology Infrastructure Established
              </CardTitle>
              <CardDescription>
                State-of-the-art research facilities and computational laboratories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-3">
                {laboratoriesEstablished.map((lab, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover-elevate border"
                    data-testid={`lab-item-${index}`}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                    <span className="text-sm">{lab}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
