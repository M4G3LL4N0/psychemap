const steps = [
  {
    step: "01",
    title: "Ask one sharp question",
    body: "Consciousness, dreams, quantum interpretation, archetypes, AI mind. One question at a time.",
  },
  {
    step: "02",
    title: "Layers assemble",
    body: "Science, psychology, symbolic, and philosophical frames build in sequence with misconception checks.",
  },
  {
    step: "03",
    title: "Read the map",
    body: "Direct answer, evidence ladder, steelmanned arguments, synthesis by claim type, study paths.",
  },
];

export function HowItWorks() {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {steps.map((item, index) => (
        <div key={item.step} className="relative">
          {index < steps.length - 1 && (
            <div
              className="absolute top-8 left-[calc(100%-0.5rem)] hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-blue-500/40 to-transparent lg:block"
              aria-hidden
            />
          )}
          <div className="glass-panel h-full rounded-2xl p-6">
            <span className="font-mono text-xs text-blue-400">{item.step}</span>
            <h3 className="mt-3 text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
