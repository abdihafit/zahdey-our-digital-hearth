import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import PrincipleGrid from "@/components/PrincipleGrid";
import SectionHeading from "@/components/SectionHeading";
import Seo from "@/components/Seo";
import TimelineSection from "@/components/TimelineSection";
import { Card, CardContent } from "@/components/ui/card";
import ceoImage from "@/assets/ceo-abdihafit.jpg";
import { aboutTimeline, operatingPrinciples } from "@/data/siteContent";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About ZAHDEY TECH | Practical Delivery with Local Context"
        description="Learn how ZAHDEY TECH combines product thinking, technical execution, and infrastructure-minded planning to support modern growth in East Africa."
      />
      <Navigation />

      <PageHero
        eyebrow="About"
        title="Built around useful systems, not abstract promises."
        description="ZAHDEY TECH exists to help teams move from fragmented workflows and rough ideas to delivery that is clearer, steadier, and more grounded in the realities of the people using it."
      />

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="We care about whether the work holds up in practice."
              description="That means understanding local workflows, planning around actual constraints, and building solutions that create confidence instead of friction."
              align="left"
            />
            <div className="mt-8 space-y-5 text-sm leading-8 text-muted-foreground md:text-base">
              <p>
                Our approach grew from a simple observation: many organisations do not just
                need more software, they need better structure around how work is done. Tools
                only become valuable when they make decisions, handoffs, and execution clearer.
              </p>
              <p>
                ZAHDEY TECH combines delivery speed with long-horizon thinking. We can support
                a founder shaping a first product, a business trying to improve its reporting,
                or a team planning systems that touch everyday public-facing service delivery.
              </p>
              <p>
                The goal is not to ship something impressive for one moment. The goal is to
                leave behind something people understand, trust, and can continue using well.
              </p>
            </div>
          </div>

          <Card className="overflow-hidden border-border/60 bg-card shadow-[var(--shadow-medium)]">
            <CardContent className="p-8">
              <div className="mx-auto h-44 w-44 overflow-hidden rounded-[2rem] ring-4 ring-secondary/10">
                <img
                  src={ceoImage}
                  alt="Abdihafit Ismail, founder of ZAHDEY TECH"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold text-foreground">Abdihafit Ismail</h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                  Founder
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Abdihafit leads ZAHDEY TECH with a product-minded, delivery-first approach
                  shaped by experience in web builds, app delivery, and operational problem
                  solving for growing teams.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Company Path"
            title="A short timeline of how the company has evolved."
            description="The work has expanded, but the underlying approach has stayed consistent: understand the context, make the system clearer, and deliver something teams can rely on."
          />
          <div className="mt-12">
            <TimelineSection items={aboutTimeline} />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Operating Principles"
          title="How we make decisions while building."
          description="These principles keep our work focused on clarity, usefulness, and long-term value rather than noise."
        />
        <div className="mt-12">
          <PrincipleGrid items={operatingPrinciples} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
