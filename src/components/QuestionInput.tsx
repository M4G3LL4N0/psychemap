"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface QuestionInputProps {
  onSubmit: (question: string) => void;
  disabled?: boolean;
  defaultValue?: string;
  size?: "default" | "large";
}

export function QuestionInput({
  onSubmit,
  disabled,
  defaultValue = "",
  size = "default",
}: QuestionInputProps) {
  const [value, setValue] = useState(defaultValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed && !disabled) onSubmit(trimmed);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="question-input" className="sr-only">
        Your question
      </label>
      <div
        className={cn(
          "glass-panel flex flex-col gap-3 rounded-2xl p-2 sm:flex-row sm:items-stretch",
          size === "large" && "p-3"
        )}
      >
        <textarea
          id="question-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
          placeholder="Ask a deep question about consciousness, reality, symbolism, or mind..."
          rows={size === "large" ? 3 : 2}
          className={cn(
            "min-h-[3rem] flex-1 resize-none rounded-xl bg-transparent px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50",
            size === "large" && "text-lg"
          )}
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 sm:self-end"
        >
          Generate Map
        </button>
      </div>
    </form>
  );
}
