import { Card, CardContent } from "@/components/ui/card";

type Principle = {
  title: string;
  description: string;
};

type PrincipleGridProps = {
  items: Principle[];
};

const PrincipleGrid = ({ items }: PrincipleGridProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item.title} className="border-border/60 bg-card shadow-[var(--shadow-soft)]">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PrincipleGrid;
