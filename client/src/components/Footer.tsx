import { personalInfo } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold">{personalInfo.name}, {personalInfo.title}</p>
            <p className="text-sm text-muted-foreground">
              {personalInfo.position}, {personalInfo.institution}
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with dedication to research and education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
