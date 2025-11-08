import { ThemeProvider } from "@/context/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import ResearchPage from "@/pages/ResearchPage";
import PublicationsPage from "@/pages/PublicationsPage";
import AwardsPage from "@/pages/AwardsPage";
import EventsPage from "@/pages/EventsPage";
import TeachingPage from "@/pages/TeachingPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import { Footer } from "@/components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/research" component={ResearchPage} />
      <Route path="/publications" component={PublicationsPage} />
      <Route path="/awards" component={AwardsPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/teaching" component={TeachingPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Navigation />
          {/* You can place ThemeToggle in the Navbar or corner */}
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <main>
            <Router />
          </main>
          <ScrollToTop />
          <Footer />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
