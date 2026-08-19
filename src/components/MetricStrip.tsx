type Metric = {
  value: string;
  label: string;
};

type MetricStripProps = {
  metrics: Metric[];
};

const MetricStrip = ({ metrics }: MetricStripProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur"
        >
          <p className="text-3xl font-semibold text-primary-foreground">{metric.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-primary-foreground/70">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetricStrip;
