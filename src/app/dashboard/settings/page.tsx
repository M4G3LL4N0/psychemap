import { SubpageVisual } from "@/components/SubpageVisual";
export const metadata = { title: "Settings" };

export default function DashboardSettingsPage() {
  return (
      <>
      <SubpageVisual variant="dashboard" />
      <div>
      <h1 className="text-2xl font-semibold text-slate-100">Settings</h1>
      <p className="mt-1 text-slate-400">Account preferences (placeholder).</p>
      <form className="mt-8 max-w-md space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            disabled
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-500"
          />
        </div>
        <div>
          <label htmlFor="plan" className="block text-sm font-medium text-slate-400">
            Plan
          </label>
          <select
            id="plan"
            disabled
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-500"
          >
            <option>Free</option>
            <option>Explorer</option>
            <option>Pro</option>
          </select>
        </div>
        <p className="text-xs text-slate-600">
          Authentication and billing are not connected in this MVP.
        </p>
      </form>
    </div>
  </>
  )
}
