import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { awards } from "@/data/portfolioData";
import { Award } from "lucide-react";

export default function AwardsPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Fellowships</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in research, teaching, and academic contributions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <div key={index} className="relative flex items-start">
                <div className="flex-1 pl-20">
                  <Card className="hover-elevate" data-testid={`card-award-${index}`}>
                    <CardHeader className="gap-3">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-primary" />
                          <CardTitle className="text-xl">{award.title}</CardTitle>
                        </div>
                        {award.year && <Badge variant="outline">{award.year}</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {award.description && (
                        <p className="text-muted-foreground">{award.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-8 transform -translate-x-1/2 mt-6">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
