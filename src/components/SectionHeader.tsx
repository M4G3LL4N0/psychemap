interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "max-w-2xl";

  return (
    <header className={alignClass}>
      {label && (
        <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
          {label}
        </p>
      )}
      <h2
        className={`font-semibold text-slate-100 ${label ? "mt-3" : ""} text-2xl sm:text-3xl`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
      )}
    </header>
  );
}
