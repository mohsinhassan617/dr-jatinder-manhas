import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download } from "lucide-react";
import { SiResearchgate, SiOrcid } from "react-icons/si";
import { personalInfo } from "@/data/portfolioData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    submitContactForm.mutate(data);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="heading-contact">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research inquiries, or academic discussions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message here..."
                            className="min-h-32 resize-none"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={submitContactForm.isPending}
                    data-testid="button-submit-contact"
                  >
                    {submitContactForm.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg hover-elevate border">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      {personalInfo.email}
                    </a>
                    <br />
                    <a
                      href={`mailto:${personalInfo.emailSecondary}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email-secondary"
                    >
                      {personalInfo.emailSecondary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover-elevate border">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Phone</p>
                    <a
                      href={`tel:${personalInfo.mobile}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      {personalInfo.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover-elevate border">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-address">
                      {personalInfo.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Academic Profiles</CardTitle>
                <CardDescription>Connect and follow my research</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover-elevate border transition-all group"
                  data-testid="link-linkedin"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0077B5]/10">
                      <Linkedin className="h-5 w-5 text-[#0077B5]" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={personalInfo.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover-elevate border transition-all group"
                  data-testid="link-researchgate"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#00CCBB]/10">
                      <SiResearchgate className="h-5 w-5 text-[#00CCBB]" />
                    </div>
                    <span className="text-sm font-medium">ResearchGate</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={personalInfo.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover-elevate border transition-all group"
                  data-testid="link-orcid"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#A6CE39]/10">
                      <SiOrcid className="h-5 w-5 text-[#A6CE39]" />
                    </div>
                    <span className="text-sm font-medium">ORCID</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={personalInfo.juProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover-elevate border transition-all group"
                  data-testid="link-ju-profile"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">JU Faculty Profile</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              </CardContent>
            </Card>

            {/* Download CV Button */}
            <a href="/attached_assets/id-8-CV_1762620412606.pdf" download>
              <Button variant="outline" size="lg" className="w-full gap-2" data-testid="button-download-cv-footer">
                <Download className="h-5 w-5" />
                Download Complete CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
