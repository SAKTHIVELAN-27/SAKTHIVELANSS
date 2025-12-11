import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
              <span className="font-display text-primary font-bold text-sm">S</span>
            </div>
            <span className="font-display text-sm tracking-wider">
              SAKTHIVELAN<span className="text-primary">-SS</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:sakthivelan@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/sakthivelan-ss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sakthivelan-ss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Sakthivelan-SS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
