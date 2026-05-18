import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { notFound } from "next/navigation";
import { getAtlasTopic, atlasTopics } from "@/data/atlas";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { MisconceptionWarning } from "@/components/MisconceptionWarning";
import { AtlasTopicCard } from "@/components/AtlasTopicCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return atlasTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const topic = getAtlasTopic(slug);
  if (!topic) return { title: "Topic not found" };
  return { title: topic.title, description: topic.tagline };
}

export default async function AtlasTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getAtlasTopic(slug);
  if (!topic) notFound();

  const related = topic.relatedSlugs
    .map((s) => getAtlasTopic(s))
    .filter(Boolean);

  return (
      <>
      <SubpageVisual variant="default" />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/atlas" className="text-sm text-slate-500 hover:text-slate-300">
        ← Atlas
      </Link>
      <header className="mt-6">
        <h1 className="text-4xl font-semibold text-slate-100">{topic.title}</h1>
        <p className="mt-2 text-lg text-slate-400">{topic.tagline}</p>
        <div className="mt-4">
          <EvidenceBadge level={topic.evidenceStatus} size="md" />
          <p className="mt-2 text-sm text-slate-500">{topic.evidenceNote}</p>
        </div>
      </header>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-100">Definition</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">{topic.definition}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-100">Why it matters</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">{topic.whyItMatters}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="glass-panel rounded-xl p-5">
            <h3 className="font-medium text-emerald-400">Strongest arguments</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {topic.strongestArguments.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-xl p-5">
            <h3 className="font-medium text-amber-400">Strongest criticisms</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {topic.strongestCriticisms.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <MisconceptionWarning items={topic.misconceptions} />
        <div>
          <h2 className="text-lg font-semibold text-slate-100">Related theories</h2>
          <p className="mt-3 text-slate-300">{topic.relatedTheories.join(" · ")}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-100">Key thinkers</h2>
          <p className="mt-3 text-slate-300">{topic.keyThinkers.join(", ")}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-lg font-semibold text-slate-100">Related topics</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((t) => t && <AtlasTopicCard key={t.slug} topic={t} />)}
          </div>
        </section>
      )}

      <div className="mt-16 glass-panel rounded-2xl p-8 text-center">
        <p className="text-slate-300">Ask how this topic connects to your own question.</p>
        <Link
          href={`/map?q=${encodeURIComponent(`What is ${topic.title.toLowerCase()}?`)}`}
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
        >
          Map a question about {topic.title}
        </Link>
      </div>
    </article>
  </>
  )
}
