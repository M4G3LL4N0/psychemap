import type { DashboardData } from "@/types";

export const dashboardMock: DashboardData = {
  plan: "Free",
  mapsUsed: 2,
  mapsLimit: 5,
  savedMaps: [
    {
      id: "does-consciousness-create-reality",
      question: "Does consciousness create reality?",
      summary: "Quantum and neuroscientific frames disagree; consciousness correlates with experience but does not license manifestation claims.",
      createdAt: "2026-05-10T14:22:00.000Z",
      evidenceHighlight: "Well-supported but incomplete",
    },
    {
      id: "is-synchronicity-real",
      question: "Is synchronicity real?",
      summary: "Meaningful coincidence is psychologically real; acausal physical mechanism remains unproven.",
      createdAt: "2026-05-12T09:15:00.000Z",
      evidenceHighlight: "Symbolically useful",
    },
    {
      id: "can-ai-become-conscious",
      question: "Can AI become conscious?",
      summary: "Possible in principle under some theories; no current system meets agreed consciousness criteria.",
      createdAt: "2026-05-14T18:40:00.000Z",
      evidenceHighlight: "Speculative but interesting",
    },
  ],
  bookmarkedTopics: [
    { slug: "hard-problem", title: "The Hard Problem", bookmarkedAt: "2026-05-08T11:00:00.000Z" },
    { slug: "archetypes", title: "Archetypes", bookmarkedAt: "2026-05-11T16:30:00.000Z" },
    { slug: "observer-effect", title: "Observer Effect", bookmarkedAt: "2026-05-13T08:45:00.000Z" },
  ],
  recentQuestions: [
    "Why do dreams feel meaningful?",
    "What is the psychoid?",
    "Is the self an illusion?",
  ],
};
