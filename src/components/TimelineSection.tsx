type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineSectionProps = {
  items: TimelineItem[];
};

const TimelineSection = ({ items }: TimelineSectionProps) => {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.title}
          className="grid gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] md:grid-cols-[160px_1fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              {item.year}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineSection;
