import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { dashboardMock } from "@/data/dashboard";
import { getAtlasTopic } from "@/data/atlas";
import { AtlasTopicCard } from "@/components/AtlasTopicCard";

export const metadata = { title: "Library" };

export default function DashboardLibraryPage() {
  const topics = dashboardMock.bookmarkedTopics
    .map((b) => getAtlasTopic(b.slug))
    .filter(Boolean);

  return (
      <>
      <SubpageVisual variant="dashboard" />
      <div>
      <h1 className="text-2xl font-semibold text-slate-100">Library</h1>
      <p className="mt-1 text-slate-400">Bookmarked Atlas topics.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => t && <AtlasTopicCard key={t.slug} topic={t} />)}
      </div>
      <Link href="/atlas" className="mt-8 inline-block text-sm text-blue-400">
        Browse full Atlas →
      </Link>
    </div>
  </>
  )
}
