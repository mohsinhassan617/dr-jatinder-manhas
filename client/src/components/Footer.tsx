import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-gradient-to-br from-background via-background to-accent/10 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">This website is owned by Dr. Jatinder Manhas and managed by Precursor.Code</span> — All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <p className="text-sm">
            Developed with ❤️ by{" "}
            <span className="font-semibold text-primary">Mohsin Hassan</span>
          </p>

          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://github.com/mohsinhassan617"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <SiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohsinhassan617"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <SiLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:mohsinhassan@outlook.in"
              className="hover:text-primary transition-colors"
            >
              <SiGmail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
