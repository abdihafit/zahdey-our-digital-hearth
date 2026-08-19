import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/siteContent";
import { scrollToSection } from "@/lib/scroll";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              {company.shortName}
            </p>
            <h3 className="text-2xl font-bold text-foreground">Built for practical execution.</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {company.tagline} We help teams turn ideas, workflows, and operating needs into
              usable digital systems.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("hero")} className="text-sm text-muted-foreground transition-colors hover:text-secondary">Home</button></li>
              <li><button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground transition-colors hover:text-secondary">About</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground transition-colors hover:text-secondary">Capabilities</button></li>
              <li><button onClick={() => scrollToSection("products")} className="text-sm text-muted-foreground transition-colors hover:text-secondary">Product</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground transition-colors hover:text-secondary">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Focus Areas</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Product strategy</li>
              <li className="text-sm text-muted-foreground">Web and app delivery</li>
              <li className="text-sm text-muted-foreground">Operational systems</li>
              <li className="text-sm text-muted-foreground">Infrastructure-minded planning</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="mr-2 h-4 w-4 text-secondary" />
                {company.email}
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="mr-2 h-4 w-4 text-secondary" />
                {company.phone}
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0 text-secondary" />
                {company.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
