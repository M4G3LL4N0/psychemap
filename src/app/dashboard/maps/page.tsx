import { dashboardMock } from "@/data/dashboard";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SavedMapCard } from "@/components/SavedMapCard";

export const metadata = { title: "Saved Maps" };

export default function DashboardMapsPage() {
  return (
      <>
      <SubpageVisual variant="dashboard" />
      <div>
      <h1 className="text-2xl font-semibold text-slate-100">Saved maps</h1>
      <p className="mt-1 text-slate-400">Maps you have saved locally (mock).</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {dashboardMock.savedMaps.map((m) => (
          <SavedMapCard key={m.id} map={m} />
        ))}
      </div>
    </div>
  </>
  )
}
