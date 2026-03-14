import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Memberships", href: "#memberships" },
    { label: "Programs", href: "#programs" },
    { label: "Schedule", href: "#schedule" },
    { label: "Coaches", href: "#coaches" },
    { label: "Courts", href: "#courts" },
    { label: "FAQs", href: "#faqs" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/20">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
            <span className="text-foreground font-bold text-lg">PB</span>
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">Pickleball Club</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex text-accent border-accent/50 hover:bg-accent/10"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-background font-semibold hidden sm:inline-flex"
          >
            Join Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-accent/20 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/10 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-accent/20 space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-accent border-accent/50 hover:bg-accent/10"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-background font-semibold"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
