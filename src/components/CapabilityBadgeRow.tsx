import type { LucideIcon } from "lucide-react";

type CapabilityBadge = {
  label: string;
  icon: LucideIcon;
};

type CapabilityBadgeRowProps = {
  items: CapabilityBadge[];
};

const CapabilityBadgeRow = ({ items }: CapabilityBadgeRowProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-foreground shadow-[var(--shadow-soft)]"
          >
            <Icon className="h-4 w-4 text-secondary" />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CapabilityBadgeRow;
