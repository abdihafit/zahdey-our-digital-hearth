import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", sectionId: "hero" },
    { name: "About Us", sectionId: "about" },
    { name: "Services", sectionId: "services" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ZAHDEY TECH
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button variant="default" size="sm" onClick={() => scrollToSection("contact")}>
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose key={item.sectionId} asChild>
                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className="text-lg font-medium text-foreground hover:text-secondary transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button variant="default" size="lg" onClick={() => scrollToSection("contact")} className="mt-4">
                    Get Started
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
