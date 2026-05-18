"use client";

import { useState } from "react";
import type { RealityMap } from "@/types";

export function MapExportActions({ map }: { map: RealityMap }) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  function summaryText() {
    return [
      `# Reality Map (DEMO)`,
      ``,
      `Question: ${map.question}`,
      ``,
      map.directAnswer,
      ``,
      `Evidence mix: ${map.evidenceLadder.map((l) => l.level).join(", ")}`,
      ``,
      `_PsycheMap demo export — not peer-reviewed consensus._`,
    ].join("\n");
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summaryText());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  }

  function saveLocal() {
    const key = `psychemap-demo-${Date.now()}`;
    try {
      localStorage.setItem(key, JSON.stringify(map));
      setSaved(true);
      window.setTimeout(() => setSaved(false), 2500);
    } catch {
      setSaved(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={copySummary}
        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-white/20 hover:text-slate-100"
      >
        {copied ? "Copied" : "Copy summary"}
      </button>
      <button
        type="button"
        onClick={saveLocal}
        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-white/20 hover:text-slate-100"
      >
        {saved ? "Saved locally" : "Save map (demo)"}
      </button>
    </div>
  );
}
