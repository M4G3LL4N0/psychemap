import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { AtlasTopicCard } from "@/components/AtlasTopicCard";
import { CTASection } from "@/components/CTASection";
import { atlasTopics } from "@/data/atlas";

export const metadata = {
  title: "Atlas",
  description: "Twelve frontier topics on consciousness, mind, and reality.",
};

export default function AtlasPage() {
  return (
      <>
      <SubpageVisual variant="default" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold text-slate-100">Atlas</h1>
        <p className="mt-4 text-lg text-slate-400">
          Structured entries on consciousness, Jungian thought, physics interpretation,
          and meaning-making. Each topic includes evidence status, arguments, and misconceptions.
        </p>
      </header>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {atlasTopics.map((topic) => (
          <AtlasTopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
      <CTASection
        title="Turn Atlas topics into maps"
        description="Pick a concept, then ask your own question to see layers and evidence calibration."
        primaryLabel="Map a Question"
        secondaryLabel="Browse examples"
        secondaryHref="/examples"
      />
    </div>
  </>
  )
}
