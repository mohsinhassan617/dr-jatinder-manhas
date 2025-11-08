import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Briefcase } from "lucide-react";
import { teachingExperience, administrativeRoles, committeeMembers } from "@/data/portfolioData";

export function TeachingSection() {
  return (
    <section id="teaching" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="heading-teaching">
            Teaching & Administrative Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic positions and leadership responsibilities
          </p>
        </div>

        <div className="space-y-12">
          {/* Teaching Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Teaching Experience
            </h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {teachingExperience.map((experience, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg hover-elevate border"
                      data-testid={`teaching-${index}`}
                    >
                      <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span className="text-sm leading-relaxed">{experience}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Administrative Roles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Administrative Leadership
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {administrativeRoles.map((role, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`admin-role-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg" data-testid={`text-admin-role-${index}`}>
                      {role.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground" data-testid={`text-admin-department-${index}`}>
                      {role.department}
                    </p>
                    {role.period && (
                      <p className="text-sm font-medium text-primary">{role.period}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Committee Memberships */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="committees" className="border rounded-lg px-1">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover-elevate rounded-lg" data-testid="accordion-committees">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">Committee Memberships</h3>
                      <p className="text-sm text-muted-foreground">Academic and administrative committees</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ul className="space-y-3 mt-2">
                    {committeeMembers.map((member, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg hover-elevate border"
                        data-testid={`committee-${index}`}
                      >
                        <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-sm leading-relaxed">{member}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
