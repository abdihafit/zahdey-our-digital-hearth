import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Server, Zap, Droplet, Radio, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Design",
      description: "Beautiful, responsive websites that engage your community",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Mobile solutions that connect people and services",
    },
    {
      icon: Server,
      title: "IT Consulting",
      description: "Expert guidance for your technology infrastructure",
    },
    {
      icon: Droplet,
      title: "Water Systems",
      description: "Sustainable water management and distribution",
    },
    {
      icon: Zap,
      title: "Energy Solutions",
      description: "Renewable energy infrastructure for communities",
    },
    {
      icon: Radio,
      title: "Telecommunications",
      description: "Connecting communities with reliable networks",
    },
  ];

  const values = [
    {
      title: "Community First",
      description: "We prioritize the needs of the communities we serve",
    },
    {
      title: "Sustainability",
      description: "Building solutions that last for generations",
    },
    {
      title: "Innovation",
      description: "Leveraging technology to solve real-world problems",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
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
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From digital solutions to essential utilities, we deliver comprehensive services that empower communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-secondary/50"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guiding principles that shape everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-background hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's work together to create sustainable solutions for your community.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/services">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
