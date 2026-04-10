import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ZAHDEY TECH LIMITED
            </h3>
            <p className="text-sm text-muted-foreground">
              Building sustainable utilities and digital solutions for communities worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("hero")} className="text-sm text-muted-foreground hover:text-secondary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-secondary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-secondary transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-secondary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Web Design</li>
              <li className="text-sm text-muted-foreground">App Development</li>
              <li className="text-sm text-muted-foreground">IT Consulting</li>
              <li className="text-sm text-muted-foreground">Public Infrastructure</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-secondary" />
                zahdeytech@gmail.com
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-secondary" />
                +254 722 940 735
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-secondary flex-shrink-0" />
                Opposite Jamia Mosque, Nairobi
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZAHDEY TECH LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
