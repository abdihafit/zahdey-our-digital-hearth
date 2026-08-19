import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CtaBandProps = {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
};

const CtaBand = ({ title, description, actionLabel, onAction }: CtaBandProps) => {
  return (
    <div className="rounded-[2rem] bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)),hsl(var(--accent)))] p-8 text-primary-foreground shadow-[var(--shadow-medium)] md:p-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-primary-foreground/85 md:text-lg">
            {description}
          </p>
        </div>
        <Button
          size="lg"
          variant="secondary"
          onClick={onAction}
          className="gap-2 self-start md:self-auto"
        >
          {actionLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CtaBand;
