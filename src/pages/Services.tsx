import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ProcessStepGrid from "@/components/ProcessStepGrid";
import SectionHeading from "@/components/SectionHeading";
import Seo from "@/components/Seo";
import ServiceCard from "@/components/ServiceCard";
import { faqs, serviceBuckets, services } from "@/data/siteContent";
import { scrollToSection } from "@/lib/scroll";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Services | ZAHDEY TECH"
        description="Explore ZAHDEY TECH services across strategy, web and app development, operational systems, and infrastructure-minded delivery support."
      />
      <Navigation />

      <PageHero
        eyebrow="Services"
        title="Capabilities built for teams that need clarity and movement."
        description="We support projects from early thinking through delivery, helping teams align strategy, user experience, and operational practicality."
      />

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Capabilities"
          title="A service mix designed around what growing teams actually need."
          description="Every engagement is different, but most work falls into these four delivery areas."
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

      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="We usually help across three stages."
            description="The point is not to make every project longer. It is to make sure the right work happens in the right order."
          />
          <div className="mt-12">
            <ProcessStepGrid steps={serviceBuckets} />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Common Questions"
            title="A good fit does not require a fully polished brief."
            description="If you know the pain point but not the exact solution shape yet, that is usually a workable starting point."
            align="left"
          />
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <CtaBand
          title="Need help figuring out what to build first?"
          description="We can help narrow scope, shape the right first deliverable, and turn rough direction into a plan the team can act on."
          actionLabel="Talk to us"
          onAction={() => scrollToSection("contact")}
        />
      </section>

      <Footer />
    </div>
  );
};

export default Services;
