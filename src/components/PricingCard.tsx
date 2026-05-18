import Link from "next/link";
import type { PricingPlan } from "@/types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={cn(
        "glass-panel flex flex-col rounded-2xl p-6",
        plan.highlighted && "border-blue-500/40 ring-1 ring-blue-500/20"
      )}
    >
      {plan.highlighted && (
        <span className="mb-4 w-fit rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
          Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-slate-100">{plan.name}</h3>
      <p className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-semibold text-slate-100">{plan.price}</span>
        {plan.period && (
          <span className="text-sm text-slate-500">{plan.period}</span>
        )}
      </p>
      <p className="mt-3 text-sm text-slate-400">{plan.description}</p>
      <ul className="mt-6 flex-1 space-y-2">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-slate-300">
            <span className="text-blue-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={plan.id === "institution" ? "/about" : "/signup"}
        className={cn(
          "mt-8 block rounded-xl py-3 text-center text-sm font-medium transition-colors",
          plan.highlighted
            ? "bg-blue-600 text-white hover:bg-blue-500"
            : "border border-white/10 text-slate-300 hover:border-white/20"
        )}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
