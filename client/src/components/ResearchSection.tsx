import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, CheckCircle2, Clock } from "lucide-react";
import { phdAwarded, phdOngoing } from "@/data/portfolioData";

export function ResearchSection() {
  return (
    <section id="research" className="py-16 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="heading-research">
            Research & Supervision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ph.D. guidance and doctoral research supervision
          </p>
        </div>

        <Tabs defaultValue="awarded" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto p-1" data-testid="tabs-phd">
            <TabsTrigger value="awarded" className="gap-2 py-3" data-testid="tab-awarded">
              <CheckCircle2 className="h-4 w-4" />
              <span className="hidden sm:inline">Theses </span>Awarded ({phdAwarded.length})
            </TabsTrigger>
            <TabsTrigger value="ongoing" className="gap-2 py-3" data-testid="tab-ongoing">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Scholars </span>Ongoing ({phdOngoing.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="awarded" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {phdAwarded.map((scholar, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`phd-awarded-${index}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/10">
                          <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg" data-testid={`text-scholar-name-${index}`}>
                            {scholar.name}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              Enrolled: {scholar.enrolled}
                            </Badge>
                            <Badge className="text-xs bg-green-600 hover:bg-green-700">
                              Awarded: {scholar.awarded}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-thesis-${index}`}>
                      "{scholar.thesis}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {phdOngoing.map((scholar, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`phd-ongoing-${index}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg" data-testid={`text-ongoing-name-${index}`}>
                            {scholar.name}
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs mt-1">
                            Enrolled: {scholar.enrolled}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-ongoing-thesis-${index}`}>
                      "{scholar.thesis}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
