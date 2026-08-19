import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type HighlightCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const HighlightCard = ({ icon: Icon, title, description }: HighlightCardProps) => {
  return (
    <Card className="h-full border-border/60 bg-card/90 shadow-[var(--shadow-soft)]">
      <CardContent className="p-6">
        <div className="mb-5 inline-flex rounded-2xl bg-secondary/10 p-3 text-secondary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;
