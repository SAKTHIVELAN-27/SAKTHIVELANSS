import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Certificates", path: "/certificates" },
  { name: "Journey", path: "/journey" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center glow-border">
              <span className="font-display text-primary font-bold text-lg">S</span>
            </div>
            <span className="font-display text-lg tracking-wider hidden sm:block">
              SAKTHIVELAN<span className="text-primary">-SS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link font-body text-sm tracking-wider uppercase ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-body text-lg tracking-wider uppercase transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
