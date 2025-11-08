import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  researchInterests,
  phdAwarded,
  phdOngoing,
  researchProjects,
} from "@/data/portfolioData";
import { Users, Target, Calendar, Award, Brain } from "lucide-react";

export default function ResearchPage() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring advances in Artificial Intelligence, Deep Learning, and
            Neuroscience
          </p>
        </div>

        {/* -------- PhD Supervision -------- */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            PhD Supervision
          </h2>

          <Tabs defaultValue="awarded" className="w-full">
            {/* === Tabs Header (With Ribbon Style) === */}
            <TabsList className="relative flex justify-center bg-transparent border-b border-border mb-6">
              <TabsTrigger
                value="awarded"
                className="relative px-6 py-3 text-sm font-medium transition-all data-[state=active]:text-primary 
                after:absolute after:bottom-[-1px] after:left-0 after:h-[3px] after:w-full after:rounded-full 
                after:bg-transparent data-[state=active]:after:bg-green-500"
              >
                Awarded PhDs
              </TabsTrigger>

              <TabsTrigger
                value="ongoing"
                className="relative px-6 py-3 text-sm font-medium transition-all data-[state=active]:text-primary 
                after:absolute after:bottom-[-1px] after:left-0 after:h-[3px] after:w-full after:rounded-full 
                after:bg-transparent data-[state=active]:after:bg-yellow-500"
              >
                Ongoing PhDs
              </TabsTrigger>
            </TabsList>

            {/* === Awarded === */}
            <TabsContent value="awarded">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {phdAwarded.map((phd, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden transition-all hover:shadow-lg bg-card text-card-foreground"
                  >
                    {/* Photo */}
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={phd.photo}
                        alt={phd.name}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Info */}
                    <CardContent className="p-4 text-center space-y-2">
                      <h3 className="text-lg font-semibold">{phd.name}</h3>

                      {/* Awarded Year with Icon */}
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4 text-green-500" />
                        <span>Awarded: {phd.awarded}</span>
                      </div>

                      <p className="text-sm text-justify leading-relaxed text-muted-foreground">
                        {phd.thesis}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* === Ongoing PhDs === */}
            <TabsContent value="ongoing">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phdOngoing.map((phd, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-all text-center bg-card text-card-foreground"
                  >
                    {/* Placeholder Image */}
                    <div className="h-56 bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center">
                      <Brain className="h-14 w-14 text-yellow-600 dark:text-yellow-400" />
                    </div>

                    {/* Details */}
                    <CardHeader className="border-t bg-yellow-50/40 dark:bg-transparent">
                      <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Users className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        <span className="font-medium">
                          Enrolled {phd.enrolled}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-semibold mb-2">
                        {phd.name}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground text-justify leading-relaxed px-3">
                        “{phd.thesis}”
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* -------- Research Projects -------- */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Research Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all text-center bg-card text-card-foreground"
              >
                <CardHeader className="gap-3">
                  <div className="flex justify-center">
                    <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm font-semibold text-primary">
                    {project.agency}
                  </p>
                  {project.scheme && (
                    <p className="text-sm text-muted-foreground">
                      {project.scheme}
                    </p>
                  )}
                  <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
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
