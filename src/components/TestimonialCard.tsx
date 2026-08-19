import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-border/60 bg-card/90 shadow-[var(--shadow-soft)]">
      <CardContent className="p-6">
        <p className="text-lg leading-8 text-foreground">"{quote}"</p>
        <div className="mt-6">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
