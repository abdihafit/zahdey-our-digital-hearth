import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Lightbulb, Code, Smartphone, Server } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Every decision we make starts with one question: How does this benefit the communities we serve? We're not just building infrastructure; we're building relationships.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best solutions come from working together. We partner with local communities, governments, and organizations to create lasting impact.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Utilities are essential. That's why we're committed to building systems that communities can depend on, today and tomorrow.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We combine proven methods with cutting-edge technology to deliver solutions that are both practical and forward-thinking.",
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
              About ZAHDEY TECH
            </h1>
            <p className="text-xl text-primary-foreground/90">
              We're on a mission to make essential utilities and technology accessible, sustainable, and community-centered.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              ZAHDEY TECH LIMITED was founded with a simple belief: access to reliable utilities and modern technology shouldn't be a luxury—it should be a right for every community.
            </p>
            <p>
              What started as a small team passionate about sustainable development has grown into a comprehensive utilities and technology development company. We've worked with communities across regions to deliver water systems, energy solutions, telecommunications infrastructure, and digital services that truly make a difference.
            </p>
            <p>
              Today, we're proud to combine our expertise in traditional utilities development with cutting-edge digital solutions. Whether we're designing a water distribution system or developing a custom web application, our approach remains the same: listen first, collaborate always, and build for the long term.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We offer a range of digital services tailored to help businesses and communities thrive in the modern world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10">
                  <Code className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  Web Design & Development
                </h3>
                <p className="text-muted-foreground">
                  We craft beautiful, responsive websites that tell your story and drive results. From corporate sites to e-commerce platforms, we build custom digital experiences that engage your audience, strengthen your brand, and grow your business online.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                  <Smartphone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  App Development
                </h3>
                <p className="text-muted-foreground">
                  We design and develop mobile applications for iOS and Android that solve real problems. Whether it's a customer-facing app or an internal business tool, we deliver intuitive, high-performance solutions that users love and businesses depend on.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  General IT Consultancy
                </h3>
                <p className="text-muted-foreground">
                  Our expert consultants help organisations navigate the complex world of technology. From infrastructure planning and cybersecurity assessments to cloud migration and digital transformation strategy, we provide actionable guidance that aligns technology with your goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            What Drives Us
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our values aren't just words on a page—they're the principles that guide every project we take on.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Our Mission
          </h2>
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <p className="text-xl text-foreground text-center leading-relaxed">
              To develop sustainable, reliable utilities and innovative digital solutions that empower communities, foster growth, and create lasting positive impact for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Behind every successful project is a dedicated team of experts who care deeply about making a difference.
          </p>
          <div className="text-center">
            <p className="text-muted-foreground">
              Team profiles coming soon. Our multidisciplinary team includes engineers, developers, project managers, and community liaisons—all working together to deliver excellence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
