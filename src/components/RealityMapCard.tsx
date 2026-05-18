import type { RealityMap } from "@/types";
import { EvidenceBadge } from "./EvidenceBadge";
import { LayerPanel } from "./LayerPanel";
import { MisconceptionWarning } from "./MisconceptionWarning";
import { TheoryComparisonTable } from "./TheoryComparisonTable";
import { MapExportActions } from "./MapExportActions";

interface RealityMapCardProps {
  map: RealityMap;
  showActions?: boolean;
}

export function RealityMapCard({ map, showActions = true }: RealityMapCardProps) {
  return (
    <article className="space-y-10 animate-fade-up">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          Reality Map
        </p>
        <h1 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
          {map.question}
        </h1>
        {showActions && <MapExportActions map={map} />}
      </header>

      <section className="glass-panel rounded-2xl p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-slate-100">Direct Answer</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          {map.directAnswer}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-100">Evidence Ladder</h2>
        <ul className="space-y-3">
          {map.evidenceLadder.map((item, i) => (
            <li
              key={i}
              className="glass-panel flex flex-col gap-2 rounded-xl p-4 sm:flex-row sm:items-start sm:justify-between"
            >
              <p className="text-sm text-slate-300">{item.claim}</p>
              <EvidenceBadge level={item.level} />
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <LayerPanel title="Scientific Layer" accent="blue">
          {map.scientificLayer}
        </LayerPanel>
        <LayerPanel title="Psychological Layer" accent="violet">
          {map.psychologicalLayer}
        </LayerPanel>
        <LayerPanel title="Jungian / Symbolic Layer" accent="gold">
          {map.jungianLayer}
        </LayerPanel>
        <LayerPanel title="Philosophical Layer" accent="silver">
          {map.philosophicalLayer}
        </LayerPanel>
      </div>

      <MisconceptionWarning items={map.misconceptions} />
      <TheoryComparisonTable arguments={map.arguments} />

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-100">Best Synthesis</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {(
            [
              ["Known", map.synthesis.known, "text-emerald-400"],
              ["Unknown", map.synthesis.unknown, "text-slate-400"],
              ["Symbolic", map.synthesis.symbolic, "text-amber-300"],
              ["Speculative", map.synthesis.speculative, "text-orange-300"],
              ["Unsupported", map.synthesis.unsupported, "text-rose-400"],
            ] as const
          ).map(([label, items, color]) => (
            <div key={label} className="glass-panel rounded-xl p-4">
              <p className={`text-sm font-medium ${color}`}>{label}</p>
              <ul className="mt-2 space-y-1">
                {items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-slate-100">Study Next</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {map.studyNext.books && (
            <div>
              <p className="text-xs font-medium uppercase text-slate-500">Books</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                {map.studyNext.books.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          )}
          {map.studyNext.thinkers && (
            <div>
              <p className="text-xs font-medium uppercase text-slate-500">Thinkers</p>
              <p className="mt-2 text-sm text-slate-300">
                {map.studyNext.thinkers.join(", ")}
              </p>
            </div>
          )}
          {map.studyNext.fields && (
            <div>
              <p className="text-xs font-medium uppercase text-slate-500">Fields</p>
              <p className="mt-2 text-sm text-slate-300">
                {map.studyNext.fields.join(", ")}
              </p>
            </div>
          )}
          {map.studyNext.questions && (
            <div className="sm:col-span-2">
              <p className="text-xs font-medium uppercase text-slate-500">
                Follow-up questions
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                {map.studyNext.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
