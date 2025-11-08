import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { selectedPublications } from "@/data/portfolioData";
import { BookOpen, FileText, Library } from "lucide-react";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research contributions in top-tier journals, conferences, and books
          </p>
        </div>

        <Tabs defaultValue="journals" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
            <TabsTrigger value="journals" className="gap-2" data-testid="tab-journals">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Journal Articles</span>
              <span className="sm:hidden">Journals</span>
            </TabsTrigger>
            <TabsTrigger value="conferences" className="gap-2" data-testid="tab-conferences">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Conference Papers</span>
              <span className="sm:hidden">Conferences</span>
            </TabsTrigger>
            <TabsTrigger value="books" className="gap-2" data-testid="tab-books">
              <Library className="h-4 w-4" />
              <span className="hidden sm:inline">Books & Chapters</span>
              <span className="sm:hidden">Books</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journals">
            <div className="grid gap-6">
              {selectedPublications
                .filter((pub) => pub.type === "journal")
                .map((pub, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-journal-${index}`}>
                    <CardHeader className="gap-3">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <CardTitle className="text-lg leading-tight flex-1">{pub.title}</CardTitle>
                        <Badge variant="outline">{pub.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="font-semibold text-primary">{pub.journal}</p>
                      {pub.doi && (
                        <p className="text-sm text-muted-foreground">DOI: {pub.doi}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="conferences">
            <div className="grid gap-6">
              {selectedPublications
                .filter((pub) => pub.type === "conference")
                .map((pub, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-conference-${index}`}>
                    <CardHeader className="gap-3">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <CardTitle className="text-lg leading-tight flex-1">{pub.title}</CardTitle>
                        <Badge variant="outline">{pub.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="font-semibold text-primary">{pub.conference}</p>
                      {pub.doi && (
                        <p className="text-sm text-muted-foreground">DOI: {pub.doi}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="books">
            <div className="grid gap-6">
              {selectedPublications
                .filter((pub) => pub.type === "book")
                .map((pub, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-book-${index}`}>
                    <CardHeader className="gap-3">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <CardTitle className="text-lg leading-tight flex-1">{pub.title}</CardTitle>
                        <Badge variant="outline">{pub.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="font-semibold text-primary">{pub.publisher}</p>
                      {pub.book && (
                        <p className="text-sm text-muted-foreground">In: {pub.book}</p>
                      )}
                      {pub.isbn && (
                        <p className="text-sm text-muted-foreground">ISBN: {pub.isbn}</p>
                      )}
                      {pub.doi && (
                        <p className="text-sm text-muted-foreground">DOI: {pub.doi}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
