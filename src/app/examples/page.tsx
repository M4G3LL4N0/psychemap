import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { exampleMaps } from "@/data/examples";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Examples",
  description: "Sample Reality Maps from PsycheMap.",
};

export default function ExamplesPage() {
  return (
      <>
      <SubpageVisual variant="default" />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold text-slate-100">Examples</h1>
      <p className="mt-4 text-slate-400">
        Sample maps show structure and tone. Generate your own for any question.
      </p>
      <ul className="mt-12 space-y-6">
        {exampleMaps.map((ex) => (
          <li key={ex.id} className="glass-panel rounded-xl p-6">
            <p className="text-xs text-slate-500">{formatDate(ex.createdAt)}</p>
            <h2 className="mt-2 text-xl font-medium text-slate-100">{ex.question}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{ex.directAnswer}</p>
            <Link
              href={`/map/${ex.id}?q=${encodeURIComponent(ex.question)}`}
              className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
            >
              Open full map →
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/map"
        className="mt-12 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
      >
        Map your own question
      </Link>
    </div>
  </>
  )
}
