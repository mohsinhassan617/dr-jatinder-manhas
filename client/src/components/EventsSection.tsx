import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Rocket, Calendar } from "lucide-react";
import { eventsOrganized } from "@/data/portfolioData";

const iconMap = {
  conference: GraduationCap,
  fdp: Rocket,
  workshop: Rocket,
  army: Users,
};

const colorMap = {
  conference: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
  fdp: "text-purple-600 dark:text-purple-400 bg-purple-500/10",
  workshop: "text-green-600 dark:text-green-400 bg-green-500/10",
  army: "text-orange-600 dark:text-orange-400 bg-orange-500/10",
};

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="heading-events">
            Events & FDPs Organized
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conferences, workshops, and academic events coordination
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {eventsOrganized.map((event, index) => {
              const Icon = iconMap[event.type as keyof typeof iconMap];
              const colorClass = colorMap[event.type as keyof typeof colorMap];

              return (
                <div key={index} className="relative pl-0 md:pl-20" data-testid={`event-${index}`}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 top-6 p-2 rounded-full ${colorClass} hidden md:block`}>
                    <Icon className="h-4 w-4" />
                  </div>

                  <Card className="hover-elevate transition-all">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`p-2 rounded-lg ${colorClass} shrink-0 md:hidden`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base leading-relaxed" data-testid={`text-event-title-${index}`}>
                              {event.title}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="outline" className="text-xs capitalize">
                                {event.type === "fdp" ? "FDP" : event.type}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {event.role}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                          <Calendar className="h-4 w-4" />
                          <span data-testid={`text-event-date-${index}`}>{event.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      {event.collaboration && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">In collaboration with:</span> {event.collaboration}
                        </p>
                      )}
                      {event.sponsors && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Sponsored by:</span> {event.sponsors}
                        </p>
                      )}
                      {event.scheme && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Scheme:</span> {event.scheme}
                        </p>
                      )}
                      {event.description && (
                        <p className="text-muted-foreground">{event.description}</p>
                      )}
                      {event.location && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Location:</span> {event.location}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
