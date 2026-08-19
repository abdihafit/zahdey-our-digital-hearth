import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border/50 bg-[radial-gradient(circle_at_top,_hsl(var(--secondary)/0.16),_transparent_40%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--muted)))]">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-secondary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
