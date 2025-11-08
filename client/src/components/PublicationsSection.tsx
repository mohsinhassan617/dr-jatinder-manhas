import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Book, ExternalLink } from "lucide-react";
import { selectedPublications } from "@/data/portfolioData";

export function PublicationsSection() {
  const journals = selectedPublications.filter((pub) => pub.type === "journal");
  const conferences = selectedPublications.filter((pub) => pub.type === "conference");
  const books = selectedPublications.filter((pub) => pub.type === "book");

  const totalPublications = 54;

  return (
    <section id="publications" className="py-16 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="heading-publications">
            Publications & Research Output
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed research publications and scholarly contributions
          </p>
          <div className="flex justify-center">
            <Badge variant="outline" className="text-lg px-4 py-2">
              {totalPublications}+ Publications
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="journals" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-1" data-testid="tabs-publications">
            <TabsTrigger value="journals" className="gap-2 py-3" data-testid="tab-journals">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Journal </span>Articles
            </TabsTrigger>
            <TabsTrigger value="conferences" className="gap-2 py-3" data-testid="tab-conferences">
              <BookOpen className="h-4 w-4" />
              Conferences
            </TabsTrigger>
            <TabsTrigger value="books" className="gap-2 py-3" data-testid="tab-books">
              <Book className="h-4 w-4" />
              <span className="hidden sm:inline">Book </span>Chapters
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journals" className="space-y-6">
            <div className="space-y-4">
              {journals.map((pub, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`journal-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-base leading-relaxed" data-testid={`text-journal-title-${index}`}>
                      {pub.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <Badge variant="secondary">{pub.journal}</Badge>
                      <Badge variant="outline">{pub.year}</Badge>
                    </div>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        data-testid={`link-doi-${index}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        DOI: {pub.doi}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="conferences" className="space-y-6">
            <div className="space-y-4">
              {conferences.map((pub, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`conference-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-base leading-relaxed" data-testid={`text-conference-title-${index}`}>
                      {pub.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <Badge variant="secondary">{pub.conference}</Badge>
                      <Badge variant="outline">{pub.year}</Badge>
                    </div>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        data-testid={`link-conference-doi-${index}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        DOI: {pub.doi}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="space-y-6">
            <div className="space-y-4">
              {books.map((pub, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`book-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-base leading-relaxed" data-testid={`text-book-title-${index}`}>
                      {pub.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Book:</span> {pub.book}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary">{pub.publisher}</Badge>
                        <Badge variant="outline">{pub.year}</Badge>
                      </div>
                    </div>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        data-testid={`link-book-doi-${index}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        DOI: {pub.doi}
                      </a>
                    )}
                    {pub.isbn && (
                      <p className="text-sm text-muted-foreground">
                        ISBN: {pub.isbn}
                      </p>
                    )}
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
