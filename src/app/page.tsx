import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { CTASection } from "@/components/CTASection";
import { AtlasTopicCard } from "@/components/AtlasTopicCard";
import { PricingCard } from "@/components/PricingCard";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { HowItWorks } from "@/components/HowItWorks";
import { ComparisonPanel } from "@/components/ComparisonPanel";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";
import { ProductPreviewPanel } from "@/components/ProductPreviewPanel";
import { atlasTopics } from "@/data/atlas";
import { pricingPlans } from "@/data/pricing";
import type { EvidenceLevel } from "@/types";

const evidenceLevels: EvidenceLevel[] = [
  "Strongly established",
  "Well-supported but incomplete",
  "Plausible theory",
  "Philosophical interpretation",
  "Symbolically useful",
  "Speculative but interesting",
  "Weak evidence",
  "Likely misleading",
  "Pseudoscientific overreach",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/25 via-transparent to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Reality-mapping for deep questions
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
              Explore consciousness without losing your grip on reality.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              PsycheMap helps people investigate consciousness, symbolism, perception,
              Jungian psychology, quantum interpretation, AI consciousness, dreams, and
              reality-modeling through structured evidence-aware maps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/map" className="btn-primary text-center">
                Map a Question
              </Link>
              <Link href="/atlas" className="btn-secondary text-center">
                Explore the Atlas
              </Link>
            </div>
            <p className="mt-6 text-xs text-slate-600">
              Maps label evidence levels. Not therapy, not manifestation coaching.
            </p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader
          label="The problem"
          title="Deep questions get shallow answers."
          description="Search mixes peer-reviewed physics with pop spirituality. Forums argue from conviction. Textbooks stay siloed. You need mystery and rigor in the same room, with clear labels for what is known, symbolic, or unsupported."
        />
        <ComparisonPanel />
      </section>

      <section className="border-y border-white/5 bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            label="The solution"
            title="Structured Reality Maps with an evidence ladder."
            description="Each map layers science, psychology, Jungian symbolism, and philosophy, then flags misconceptions and steelmans both sides. Speculation stays labeled."
          />
          <HowItWorks />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Direct answer in plain language",
              "Nine-level evidence calibration",
              "Misconception checks built in",
              "Steelman for and against",
              "Synthesis by claim type",
              "Study paths for what comes next",
            ].map((item) => (
              <li
                key={item}
                className="glass-panel rounded-xl px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader
          title="Evidence ladder"
          description="Every claim gets a level. No fake certainty, no false equivalence."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {evidenceLevels.map((level) => (
            <EvidenceBadge key={level} level={level} size="md" />
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Live product preview"
            description="Ask a question. Receive a layered map you can read in minutes and return to for years."
          />
          <ProductPreviewPanel />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader title="Use cases" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Personal inquiry",
              body: "Hold big questions without collapsing into dogma or dismissive skepticism.",
            },
            {
              title: "Writing and teaching",
              body: "Structure essays, courses, and workshops with labeled evidence tiers.",
            },
            {
              title: "Research orientation",
              body: "See where fields agree, where they fork, and what would count as evidence.",
            },
          ].map((uc) => (
            <div key={uc.title} className="glass-panel rounded-xl p-6">
              <h3 className="font-semibold text-slate-100">{uc.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0a0e1a] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            label="Trust"
            title="Built for inquiry, not overclaiming."
            align="center"
          />
          <div className="mt-10">
            <TrustStrip />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <SectionHeader
              title="Atlas preview"
              description="Twelve frontier topics, content-rich and cross-linked."
            />
            <Link href="/atlas" className="hidden shrink-0 text-sm text-blue-400 sm:inline hover:text-blue-300">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {atlasTopics.slice(0, 6).map((topic) => (
              <AtlasTopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader title="Pricing preview" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        <Link
          href="/pricing"
          className="mt-8 inline-block text-sm text-blue-400 hover:text-blue-300"
        >
          Compare plans in detail →
        </Link>
      </section>

      <section className="border-t border-white/5 bg-[#0a0e1a] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader title="FAQ" align="center" />
          <FAQ />
        </div>
      </section>

      <CTASection
        title="Ask the deepest questions. Get the clearest map."
        description="Start with one question. See how evidence, symbolism, and philosophy fit together."
      />
    </>
  );
}
