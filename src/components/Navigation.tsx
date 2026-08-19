import { ArrowRight, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { company } from "@/data/siteContent";
import { scrollToSection } from "@/lib/scroll";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  const navItems = [
    { name: "Home", sectionId: "hero" },
    { name: "Capabilities", sectionId: "services" },
    { name: "Product", sectionId: "products" },
    { name: "Contact", sectionId: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => goToSection("hero")} className="flex items-center gap-3 text-left">
            <div className="hidden h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--accent)))] shadow-[var(--shadow-soft)] sm:block" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                Nairobi, Kenya
              </p>
              <span className="text-lg font-bold tracking-[0.08em] text-foreground sm:text-xl">
                {company.shortName}
              </span>
            </div>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => goToSection(item.sectionId)}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button variant="default" size="sm" className="gap-2" onClick={() => goToSection("contact")}>
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <div className="rounded-3xl bg-muted p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                    {company.shortName}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {company.tagline}
                  </p>
                </div>
                {navItems.map((item) => (
                  <SheetClose key={item.sectionId} asChild>
                    <button
                      onClick={() => goToSection(item.sectionId)}
                      className="text-lg font-medium text-foreground hover:text-secondary transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button variant="default" size="lg" onClick={() => goToSection("contact")} className="mt-4 gap-2">
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
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
