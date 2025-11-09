import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle"; // ✅ import your toggle

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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* === Top Navigation === */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* === Left: Logo === */}
            <button
              onClick={() => setLocation("/")}
              className="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
            >
              Dr. Jatinder Manhas
            </button>

            {/* === Center: Desktop Menu === */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location === item.path;
                return (
                  <Button
                    key={item.path}
                    variant="ghost"
                    size="sm"
                    onClick={() => setLocation(item.path)}
                    className={`relative text-sm font-medium rounded-md px-3 py-2 transition-all 
                      hover:bg-accent/40 hover:text-primary
                      ${
                        isActive
                          ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary rounded-none"
                          : "text-foreground/80"
                      }`}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>

            {/* === Right: Theme Toggle + Mobile Menu === */}
            <div className="flex items-center gap-2">
              <ThemeToggle /> {/* ✅ Right-side toggle inside nav */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-foreground" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* === Mobile Menu === */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t animate-in fade-in duration-200">
          <div className="flex flex-col p-6 gap-3">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => {
                    setLocation(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`justify-start text-base h-12 w-full rounded-md transition-all 
                    hover:bg-accent/40 hover:text-primary 
                    ${
                      isActive
                        ? "bg-accent text-primary font-medium"
                        : "text-foreground/80"
                    }`}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
