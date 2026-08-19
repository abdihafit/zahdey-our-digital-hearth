import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ProcessStep = {
  name: string;
  icon: LucideIcon;
  items: string[];
};

type ProcessStepGridProps = {
  steps: ProcessStep[];
};

const ProcessStepGrid = ({ steps }: ProcessStepGridProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {steps.map((step) => {
        const Icon = step.icon;

        return (
          <Card key={step.name} className="border-border/60 bg-card shadow-[var(--shadow-soft)]">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-2xl bg-secondary/10 p-3 text-secondary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{step.name}</h3>
              <ul className="mt-5 space-y-3">
                {step.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ProcessStepGrid;
