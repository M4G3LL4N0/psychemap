interface LayerPanelProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  accent?: "blue" | "violet" | "gold" | "silver";
}

const accentBorder = {
  blue: "border-l-blue-500",
  violet: "border-l-violet-500",
  gold: "border-l-amber-500/80",
  silver: "border-l-slate-400",
};

export function LayerPanel({ title, subtitle, children, accent = "blue" }: LayerPanelProps) {
  return (
    <section className={`glass-panel rounded-xl border-l-4 p-6 ${accentBorder[accent]}`}>
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      <div className="mt-4 text-sm leading-relaxed text-slate-300">{children}</div>
    </section>
  );
}
