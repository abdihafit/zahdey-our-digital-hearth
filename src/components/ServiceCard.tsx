import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  tone?: "primary" | "secondary" | "accent";
};

const toneClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  tone = "secondary",
}: ServiceCardProps) => {
  return (
    <Card className="h-full border-border/60 bg-card/90 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className={`mb-4 inline-flex w-fit rounded-2xl p-3 ${toneClasses[tone]}`}>
          <Icon className="h-7 w-7" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-sm leading-7 text-muted-foreground">{description}</p>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
