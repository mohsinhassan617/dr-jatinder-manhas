import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle2, Clock } from "lucide-react";
import { phdAwarded, phdOngoing } from "@/data/portfolioData";


function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function ResearchSection() {
  return (
    <section id="research" className="py-16 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            PhD Supervision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Awarded and ongoing doctoral research under supervision
          </p>
        </div>

        <Tabs defaultValue="awarded" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto p-1 bg-muted/30 rounded-lg">
            <TabsTrigger
              value="awarded"
              className="gap-2 py-3 data-[state=active]:text-green-700 data-[state=active]:bg-green-100/50 rounded-md transition-colors"
            >
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Awarded PhDs
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="gap-2 py-3 data-[state=active]:text-yellow-700 data-[state=active]:bg-yellow-100/50 rounded-md transition-colors"
            >
              <Clock className="h-4 w-4 text-yellow-500" />
              Ongoing PhDs
            </TabsTrigger>
          </TabsList>

          {/* ===== Awarded ===== */}
          <TabsContent value="awarded" className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {phdAwarded.map((scholar, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg border border-green-200/60 transition-all flex flex-col"
                >
                  {/* Photo section */}
                  <div className="h-56 bg-white flex items-center justify-center">
                    {scholar.photo ? (
                      <img
                        src={scholar.photo}
                        alt={scholar.name}
                        className="object-cover w-full h-full"
                        onError={(e) => (e.currentTarget.src = "/phd/default.jpg")}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-green-100 text-green-700 font-semibold text-3xl">
                        {getInitials(scholar.name)}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <CardHeader className="flex flex-col items-center text-center p-4 border-t bg-green-50/30 flex-grow">
                    <Badge className="mb-2 text-xs bg-green-600 hover:bg-green-700">
                      Awarded {scholar.awarded}
                    </Badge>
                    <CardTitle className="text-lg font-semibold">{scholar.name}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Enrolled {scholar.enrolled}
                    </p>
                  </CardHeader>

                  {/* Thesis */}
                  <CardContent className="p-4 text-sm text-muted-foreground text-center italic bg-white flex items-center justify-center min-h-[100px]">
                    “{scholar.thesis}”
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ===== Ongoing ===== */}
          <TabsContent value="ongoing" className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {phdOngoing.map((scholar, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg border border-yellow-200/60 transition-all flex flex-col"
                >
                  {/* Icon section */}
                  <div className="h-56 bg-yellow-50 flex items-center justify-center">
                    <Brain className="h-14 w-14 text-yellow-500" />
                  </div>

                  {/* Info */}
                  <CardHeader className="flex flex-col items-center text-center p-4 border-t bg-yellow-50/30 flex-grow">
                    <Badge className="mb-2 text-xs bg-yellow-600 hover:bg-yellow-700">
                      Enrolled {scholar.enrolled}
                    </Badge>
                    <CardTitle className="text-lg font-semibold">{scholar.name}</CardTitle>
                  </CardHeader>

                  {/* Thesis */}
                  <CardContent className="p-4 text-sm text-muted-foreground text-center italic bg-white flex items-center justify-center min-h-[100px]">
                    “{scholar.thesis}”
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
