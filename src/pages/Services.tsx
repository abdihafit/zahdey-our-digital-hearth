import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Server, 
  Building2,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const digitalServices = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom websites that are beautiful, fast, and built to convert. We create responsive designs that work flawlessly on any device.",
      features: [
        "Custom responsive designs",
        "E-commerce solutions",
        "Content management systems",
        "SEO optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences and solve real business problems.",
      features: [
        "iOS & Android apps",
        "Cross-platform solutions",
        "Progressive web apps",
        "App maintenance & updates",
      ],
    },
    {
      icon: Server,
      title: "IT Consulting",
      description: "Strategic technology guidance to help your organization make smart decisions about infrastructure, security, and digital transformation.",
      features: [
        "Technology strategy",
        "Infrastructure planning",
        "Security assessments",
        "Cloud migration",
      ],
    },
  ];

  const utilitiesServices = [
    {
      icon: Building2,
      title: "Public Infrastructure",
      description: "Comprehensive infrastructure development for public facilities, ensuring they meet modern standards and community needs.",
      features: [
        "Facility design & planning",
        "Project management",
        "Construction oversight",
        "Maintenance programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive solutions spanning digital innovation and essential utilities development.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Modern technology services that help businesses and organizations thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {digitalServices.map((service, index) => {
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
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
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
      </section>

      {/* Utilities Services Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Utilities Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Essential infrastructure services that provide communities with reliable access to water, energy, and connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {utilitiesServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you need digital solutions or utilities infrastructure, we're here to help bring your vision to life.
          </p>
          <Button size="lg" variant="secondary">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
