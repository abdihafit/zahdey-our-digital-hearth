import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import mventoryLogo from "@/assets/mventory-logo.png";

type ProductSpotlightProps = {
  title: string;
  description: string[];
  features: string[];
  stats: { label: string; value: string }[];
};

const ProductSpotlight = ({
  title,
  description,
  features,
  stats,
}: ProductSpotlightProps) => {
  return (
    <Card className="overflow-hidden border-border/60 bg-card shadow-[var(--shadow-medium)]">
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-[320px_1fr]">
          <div className="flex flex-col items-center justify-center gap-5 bg-[linear-gradient(165deg,#2E5339,#1B065E)] p-8 text-center">
            <img src={mventoryLogo} alt="M-VENTORY logo" className="h-40 w-40 object-contain" />
            <p className="text-sm font-medium leading-6 text-primary-foreground/80">
              The financial operating system for African small businesses.
            </p>
          </div>
          <div className="space-y-6 p-8 md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
                Flagship Product
              </p>
              <h3 className="mt-3 text-3xl font-bold text-foreground">{title}</h3>
            </div>
            <div className="space-y-4">
              {description.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl bg-muted/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSpotlight;
