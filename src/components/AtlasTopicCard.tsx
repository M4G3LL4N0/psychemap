import Link from "next/link";
import type { AtlasTopic } from "@/types";
import { EvidenceBadge } from "./EvidenceBadge";

interface AtlasTopicCardProps {
  topic: AtlasTopic;
}

export function AtlasTopicCard({ topic }: AtlasTopicCardProps) {
  return (
    <Link
      href={`/atlas/${topic.slug}`}
      className="glass-panel group block rounded-xl p-6 transition-colors hover:border-blue-500/30"
    >
      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-300">
        {topic.title}
      </h3>
      <p className="mt-2 text-sm text-slate-400">{topic.tagline}</p>
      <div className="mt-4">
        <EvidenceBadge level={topic.evidenceStatus} />
      </div>
    </Link>
  );
}
