import type { Misconception } from "@/types";

interface MisconceptionWarningProps {
  items: Misconception[];
}

export function MisconceptionWarning({ items }: MisconceptionWarningProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-100">Misconception Map</h3>
      <p className="text-sm text-slate-400">
        Common reasoning traps when exploring this question.
      </p>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4"
          >
            <p className="font-medium text-rose-200">{item.title}</p>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-medium text-emerald-400/90">Correction: </span>
              {item.correction}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
