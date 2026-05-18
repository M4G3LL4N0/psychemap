import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { dashboardMock } from "@/data/dashboard";
import { SavedMapCard } from "@/components/SavedMapCard";
import { ResearchPathCard } from "@/components/ResearchPathCard";
import { getAtlasTopic } from "@/data/atlas";

export default function DashboardPage() {
  const { plan, mapsUsed, mapsLimit, savedMaps, bookmarkedTopics, recentQuestions } =
    dashboardMock;

  return (
      <>
      <SubpageVisual variant="dashboard" />
      <div>
      <h1 className="text-2xl font-semibold text-slate-100">Dashboard</h1>
      <p className="mt-1 text-slate-400">Your inquiry workspace (mock data).</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="glass-panel rounded-xl p-5">
          <p className="text-sm text-slate-500">Plan</p>
          <p className="mt-1 text-xl font-semibold text-slate-100">{plan}</p>
        </div>
        <div className="glass-panel rounded-xl p-5">
          <p className="text-sm text-slate-500">Maps this month</p>
          <p className="mt-1 text-xl font-semibold text-slate-100">
            {mapsUsed} / {mapsLimit}
          </p>
        </div>
        <div className="glass-panel rounded-xl p-5">
          <p className="text-sm text-slate-500">Saved maps</p>
          <p className="mt-1 text-xl font-semibold text-slate-100">{savedMaps.length}</p>
        </div>
      </div>

      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-100">Recent saved maps</h2>
          <Link href="/dashboard/maps" className="text-sm text-blue-400">
            View all
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savedMaps.slice(0, 3).map((m) => (
            <SavedMapCard key={m.id} map={m} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-100">Bookmarked topics</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {bookmarkedTopics.map((b) => {
            const topic = getAtlasTopic(b.slug);
            return topic ? (
              <ResearchPathCard
                key={b.slug}
                title={topic.title}
                description={topic.tagline}
                href={`/atlas/${b.slug}`}
              />
            ) : null;
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-slate-100">Recent questions</h2>
        <ul className="mt-4 space-y-2">
          {recentQuestions.map((q) => (
            <li key={q}>
              <Link
                href={`/map?q=${encodeURIComponent(q)}`}
                className="text-sm text-slate-400 hover:text-blue-400"
              >
                {q}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </>
  )
}
