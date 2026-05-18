import { PricingCard } from "@/components/PricingCard";
import { SubpageVisual } from "@/components/SubpageVisual";
import { pricingPlans } from "@/data/pricing";

export const metadata = {
  title: "Pricing",
  description: "Plans for explorers, creators, and institutions.",
};

export default function PricingPage() {
  return (
      <>
      <SubpageVisual variant="pricing" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl text-center mx-auto">
        <h1 className="text-4xl font-semibold text-slate-100">Pricing</h1>
        <p className="mt-4 text-slate-400">
          Start free. Upgrade when you need unlimited maps, exports, or team workflows.
        </p>
      </header>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
      <p className="mt-12 text-center text-sm text-slate-600">
        Prices shown for planning. Checkout is not connected in this MVP.
      </p>
    </div>
  </>
  )
}
