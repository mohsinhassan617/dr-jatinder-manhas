import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/research", label: "Research" },
  { path: "/publications", label: "Publications" },
  { path: "/awards", label: "Awards" },
  { path: "/events", label: "Events & FDPs" },
  { path: "/teaching", label: "Teaching & Admin" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setLocation("/")}
              className="text-lg font-semibold hover-elevate px-3 py-1 rounded-md transition-colors"
              data-testid="link-home"
            >
              Dr. Jatinder Manhas
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  size="sm"
                  onClick={() => setLocation(item.path)}
                  className={`text-sm ${location === item.path ? 'bg-accent' : ''}`}
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-background/95 backdrop-blur-sm pt-16">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                onClick={() => {
                  setLocation(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`justify-start text-base h-12 w-full ${location === item.path ? 'bg-accent' : ''}`}
                data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
