const layers = [
  {
    label: "Reality Map Generated",
    detail: "Structured synthesis across disciplines",
    accent: false,
    badge: false,
  },
  {
    label: "Scientific Layer",
    detail: "Measurement is physical interaction, not mindful looking alone.",
    accent: true,
    badge: false,
  },
  {
    label: "Psychological Layer",
    detail: "Prediction, emotion, and salience shape what feels real.",
    accent: false,
    badge: false,
  },
  {
    label: "Symbolic Layer",
    detail: "Archetypes organize meaning without proving mechanism.",
    accent: false,
    badge: false,
  },
  {
    label: "Philosophical Layer",
    detail: "Physicalism, panpsychism, phenomenology stay honestly open.",
    accent: false,
    badge: false,
  },
  {
    label: "Misconception Check",
    detail: "Flags quantum-manifestation and fate-from-coincidence leaps.",
    accent: false,
    badge: false,
  },
  {
    label: "Evidence Ladder",
    detail: "Well-supported but incomplete",
    accent: false,
    badge: true,
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-label="Reality Map interface preview">
      <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" aria-hidden />
      <div className="glass-panel relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-blue-950/40">
        <div className="border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          </div>
          <p className="mt-3 font-mono text-xs text-slate-500">psychemap / map</p>
        </div>
        <div className="space-y-2 p-4">
          <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2">
            <p className="text-xs text-blue-400">Question</p>
            <p className="mt-1 text-sm text-slate-200">
              Does consciousness create reality?
            </p>
          </div>
          {layers.map((layer) => (
            <div
              key={layer.label}
              className={`hero-layer rounded-lg border px-3 py-2 ${
                layer.accent
                  ? "border-blue-500/20 bg-blue-500/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p className="text-xs text-slate-500">{layer.label}</p>
              {layer.badge ? (
                <span className="mt-1 inline-block rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-200">
                  {layer.detail}
                </span>
              ) : (
                <p className="mt-1 text-xs text-slate-400 line-clamp-2">{layer.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
