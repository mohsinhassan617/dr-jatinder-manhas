import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teachingExperience, administrativeRoles } from "@/data/portfolioData";
import { BookOpen, Briefcase } from "lucide-react";

export default function TeachingPage() {
  return (
    <div className="min-h-screen py-16 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Teaching & Administration</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Courses taught and leadership roles in academic administration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Teaching Experience</h2>
            </div>
            <div className="space-y-4">
              {teachingExperience.map((experience, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-teaching-${index}`}>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">{experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">Administrative Roles</h2>
            </div>
            <div className="space-y-4">
              {administrativeRoles.map((role, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-admin-${index}`}>
                  <CardHeader className="gap-2">
                    <CardTitle className="text-xl">{role.role}</CardTitle>
                    {role.period && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{role.period}</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{role.department}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
