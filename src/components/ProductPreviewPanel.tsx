import Link from "next/link";
import { EvidenceBadge } from "./EvidenceBadge";

export function ProductPreviewPanel() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1a]">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <p className="font-mono text-xs text-slate-500">Reality Map · demo output</p>
        <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-medium text-amber-200">
          DEMO
        </span>
      </div>
      <div className="grid gap-0 lg:grid-cols-5">
        <div className="border-b border-white/5 p-5 lg:col-span-2 lg:border-b-0 lg:border-r">
          <p className="text-xs text-blue-400">Question</p>
          <p className="mt-2 text-base text-slate-100">Is synchronicity real?</p>
          <p className="mt-6 text-xs text-slate-500">Direct answer</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Meaningful coincidence is psychologically real. Acausal physical mechanism
            remains unproven.
          </p>
        </div>
        <div className="space-y-2 p-4 lg:col-span-3">
          {[
            { layer: "Scientific layer", snippet: "Base rates and confirmation bias explain many reports." },
            { layer: "Symbolic layer", snippet: "Useful for therapy and narrative, not lab causation." },
            { layer: "Misconception check", snippet: "Felt meaning does not prove external fate." },
          ].map((row) => (
            <div
              key={row.layer}
              className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2"
            >
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                {row.layer}
              </p>
              <p className="mt-1 text-xs text-slate-400">{row.snippet}</p>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            <EvidenceBadge level="Symbolically useful" />
            <EvidenceBadge level="Speculative but interesting" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-3">
        <Link href="/examples" className="text-sm text-blue-400 hover:text-blue-300">
          View more example maps →
        </Link>
      </div>
    </div>
  );
}
