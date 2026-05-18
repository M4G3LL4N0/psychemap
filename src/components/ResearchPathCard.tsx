import Link from "next/link";

interface ResearchPathCardProps {
  title: string;
  description: string;
  href: string;
}

export function ResearchPathCard({ title, description, href }: ResearchPathCardProps) {
  return (
    <Link
      href={href}
      className="glass-panel block rounded-xl p-6 transition-colors hover:border-violet-500/30"
    >
      <h3 className="font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
      <span className="mt-4 inline-block text-sm text-blue-400">Explore →</span>
    </Link>
  );
}
