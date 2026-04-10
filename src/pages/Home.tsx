import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Code, Smartphone, Server, Building2, CheckCircle,
  Heart, Users, Target, Lightbulb,
  Mail, Phone, MapPin, Send,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import ceoImage from "@/assets/ceo-abdihafit.jpg";
import mventoryLogo from "@/assets/mventory-logo.png";
import { useState } from "react";

const Home = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const scrollTo = (location.state as any)?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:zahdeytech@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink, "_blank");
    toast({ title: "Opening email client", description: "Your message details have been prepared." });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom websites that are beautiful, fast, and built to convert. We create responsive designs that work flawlessly on any device.",
      features: ["Custom responsive designs", "E-commerce solutions", "Content management systems", "SEO optimization"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences and solve real business problems.",
      features: ["iOS & Android apps", "Cross-platform solutions", "Progressive web apps", "App maintenance & updates"],
    },
    {
      icon: Server,
      title: "IT Consulting",
      description: "Strategic technology guidance to help your organization make smart decisions about infrastructure, security, and digital transformation.",
      features: ["Technology strategy", "Infrastructure planning", "Security assessments", "Cloud migration"],
    },
    {
      icon: Building2,
      title: "Public Infrastructure",
      description: "Comprehensive infrastructure development for public facilities, ensuring they meet modern standards and community needs.",
      features: ["Facility design & planning", "Project management", "Construction oversight", "Maintenance programs"],
    },
  ];

  const values = [
    { icon: Heart, title: "Community First", description: "Every decision starts with: How does this benefit the communities we serve?" },
    { icon: Users, title: "Collaboration", description: "We partner with local communities, governments, and organizations for lasting impact." },
    { icon: Target, title: "Reliability", description: "We build systems communities can depend on, today and tomorrow." },
    { icon: Lightbulb, title: "Innovation", description: "We combine proven methods with cutting-edge technology for practical solutions." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Building Tomorrow's Utilities, Today
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
              We're a community-focused technology company developing sustainable utilities and digital solutions that make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" variant="secondary" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About ZAHDEY TECH</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make essential utilities and technology accessible, sustainable, and community-centered.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-16">
          <p>ZAHDEY TECH LIMITED was founded with a simple belief: access to reliable utilities and modern technology shouldn't be a luxury—it should be a right for every community.</p>
          <p>What started as a small team passionate about sustainable development has grown into a comprehensive utilities and technology development company. We've worked with communities across regions to deliver digital services and infrastructure that truly make a difference.</p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CEO */}
        <div className="max-w-md mx-auto">
          <Card className="border-border/50 hover:shadow-lg transition-shadow overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-secondary/20">
                <img src={ceoImage} alt="Abdihafit Ismail - CEO & Founder" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Abdihafit Ismail</h3>
              <p className="text-secondary font-semibold mb-4">CEO & Founder</p>
              <p className="text-muted-foreground leading-relaxed">
                A visionary technologist with deep expertise in web design, mobile app development, and IT consultancy. Abdihafit combines hands-on technical skill with strategic leadership to deliver innovative digital solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions spanning digital innovation and essential utilities development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Digital products built for the African market, solving real problems for real businesses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-border/50 overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Logo & Branding */}
                <div className="bg-gradient-to-br from-[#2E5339] to-[#1B065E] p-8 flex flex-col items-center justify-center text-center">
                  <img src={mventoryLogo} alt="M-VENTORY Logo" className="w-48 h-48 object-contain mb-4" />
                  <p className="text-primary-foreground/80 text-sm font-medium">
                    The Financial Operating System for African Small Businesses
                  </p>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-8 space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    M-VENTORY
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Millions of shop owners, market traders, and kiosk operators receive payments through M-Pesa — but have no record of what came in, what went out, or whether they made a profit. <strong className="text-foreground">M-VENTORY changes that.</strong>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A simple Android app that automatically reads your M-Pesa messages and instantly turns every transaction into a proper business record — no typing, no accounting knowledge, no stress. It tracks daily sales, weekly income, monthly profit, and expenses — all automatically.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Auto M-Pesa transaction capture",
                      "Real-time sales dashboard",
                      "KRA eTIMS compliance & invoicing",
                      "Biashara Score (0–100 health rating)",
                      "Daily, weekly & monthly reports",
                      "Built for African businesses",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground italic pt-2">
                    Starting in Kenya and expanding across East and West Africa — M-VENTORY is the financial backbone of the next generation of African entrepreneurs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Reach out to us and let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <a href="mailto:zahdeytech@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors block">zahdeytech@gmail.com</a>
                    <a href="mailto:abdihafitofficial@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors block">abdihafitofficial@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <a href="tel:+254722940735" className="text-muted-foreground hover:text-secondary transition-colors">+254 722 940 735</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">Opposite Jamia Mosque, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
