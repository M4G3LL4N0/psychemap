import type { EvidenceLevel } from "@/types";
import { cn } from "@/lib/utils";

const levelStyles: Record<EvidenceLevel, string> = {
  "Strongly established": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Well-supported but incomplete": "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "Plausible theory": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "Philosophical interpretation": "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "Symbolically useful": "bg-amber-500/15 text-amber-200 border-amber-500/30",
  "Speculative but interesting": "bg-orange-500/15 text-orange-200 border-orange-500/30",
  "Weak evidence": "bg-slate-500/15 text-slate-300 border-slate-500/30",
  "Likely misleading": "bg-rose-500/15 text-rose-300 border-rose-500/30",
  "Pseudoscientific overreach": "bg-red-500/15 text-red-300 border-red-500/30",
};

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  className?: string;
  size?: "sm" | "md";
}

export function EvidenceBadge({ level, className, size = "sm" }: EvidenceBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        levelStyles[level],
        className
      )}
    >
      {level}
    </span>
  );
}
