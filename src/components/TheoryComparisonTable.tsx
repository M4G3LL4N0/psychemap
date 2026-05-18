import type { ArgumentPair } from "@/types";

interface TheoryComparisonTableProps {
  arguments: ArgumentPair;
}

export function TheoryComparisonTable({ arguments: args }: TheoryComparisonTableProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-100">Best Arguments For and Against</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass-panel rounded-xl p-5">
          <p className="text-sm font-medium text-emerald-400">Strongest case for</p>
          <ul className="mt-3 space-y-2">
            {args.for.map((item, i) => (
              <li key={i} className="text-sm text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-panel rounded-xl p-5">
          <p className="text-sm font-medium text-amber-400">Strongest case against</p>
          <ul className="mt-3 space-y-2">
            {args.against.map((item, i) => (
              <li key={i} className="text-sm text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
