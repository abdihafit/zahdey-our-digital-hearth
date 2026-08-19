import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useLocation } from "react-router-dom";
import CapabilityBadgeRow from "@/components/CapabilityBadgeRow";
import ContactDetails from "@/components/ContactDetails";
import ContactFormCard from "@/components/ContactFormCard";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FaqList from "@/components/FaqList";
import HighlightCard from "@/components/HighlightCard";
import MetricStrip from "@/components/MetricStrip";
import Navigation from "@/components/Navigation";
import ProductSpotlight from "@/components/ProductSpotlight";
import SectionHeading from "@/components/SectionHeading";
import Seo from "@/components/Seo";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import ceoImage from "@/assets/ceo-abdihafit.jpg";
import {
  capabilityBadges,
  company,
  faqs,
  heroMetrics,
  homeHighlights,
  productFeatures,
  productStats,
  services,
  testimonials,
  values,
} from "@/data/siteContent";
import { scrollToSection } from "@/lib/scroll";

const Home = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const scrollTarget = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTarget) {
      return;
    }

    window.setTimeout(() => {
      scrollToSection(scrollTarget);
    }, 100);
  }, [location.state]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailtoLink = `mailto:${company.email}?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    window.open(mailtoLink, "_blank");
    toast({
      title: "Opening email client",
      description: "Your message details have been prepared.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="ZAHDEY TECH | Digital Systems and Infrastructure-Minded Delivery"
        description="ZAHDEY TECH builds practical websites, apps, and operating systems for growing teams and community-focused organisations across East Africa."
      />
      <Navigation />

      <section id="hero" className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(105deg, hsl(var(--primary) / 0.9), hsl(var(--primary) / 0.78)), url(${heroImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl text-primary-foreground">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-primary-foreground/70">
                Community-rooted delivery
              </p>
              <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
                Digital systems that make daily work clearer.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/82 md:text-xl">
                We help businesses and organisations turn ideas, workflows, and public-facing
                service needs into practical products, platforms, and delivery plans.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollToSection("services")}
                  className="rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Explore Capabilities
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full border border-primary-foreground/35 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Start a Conversation
                </button>
              </div>
              <div className="mt-10">
                <MetricStrip metrics={heroMetrics} />
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/10 p-6 text-primary-foreground shadow-[var(--shadow-medium)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
                Built around execution
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-3xl ring-2 ring-primary-foreground/20">
                  <img
                    src={ceoImage}
                    alt="Abdihafit Ismail, founder of ZAHDEY TECH"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold">Abdihafit Ismail</p>
                  <p className="text-sm text-primary-foreground/72">Founder and delivery lead</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-primary-foreground/80">
                We bring together product thinking, technical delivery, and infrastructure-minded
                planning so teams can move from idea to dependable execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A practical partner for product, systems, and service delivery."
              description="ZAHDEY TECH works at the intersection of digital execution and real-world operating needs. Our focus is simple: deliver tools and plans that people can genuinely use."
              align="left"
            />
            <div className="mt-8">
              <CapabilityBadgeRow items={capabilityBadges} />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeHighlights.map((item) => (
              <HighlightCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Matters"
            title="Principles that keep our work grounded."
            description="We care about delivery quality, but we care just as much about whether the outcome makes life easier for the people using it."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <HighlightCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="A focused service mix for growing organisations."
          description="From strategy and software to public-facing delivery environments, we help teams structure work that can scale with confidence."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              tone={service.tone}
            />
          ))}
        </div>
      </section>

      <section id="products" className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Flagship Product"
            title="M-VENTORY turns payment messages into business visibility."
            description="Built for African small businesses, M-VENTORY helps owners understand cash flow, performance, and operational health without needing to become accountants."
          />
          <div className="mt-12">
            <ProductSpotlight
              title="M-VENTORY"
              description={[
                "Many shop owners and operators receive money through M-Pesa but still struggle to understand what came in, what went out, and whether the business actually made money.",
                "M-VENTORY reads mobile money activity and turns it into useful business records, giving owners a clearer view of sales, expenses, and patterns over time.",
              ]}
              features={productFeatures}
              stats={productStats}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Perspective"
          title="What people value in the way we work."
          description="The strongest feedback we hear is not just that something works, but that the work feels grounded, collaborative, and context-aware."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions teams usually ask first."
              description="If you are still shaping the project, that is completely fine. Early clarity is part of the work."
              align="left"
            />
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <CtaBand
          title="Need a partner who can think through both the product and the operating reality?"
          description="We support teams that need practical strategy, clean execution, and systems that hold up beyond launch day."
          actionLabel="Contact the team"
          onAction={() => scrollToSection("contact")}
        />
      </section>

      <section id="contact" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Bring us the problem, not just the spec."
          description="If you are unsure whether you need a website, an app, a workflow fix, or a broader systems plan, we can help figure that out together."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ContactDetails />
          <ContactFormCard
            formData={formData}
            onChange={(field, value) =>
              setFormData((current) => ({
                ...current,
                [field]: value,
              }))
            }
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
