import Link from "next/link";
import type { SavedMap } from "@/types";
import { EvidenceBadge } from "./EvidenceBadge";
import { formatDate } from "@/lib/utils";

interface SavedMapCardProps {
  map: SavedMap;
}

export function SavedMapCard({ map }: SavedMapCardProps) {
  return (
    <Link
      href={`/map/${map.id}`}
      className="glass-panel block rounded-xl p-5 transition-colors hover:border-blue-500/30"
    >
      <p className="font-medium text-slate-100">{map.question}</p>
      <p className="mt-2 line-clamp-2 text-sm text-slate-400">{map.summary}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <EvidenceBadge level={map.evidenceHighlight} />
        <span className="text-xs text-slate-600">{formatDate(map.createdAt)}</span>
      </div>
    </Link>
  );
}
