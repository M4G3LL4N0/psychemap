import type { RealityMap } from "@/types";

export const exampleMaps: Pick<RealityMap, "id" | "question" | "directAnswer" | "createdAt">[] = [
  {
    id: "hard-problem-consciousness",
    question: "What is the hard problem of consciousness?",
    directAnswer:
      "The hard problem asks why physical processes are accompanied by subjective experience at all. Functional accounts explain cognition; they do not yet close the gap between mechanism and felt quality.",
    createdAt: "2026-05-01T10:00:00.000Z",
  },
  {
    id: "observer-quantum",
    question: "What is the observer in quantum mechanics?",
    directAnswer:
      "In most laboratory practice, 'observation' means physical interaction that extracts information and destroys interference. Human consciousness is not required in mainstream formulations.",
    createdAt: "2026-05-03T12:00:00.000Z",
  },
  {
    id: "self-illusion",
    question: "Is the self an illusion?",
    directAnswer:
      "The unified self is partly constructed: narratives and bodily signals integrate into a stable 'I.' That construction is real in its effects even if it is not a permanent substance.",
    createdAt: "2026-05-05T15:00:00.000Z",
  },
];
