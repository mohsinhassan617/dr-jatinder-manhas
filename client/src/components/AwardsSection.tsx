import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Plane, Globe } from "lucide-react";
import { awards, travelSponsorships } from "@/data/portfolioData";

export function AwardsSection() {
  return (
    <section id="awards" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="heading-awards">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fellowships, awards, and international recognitions
          </p>
        </div>

        <div className="space-y-12">
          {/* Fellowships & Awards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Fellowships & Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`award-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg" data-testid={`text-award-title-${index}`}>
                      {award.title}
                    </CardTitle>
                    {award.year && (
                      <Badge variant="secondary" className="w-fit">
                        {award.year}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground" data-testid={`text-award-description-${index}`}>
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* International Travel Sponsorships */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Plane className="h-6 w-6 text-primary" />
              International Travel Sponsorships
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {travelSponsorships.map((travel, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`travel-${index}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base leading-tight" data-testid={`text-travel-location-${index}`}>
                          {travel.location}
                        </CardTitle>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {travel.year}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 pt-0">
                    <p className="text-sm font-medium text-muted-foreground">
                      <span className="text-xs uppercase tracking-wide">Sponsor:</span> {travel.sponsor}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-travel-conference-${index}`}>
                      {travel.conference}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
