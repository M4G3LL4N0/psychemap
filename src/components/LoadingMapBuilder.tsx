"use client";

import { useEffect, useState } from "react";
import { LOADING_STEPS } from "@/lib/reality-map";

interface LoadingMapBuilderProps {
  question: string;
}

export function LoadingMapBuilder({ question }: LoadingMapBuilderProps) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, LOADING_STEPS.length - 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
        Building Reality Map
      </p>
      <p className="mt-4 text-xl text-slate-200">&ldquo;{question}&rdquo;</p>
      <ul className="mt-10 space-y-3 text-left">
        {LOADING_STEPS.map((step, i) => (
          <li
            key={step}
            className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition-all ${
              i <= stepIndex
                ? "bg-blue-500/10 text-slate-200"
                : "text-slate-600"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                i < stepIndex
                  ? "bg-emerald-400"
                  : i === stepIndex
                    ? "animate-pulse-soft bg-blue-400"
                    : "bg-slate-700"
              }`}
            />
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
