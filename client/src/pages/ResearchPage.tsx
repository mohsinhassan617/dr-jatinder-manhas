import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { researchInterests, phdAwarded, phdOngoing, researchProjects } from "@/data/portfolioData";
import { Users, Target, Calendar, Award } from "lucide-react";

export default function ResearchPage() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring cutting-edge technologies in AI, Machine Learning, and Neuroscience
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Research Interests</h2>
          <div className="flex flex-wrap gap-3">
            {researchInterests.map((interest, index) => (
              <Badge
                key={index}
                variant={selectedInterest === interest ? "default" : "secondary"}
                className="px-4 py-2 text-base cursor-pointer toggle-elevate toggle-elevated"
                onClick={() => setSelectedInterest(selectedInterest === interest ? null : interest)}
                data-testid={`badge-interest-${index}`}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">PhD Supervision</h2>
          <Tabs defaultValue="awarded" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2 mb-6">
              <TabsTrigger value="awarded" data-testid="tab-awarded-phds">
                Awarded PhDs
              </TabsTrigger>
              <TabsTrigger value="ongoing" data-testid="tab-ongoing-phds">
                Ongoing PhDs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="awarded">
              <div className="grid md:grid-cols-2 gap-6">
                {phdAwarded.map((phd, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-awarded-phd-${index}`}>
                    <CardHeader className="gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>{phd.awarded}</span>
                      </div>
                      <CardTitle className="text-lg">{phd.name}</CardTitle>
                      <CardDescription className="text-base">{phd.thesis}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ongoing">
              <div className="grid md:grid-cols-2 gap-6">
                {phdOngoing.map((phd, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-ongoing-phd-${index}`}>
                    <CardHeader className="gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Enrolled {phd.enrolled}</span>
                      </div>
                      <CardTitle className="text-lg">{phd.name}</CardTitle>
                      <CardDescription className="text-base">{phd.thesis}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Research Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-project-${index}`}>
                <CardHeader className="gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm font-semibold text-primary">{project.agency}</p>
                  {project.scheme && (
                    <p className="text-sm text-muted-foreground">{project.scheme}</p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">Budget: </span>
                    {project.budget}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
