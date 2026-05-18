const oldWay = [
  "Search mixes physics papers with manifestation blogs",
  "Forums argue from identity, not evidence",
  "No label for symbolic vs causal claims",
  "Mysticism and scientism sound equally certain",
];

const psycheMapWay = [
  "One question, one structured Reality Map",
  "Nine-level evidence ladder on every claim",
  "Misconception checks before you overcommit",
  "Synthesis splits known, symbolic, and unsupported",
];

export function ComparisonPanel() {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
          The old way
        </p>
        <ul className="mt-4 space-y-3">
          {oldWay.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-500">
              <span className="text-slate-600" aria-hidden>
                ×
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-blue-500/25 bg-blue-500/5 p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-blue-400">
          With PsycheMap
        </p>
        <ul className="mt-4 space-y-3">
          {psycheMapWay.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-300">
              <span className="text-emerald-400" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
