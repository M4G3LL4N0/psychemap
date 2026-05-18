export type EvidenceLevel =
  | "Strongly established"
  | "Well-supported but incomplete"
  | "Plausible theory"
  | "Philosophical interpretation"
  | "Symbolically useful"
  | "Speculative but interesting"
  | "Weak evidence"
  | "Likely misleading"
  | "Pseudoscientific overreach";

export interface EvidenceLadderItem {
  claim: string;
  level: EvidenceLevel;
  note?: string;
}

export interface Misconception {
  title: string;
  description: string;
  correction: string;
}

export interface ArgumentPair {
  for: string[];
  against: string[];
}

export interface StudyNext {
  books?: string[];
  thinkers?: string[];
  fields?: string[];
  concepts?: string[];
  papers?: string[];
  questions?: string[];
}

export interface RealityMap {
  id: string;
  question: string;
  createdAt: string;
  directAnswer: string;
  evidenceLadder: EvidenceLadderItem[];
  scientificLayer: string;
  psychologicalLayer: string;
  jungianLayer: string;
  philosophicalLayer: string;
  misconceptions: Misconception[];
  arguments: ArgumentPair;
  synthesis: {
    known: string[];
    unknown: string[];
    symbolic: string[];
    speculative: string[];
    unsupported: string[];
  };
  studyNext: StudyNext;
}

export interface AtlasTopic {
  slug: string;
  title: string;
  tagline: string;
  definition: string;
  whyItMatters: string;
  evidenceStatus: EvidenceLevel;
  evidenceNote: string;
  strongestArguments: string[];
  strongestCriticisms: string[];
  misconceptions: Misconception[];
  relatedTheories: string[];
  keyThinkers: string[];
  relatedSlugs: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface SavedMap {
  id: string;
  question: string;
  summary: string;
  createdAt: string;
  evidenceHighlight: EvidenceLevel;
}

export interface BookmarkedTopic {
  slug: string;
  title: string;
  bookmarkedAt: string;
}

export interface DashboardData {
  plan: string;
  mapsUsed: number;
  mapsLimit: number;
  savedMaps: SavedMap[];
  bookmarkedTopics: BookmarkedTopic[];
  recentQuestions: string[];
}
