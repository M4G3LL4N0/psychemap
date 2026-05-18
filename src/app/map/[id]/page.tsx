"use client";

import { useEffect, useState, Suspense } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { generateRealityMap } from "@/lib/reality-map";
import { RealityMapCard } from "@/components/RealityMapCard";
import { LoadingMapBuilder } from "@/components/LoadingMapBuilder";
import type { RealityMap } from "@/types";

function MapResultContent() {
  const searchParams = useSearchParams();
  const question = searchParams.get("q") ?? "";
  const [map, setMap] = useState<RealityMap | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!question.trim()) return;
    let cancelled = false;
    generateRealityMap(question)
      .then((result) => {
        if (!cancelled) setMap(result);
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to generate map");
      });
    return (
      <>
      <SubpageVisual variant="default" />
      ) => {
      cancelled = true;
    };
  }, [question]);

  if (!question.trim()) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <p className="text-slate-400">No question provided.</p>
        <Link href="/map" className="mt-4 inline-block text-blue-400 hover:text-blue-300">
          ← Back to Map a Question
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <div role="alert" className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-6 text-rose-200">
          {error}
        </div>
        <Link href="/map" className="mt-4 inline-block text-blue-400">
          Try again
        </Link>
      </div>
    );
  }

  if (!map) {
    return <LoadingMapBuilder question={question} />;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/map" className="text-sm text-slate-500 hover:text-slate-300">
        ← New question
      </Link>
      <div className="mt-6">
        <RealityMapCard map={map} />
      </div>
    </div>
  );
}

export default function MapResultPage() {
  return (
    <Suspense fallback={<LoadingMapBuilder question="..." />}>
      <MapResultContent />
    </Suspense>
  </>
  )
}
