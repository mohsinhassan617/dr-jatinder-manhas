import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolioData";

export function AcademicSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="heading-academic">
            Academic Qualifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational journey and professional certifications
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative pl-0 sm:pl-20" data-testid={`education-item-${index}`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden sm:block" />

                <Card className="p-6 hover-elevate transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="text-lg font-semibold" data-testid={`text-degree-${index}`}>
                          {item.degree}
                        </h3>
                        <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full w-fit" data-testid={`text-year-${index}`}>
                          {item.year}
                        </span>
                      </div>
                      {item.field && (
                        <p className="text-sm text-muted-foreground" data-testid={`text-field-${index}`}>
                          {item.field}
                        </p>
                      )}
                      <p className="text-sm font-medium" data-testid={`text-institution-${index}`}>
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
