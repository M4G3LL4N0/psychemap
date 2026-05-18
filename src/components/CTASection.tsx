import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CTASection({
  title,
  description,
  primaryHref = "/map",
  primaryLabel = "Map a Question",
  secondaryHref = "/atlas",
  secondaryLabel = "Explore the Atlas",
}: CTASectionProps) {
  return (
    <section className="border-t border-white/5 bg-[#0a0e1a] py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-slate-400">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-500"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && (
            <Link
              href={secondaryHref}
              className="rounded-xl border border-white/10 px-8 py-3 font-medium text-slate-300 hover:border-white/20"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
