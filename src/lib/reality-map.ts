import type { RealityMap, EvidenceLadderItem } from "@/types";
import { slugify } from "@/lib/utils";

const LOADING_STEPS = [
  "Building scientific layer",
  "Mapping symbolic layer",
  "Checking misconceptions",
  "Comparing theories",
  "Calibrating evidence levels",
] as const;

export { LOADING_STEPS };

function detectTheme(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("quantum") || q.includes("observer")) return "quantum";
  if (q.includes("synchronic") || q.includes("archetype") || q.includes("psychoid") || q.includes("jung")) return "jungian";
  if (q.includes("dream")) return "dreams";
  if (q.includes("ai") || q.includes("artificial")) return "ai";
  if (q.includes("illusion") || q.includes("self")) return "self";
  if (q.includes("hard problem")) return "hard-problem";
  if (q.includes("brain") || q.includes("construct")) return "constructivism";
  if (q.includes("conscious") && q.includes("reality")) return "consciousness-reality";
  return "general";
}

const templates: Record<string, Partial<RealityMap>> = {
  quantum: {
    directAnswer:
      "Quantum mechanics describes probabilistic behavior at microscopic scales. It does not establish that human consciousness creates macroscopic reality. Measurement involves physical interaction; interpretations of what 'observation' means remain contested among physicists and philosophers.",
    evidenceLadder: [
      { claim: "Quantum systems exhibit wave-like and particle-like behavior", level: "Strongly established" },
      { claim: "Measurement outcomes are probabilistic in standard formalism", level: "Strongly established" },
      { claim: "Decoherence explains apparent collapse without conscious observers", level: "Well-supported but incomplete" },
      { claim: "Consciousness is required for wave function collapse", level: "Philosophical interpretation", note: "Von Neumann-Wigner; not mainstream physics consensus" },
      { claim: "Quantum physics proves manifestation or law of attraction", level: "Likely misleading" },
    ],
    scientificLayer:
      "Neuroscience shows no mechanism by which cortical activity selects quantum outcomes in everyday objects. Decoherence times in warm, wet brains are extremely short. Physics supports entanglement, superposition, and contextuality; it does not license claims that wishing shapes external events.",
    psychologicalLayer:
      "Humans seek causal stories. Quantum jargon feels profound and can anchor confirmation bias. Salience and pattern detection make coincidences feel meaningful when paired with technical language we do not fully grasp.",
    jungianLayer:
      "Synchronicity is a symbolic frame for meaningful coincidence, not a substitute for physical causation. Archetypal language can organize experience without implying that psyche collapses wave functions.",
    philosophicalLayer:
      "Interpretations include Copenhagen-style pragmatism, many-worlds, pilot-wave, and QBism. Each handles measurement differently. None settle whether reality is mind-dependent. Phenomenology and physics answer different questions.",
  },
  jungian: {
    directAnswer:
      "Jungian concepts describe recurring patterns in human meaning-making, narrative, and culture. Archetypes and synchronicity are psychologically and symbolically powerful; they are not established as independent metaphysical entities or as proof of acausal ordering in the physical world.",
    evidenceLadder: [
      { claim: "Humans share cross-cultural narrative and image patterns", level: "Well-supported but incomplete" },
      { claim: "Meaningful coincidence affects experience and behavior", level: "Well-supported but incomplete" },
      { claim: "Archetypes exist as literal structures in a collective unconscious", level: "Philosophical interpretation" },
      { claim: "Synchronicity demonstrates acausal connection in nature", level: "Speculative but interesting" },
      { claim: "Symbolic events prove objective fate or destiny", level: "Likely misleading" },
    ],
    scientificLayer:
      "Cognitive science explains pattern perception, memory bias, and predictive processing. Cultural transmission explains shared symbols. No standard experiment confirms acausal psychophysical linkage of the kind Jung hypothesized.",
    psychologicalLayer:
      "Trauma, attachment, and identity shape what feels fated. Salient events bind to inner states. Dreams compress emotional material into image-language that can guide reflection without predicting external events.",
    jungianLayer:
      "Individuation names the slow integration of conscious and unconscious material. The psychoid, in Jung's late work, points to a boundary where psyche and matter may not be cleanly split; this remains interpretive, not empirically settled.",
    philosophicalLayer:
      "Neutral monism, panpsychism, and dual-aspect views sometimes read Jung generously. Physicalism treats archetypes as cognitive-cultural constructs. Honest inquiry keeps symbolic truth distinct from causal proof.",
  },
  general: {
    directAnswer:
      "This question sits at the intersection of empirical science, lived experience, and interpretive frameworks. Current evidence supports careful, layered answers rather than a single decisive verdict. PsycheMap separates what is known, what is plausible, what is symbolic, and what is unsupported.",
    evidenceLadder: [
      { claim: "Conscious experience correlates with brain activity", level: "Strongly established" },
      { claim: "Subjective meaning shapes attention, memory, and behavior", level: "Strongly established" },
      { claim: "All aspects of mind are fully explained by current neuroscience", level: "Weak evidence", note: "Open problems remain" },
      { claim: "Subjective insight alone establishes objective causation", level: "Likely misleading" },
    ],
    scientificLayer:
      "Neuroscience, cognitive science, and information theory constrain plausible models of mind and perception. They support correlation between brain states and experience, and they challenge naive claims that mystery implies any metaphysics is equally valid.",
    psychologicalLayer:
      "Perception is constructive: prediction, emotion, and prior belief shape what we notice. Identity and narrative turn events into meaning. This is psychologically real without proving metaphysical claims.",
    jungianLayer:
      "Symbols organize experience across cultures. Dreams and myth can be read as maps of inner conflict and growth. These readings are therapeutically and artistically valuable when not mistaken for laboratory results.",
    philosophicalLayer:
      "Physicalism, idealism, panpsychism, emergentism, and phenomenology offer competing frames. The hard problem of consciousness remains open. Simulation hypotheses are logically possible but empirically thin.",
  },
};

const defaultMisconceptions = [
  {
    title: "Mystery licenses any claim",
    description: "Gaps in knowledge are treated as proof for a preferred story.",
    correction: "Uncertainty marks where inquiry continues; it does not validate every interpretation equally.",
  },
  {
    title: "Subjective meaning proves objective causation",
    description: "A vivid inner experience is taken as evidence of external mechanism.",
    correction: "Meaning is real in experience; establishing causation requires separate evidence.",
  },
  {
    title: "Science disproves all symbolic meaning",
    description: "Material explanation is read as erasing narrative, art, and depth.",
    correction: "Science constrains mechanism; symbolism addresses significance. Both can coexist with clear labels.",
  },
];

function buildMap(question: string): RealityMap {
  const theme = detectTheme(question);
  const base = templates[theme] ?? templates.general;
  const id = slugify(question) || `map-${Date.now()}`;
  const now = new Date().toISOString();

  const evidenceLadder: EvidenceLadderItem[] = base.evidenceLadder ?? templates.general.evidenceLadder!;

  return {
    id,
    question,
    createdAt: now,
    directAnswer: base.directAnswer ?? templates.general.directAnswer!,
    evidenceLadder,
    scientificLayer: base.scientificLayer ?? templates.general.scientificLayer!,
    psychologicalLayer: base.psychologicalLayer ?? templates.general.psychologicalLayer!,
    jungianLayer: base.jungianLayer ?? templates.general.jungianLayer!,
    philosophicalLayer: base.philosophicalLayer ?? templates.general.philosophicalLayer!,
    misconceptions: defaultMisconceptions,
    arguments: {
      for: [
        "Structured maps reduce confusion when topics cross science, psychology, and philosophy.",
        "Steelmanning opposing views improves judgment and lowers dogmatism.",
        "Labeling evidence levels protects against both naive materialism and naive mysticism.",
      ],
      against: [
        "Complex questions may not fit clean ladders without oversimplifying live debates.",
        "Symbolic frames can be misread as empirical claims without careful labeling.",
        "No map replaces primary sources, mentorship, or clinical care when needed.",
      ],
    },
    synthesis: {
      known: [
        "Brain activity and conscious experience are tightly coupled in ordinary conditions.",
        "Human perception is active, predictive, and shaped by emotion and prior belief.",
      ],
      unknown: [
        "Why there is subjective experience at all (the hard problem) remains unresolved.",
        "Which interpretation of quantum measurement, if any, is ultimately correct.",
      ],
      symbolic: [
        "Archetypes and dreams can organize inner life and creative insight.",
        "Synchronicity can name felt meaning without proving acausal physics.",
      ],
      speculative: [
        "Panpsychist or psychoid monist pictures may unify mind and matter in future theory.",
        "Advanced AI systems might someday warrant moral status we do not yet know how to test.",
      ],
      unsupported: [
        "That quantum mechanics proves personal manifestation in daily life.",
        "That symbolic resonance alone demonstrates objective external causation.",
      ],
    },
    studyNext: {
      books: ["The Emperor's New Mind (Penrose)", "Man and His Symbols (Jung)", "Consciousness Explained (Dennett)"],
      thinkers: ["Chalmers", "Jung", "Tononi", "Koch", "Pauli", "Meillassoux"],
      fields: ["philosophy of mind", "cognitive neuroscience", "quantum foundations", "analytic psychology"],
      concepts: ["integrated information", "predictive processing", "decoherence", "individuation"],
      questions: [
        "What would count as evidence for or against your preferred view?",
        "Which part of your question is empirical versus interpretive?",
      ],
    },
  };
}

export async function generateRealityMap(question: string): Promise<RealityMap> {
  const trimmed = question.trim();
  if (!trimmed) throw new Error("Question cannot be empty");

  await new Promise((r) => setTimeout(r, 2200 + Math.random() * 800));
  return buildMap(trimmed);
}

export function getRealityMapById(id: string, question?: string): RealityMap | null {
  if (question) return buildMap(question);
  return null;
}
