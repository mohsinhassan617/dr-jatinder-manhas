import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { eventsOrganized } from "@/data/portfolioData";
import { Calendar, Users, MapPin } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & FDPs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conferences, workshops, and faculty development programs organized
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {eventsOrganized.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="hover-elevate" data-testid={`card-event-${index}`}>
                    <CardHeader className="gap-3">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <CardTitle className="text-xl leading-tight flex-1">{event.title}</CardTitle>
                        <Badge variant="outline">{event.type.toUpperCase()}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-semibold">{event.role}</span>
                      </div>
                      {event.collaboration && (
                        <p className="text-sm text-muted-foreground">In collaboration with: {event.collaboration}</p>
                      )}
                      {event.sponsors && (
                        <p className="text-sm text-muted-foreground">Sponsored by: {event.sponsors}</p>
                      )}
                      {event.description && (
                        <p className="text-sm text-muted-foreground pt-2">{event.description}</p>
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
    </div>
  );
}
