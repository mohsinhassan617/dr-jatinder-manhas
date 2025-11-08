import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolioData";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive timeline of academic achievements and professional milestones
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="hover-elevate">
                      <CardHeader className="gap-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <span className="text-sm font-semibold text-primary">{item.year}</span>
                        </div>
                        <CardTitle className="text-xl">{item.degree}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.institution}</p>
                        {item.field && (
                          <p className="text-sm text-muted-foreground mt-2">{item.field}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 mt-6">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
