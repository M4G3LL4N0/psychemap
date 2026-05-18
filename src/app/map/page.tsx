"use client";

import { useState, Suspense } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";
import { useRouter, useSearchParams } from "next/navigation";
import { QuestionInput } from "@/components/QuestionInput";
import { LoadingMapBuilder } from "@/components/LoadingMapBuilder";
import { suggestedQuestions } from "@/data/suggested-questions";
import { slugify } from "@/lib/utils";

function MapPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  async function handleSubmit(question: string) {
    setError(null);
    setLoading(true);
    setActiveQuestion(question);
    try {
      const id = slugify(question);
      router.push(`/map/${id}?q=${encodeURIComponent(question)}`);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  if (loading && activeQuestion) {
    return <LoadingMapBuilder question={activeQuestion} />;
  }

  return (
      <>
      <SubpageVisual variant="default" />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <header className="text-center">
        <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
          Map a Question
        </h1>
        <p className="mt-4 text-slate-400">
          Enter a question about consciousness, reality, symbolism, or mind.
          PsycheMap returns a structured Reality Map with evidence levels.
        </p>
      </header>

      <div className="mt-10">
        <QuestionInput
          onSubmit={handleSubmit}
          disabled={loading}
          defaultValue={initialQ}
          size="large"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
        >
          {error}
        </div>
      )}

      <section className="mt-12">
        <p className="text-sm font-medium text-slate-500">Suggested questions</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {suggestedQuestions.map((q) => (
            <li key={q}>
              <button
                type="button"
                onClick={() => handleSubmit(q)}
                disabled={loading}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-blue-500/30 hover:text-slate-200 disabled:opacity-50"
              >
                {q}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {!initialQ && !loading && (
        <div className="mt-16 rounded-xl border border-dashed border-white/10 p-8 text-center">
          <p className="text-slate-500">
            No question yet. Type above or choose a suggestion to generate your first map.
          </p>
        </div>
      )}
    </div>
  );
}

export default function MapPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading...</div>}>
      <MapPageContent />
    </Suspense>
  </>
  )
}
