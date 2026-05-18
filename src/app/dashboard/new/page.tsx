import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { suggestedQuestions } from "@/data/suggested-questions";

export const metadata = { title: "New Map" };

export default function DashboardNewPage() {
  return (
      <>
      <SubpageVisual variant="dashboard" />
      <div>
      <h1 className="text-2xl font-semibold text-slate-100">New map</h1>
      <p className="mt-1 text-slate-400">Start from the map builder.</p>
      <Link
        href="/map"
        className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
      >
        Open map builder
      </Link>
      <p className="mt-8 text-sm text-slate-500">Or try a suggestion:</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {suggestedQuestions.slice(0, 5).map((q) => (
          <li key={q}>
            <Link
              href={`/map?q=${encodeURIComponent(q)}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 hover:border-blue-500/30"
            >
              {q}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}
