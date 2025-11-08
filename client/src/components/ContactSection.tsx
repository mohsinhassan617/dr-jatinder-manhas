import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Download,
} from "lucide-react";
import { SiResearchgate, SiOrcid, SiWhatsapp, SiAcademia } from "react-icons/si";
import { personalInfo } from "@/data/portfolioData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  insertContactMessageSchema,
  type InsertContactMessage,
} from "@/types/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

  // WhatsApp redirect with prefilled message
  const onSubmit = (data: InsertContactMessage) => {
    const whatsappNumber = "919419173793";
    const message = `
Hello Dr. Manhas,
My name is ${data.name} (${data.email}).

${data.message}

Best regards,
— Sent via the website contact form`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    form.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research inquiries, or
            academic discussions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* === Contact Form === */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below to send a WhatsApp message
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <SiWhatsapp className="h-5 w-5 mr-2" />
                    Send via WhatsApp
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* === Contact Info === */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3 p-3 rounded-lg border hover:bg-accent/10 transition-colors">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-primary block"
                    >
                      {personalInfo.email}
                    </a>
                    <a
                      href={`mailto:${personalInfo.emailSecondary}`}
                      className="text-sm text-muted-foreground hover:text-primary block"
                    >
                      {personalInfo.emailSecondary}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 p-3 rounded-lg border hover:bg-accent/10 transition-colors">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a
                      href={`tel:${personalInfo.mobile}`}
                      className="text-sm text-muted-foreground hover:text-primary block"
                    >
                      {personalInfo.mobile}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-3 rounded-lg border hover:bg-accent/10 transition-colors">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      {personalInfo.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* === Academic Profiles === */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Profiles</CardTitle>
                <CardDescription>
                  Connect and follow my research
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0077B5]/10">
                      <Linkedin className="h-5 w-5 text-[#0077B5]" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                </a>

                {/* ResearchGate */}
                <a
                  href={personalInfo.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#00CCBB]/10">
                      <SiResearchgate className="h-5 w-5 text-[#00CCBB]" />
                    </div>
                    <span className="text-sm font-medium">ResearchGate</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                </a>

                {/* ORCID */}
                <a
                  href={personalInfo.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#A6CE39]/10">
                      <SiOrcid className="h-5 w-5 text-[#A6CE39]" />
                    </div>
                    <span className="text-sm font-medium">ORCID</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                </a>

                {/* Academia.edu */}
                <a
                  href={personalInfo.academia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#3B5998]/10">
                      <SiAcademia className="h-5 w-5 text-[#3B5998]" />
                    </div>
                    <span className="text-sm font-medium">Academia.edu</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                </a>
              </CardContent>
            </Card>

            {/* CV Download */}
            <a
              href="/CV.pdf"
              download="Dr_Jatinder_Manhas_CV.pdf"
              className="block"
            >
              <Button variant="outline" size="lg" className="w-full gap-2 mt-2">
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
