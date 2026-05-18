import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "About",
  description: "Why PsycheMap exists and how we handle evidence.",
};

export default function AboutPage() {
  return (
      <>
      <SubpageVisual variant="about" />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold text-slate-100">About PsycheMap</h1>
      <div className="mt-10 space-y-8 text-slate-300 leading-relaxed">
        <p>
          PsycheMap exists for people who want mystery and rigor in the same room. Big
          questions about consciousness, symbolism, quantum interpretation, dreams, and AI
          deserve more than slogans and more than dismissive reductionism.
        </p>
        <section>
          <h2 className="text-xl font-semibold text-slate-100">What we believe</h2>
          <ul className="mt-4 space-y-3 list-disc pl-5 text-slate-400">
            <li>Evidence matters. Claims should declare their support level.</li>
            <li>Symbolism matters. Meaning shapes lives even when it is not a physical force.</li>
            <li>Speculation must be labeled. Interesting ideas are welcome; disguising them as proof is not.</li>
            <li>Subjective meaning is not the same as objective proof.</li>
            <li>Science does not explain everything yet. Open problems are real.</li>
            <li>Uncertainty is not permission to believe anything.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-100">What we are not</h2>
          <p className="mt-4 text-slate-400">
            Not a spirituality app, not a manifestation platform, not astrology, not a generic
            chatbot, and not a replacement for therapy, clinical care, or primary research.
            Maps organize inquiry; they do not close it.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-100">How maps work</h2>
          <p className="mt-4 text-slate-400">
            Each Reality Map layers scientific, psychological, Jungian-symbolic, and
            philosophical material, then adds misconception checks, steelmanned arguments,
            and a synthesis sorted by what is known, unknown, symbolic, speculative, or unsupported.
          </p>
        </section>
      </div>
      <Link href="/map" className="mt-10 inline-block text-blue-400 hover:text-blue-300">
        Try Map a Question →
      </Link>
      <CTASection
        title="Bring your hardest question"
        description="See it mapped with clarity and honest limits."
        secondaryHref="/atlas"
      />
    </div>
  </>
  )
}
