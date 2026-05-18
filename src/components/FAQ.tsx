const faqs = [
  {
    q: "Is PsycheMap a chatbot or spirituality app?",
    a: "Neither. It is a structured mapping tool for deep questions. Output is layered, labeled, and evidence-aware, not open-ended advice or manifestation coaching.",
  },
  {
    q: "Are the maps from a live AI model?",
    a: "This MVP uses a local mock generator with theme-aware templates. The architecture is ready to swap in an API without changing the UI structure.",
  },
  {
    q: "Does PsycheMap say archetypes or synchronicity are proven?",
    a: "No. Symbolic and Jungian frames are presented as psychologically and culturally significant where appropriate, not as settled physical facts.",
  },
  {
    q: "Can I use maps for medical or mental health decisions?",
    a: "No. PsycheMap is for inquiry and education. Seek qualified professionals for health, legal, or financial decisions.",
  },
];

export function FAQ() {
  return (
    <div className="mt-10 space-y-3">
      {faqs.map((item) => (
        <details
          key={item.q}
          className="group glass-panel rounded-xl px-5 py-1 open:pb-4"
        >
          <summary className="cursor-pointer list-none py-4 text-sm font-medium text-slate-200 marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span className="text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="text-sm leading-relaxed text-slate-400">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
