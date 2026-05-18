import type { AtlasTopic } from "@/types";

export const atlasTopics: AtlasTopic[] = [
  {
    slug: "consciousness",
    title: "Consciousness",
    tagline: "Subjective experience and its place in nature",
    definition:
      "Consciousness is the presence of subjective experience: what it feels like to see, think, suffer, or wonder. It is the most familiar fact and among the hardest to explain.",
    whyItMatters:
      "Ethics, medicine, AI policy, and personal meaning all depend on how we model minds. Confusion here spreads into law, technology, and spirituality.",
    evidenceStatus: "Well-supported but incomplete",
    evidenceNote: "Neural correlates are robust; explanatory gap remains.",
    strongestArguments: [
      "Brain injury and anesthesia reliably alter experience.",
      "Integrated information and global workspace theories make testable predictions.",
    ],
    strongestCriticisms: [
      "Correlation does not yet explain why there is experience at all.",
      "No consensus measure for consciousness in non-human systems.",
    ],
    misconceptions: [
      {
        title: "Consciousness is proven non-physical",
        description: "The hard problem is treated as proof of dualism.",
        correction: "The gap is epistemic; dualism is one unresolved response among several.",
      },
    ],
    relatedTheories: ["Global workspace", "IIT", "Higher-order thought", "Panpsychism"],
    keyThinkers: ["Chalmers", "Dennett", "Tononi", "Koch", "Nagel"],
    relatedSlugs: ["hard-problem", "ai-consciousness", "neutral-monism"],
  },
  {
    slug: "psychoid-theory",
    title: "Psychoid Theory",
    tagline: "Jung's late boundary between psyche and matter",
    definition:
      "The psychoid names a hypothetical ground where psychological and physical descriptions may not split cleanly. Jung developed it late, partly with Pauli, as a way to think beyond naive dualism.",
    whyItMatters:
      "It frames depth psychology's relation to physics without collapsing symbol into mechanism or mechanism into symbol.",
    evidenceStatus: "Philosophical interpretation",
    evidenceNote: "Influential in analytic psychology; not an established physical theory.",
    strongestArguments: [
      "Some experiences resist clean third-person description.",
      "Complementarity in physics inspired analogies about mind-matter relations.",
    ],
    strongestCriticisms: [
      "Risk of vague metaphysics dressed in scientific language.",
      "Little empirical protocol distinguishes psychoid claims from metaphor.",
    ],
    misconceptions: [
      {
        title: "Psychoid proves quantum mind control",
        description: "Jung-Pauli dialogue is read as laboratory fact.",
        correction: "It is a speculative interpretive frame, not established physics.",
      },
    ],
    relatedTheories: ["Neutral monism", "Dual-aspect monism", "Archetypes"],
    keyThinkers: ["Jung", "Pauli", "Meier", "Atmanspacher"],
    relatedSlugs: ["archetypes", "synchronicity", "neutral-monism"],
  },
  {
    slug: "synchronicity",
    title: "Synchronicity",
    tagline: "Meaningful coincidence without obvious causation",
    definition:
      "Synchronicity is Jung's term for coincidences that feel acausally connected through meaning rather than through known physical chains.",
    whyItMatters:
      "It names a common human experience and separates symbolic significance from statistical and causal explanation.",
    evidenceStatus: "Symbolically useful",
    evidenceNote: "Psychologically vivid; acausal mechanism unproven.",
    strongestArguments: [
      "People reliably report transformative coincidences.",
      "The concept clarifies therapy, art, and spiritual language.",
    ],
    strongestCriticisms: [
      "Confirmation bias and base-rate neglect inflate apparent frequency.",
      "No repeatable protocol demonstrates acausal linkage.",
    ],
    misconceptions: [
      {
        title: "Synchronicity proves fate",
        description: "Felt meaning is taken as cosmic ordering.",
        correction: "Meaning in experience does not establish external destiny.",
      },
    ],
    relatedTheories: ["Apophenia research", "Bayesian surprise", "Archetypes"],
    keyThinkers: ["Jung", "Pauli", "von Franz", "Aziz"],
    relatedSlugs: ["archetypes", "symbolic-meaning", "psychoid-theory"],
  },
  {
    slug: "archetypes",
    title: "Archetypes",
    tagline: "Recurring patterns in psyche, story, and culture",
    definition:
      "Archetypes are recurring images, roles, and narrative structures that appear across myths, dreams, and personal development. In Jung, they organize psychic energy; in cognitive science, similar patterns appear as evolved or learned schemas.",
    whyItMatters:
      "They give language for shared human themes without requiring literal metaphysical entities.",
    evidenceStatus: "Well-supported but incomplete",
    evidenceNote: "Cross-cultural patterns are documented; Jung's ontological claims are debated.",
    strongestArguments: [
      "Mythic and narrative structures recur across cultures.",
      "Clinical work uses archetypal imagery productively.",
    ],
    strongestCriticisms: [
      "Falsifiability and measurement are weak in classical formulations.",
      "Cultural learning may explain much without positing innate forms.",
    ],
    misconceptions: [
      {
        title: "Archetypes are literal beings",
        description: "Symbols are reified as independent agents.",
        correction: "They function as patterns of meaning-making, not confirmed entities.",
      },
    ],
    relatedTheories: ["Schema theory", "Evolutionary psychology", "Collective unconscious"],
    keyThinkers: ["Jung", "von Franz", "Hillman", "Stevens"],
    relatedSlugs: ["symbolic-meaning", "dreams", "synchronicity"],
  },
  {
    slug: "observer-effect",
    title: "Observer Effect",
    tagline: "Measurement, interaction, and interpretation in physics",
    definition:
      "In quantum physics, outcomes depend on experimental context and measurement setup. 'Observer' usually means physical interaction, not necessarily human awareness.",
    whyItMatters:
      "Misreadings of quantum language fuel widespread false claims about consciousness creating reality.",
    evidenceStatus: "Strongly established",
    evidenceNote: "Contextuality and measurement effects are established; consciousness-collapse is not.",
    strongestArguments: [
      "Experiments demonstrate context-dependent quantum statistics.",
      "Decoherence explains loss of superposition in macroscopic systems.",
    ],
    strongestCriticisms: [
      "Popular books often conflate interpretation with proof.",
      "No evidence that mental attention alone selects outcomes in daily life.",
    ],
    misconceptions: [
      {
        title: "Observation means human consciousness",
        description: "Measurement is equated with mindful looking.",
        correction: "Detectors and environmental interaction suffice in standard accounts.",
      },
    ],
    relatedTheories: ["Copenhagen", "Many-worlds", "QBism", "Decoherence"],
    keyThinkers: ["Bohr", "Heisenberg", "Wheeler", "Zurek"],
    relatedSlugs: ["consciousness", "neutral-monism"],
  },
  {
    slug: "predictive-processing",
    title: "Predictive Processing",
    tagline: "Perception as prediction and error correction",
    definition:
      "Predictive processing holds that brains constantly generate models of the world and update them by minimizing prediction error. Perception is constructive, not passive copying.",
    whyItMatters:
      "It explains hallucination, illusion, trauma triggers, and why reality feels stable yet is model-dependent.",
    evidenceStatus: "Well-supported but incomplete",
    evidenceNote: "Strong framework; debates on implementation details continue.",
    strongestArguments: [
      "Unifies perception, action, and learning under one principle.",
      "Accounts for clinical and perceptual phenomena elegantly.",
    ],
    strongestCriticisms: [
      "May not alone explain raw feel of consciousness.",
      "Competing architectures still being tested.",
    ],
    misconceptions: [
      {
        title: "The brain literally creates all of reality",
        description: "Constructivism is overstated into solipsism.",
        correction: "Models mediate experience; external reality still constrains survival.",
      },
    ],
    relatedTheories: ["Bayesian brain", "Active inference", "Enactivism"],
    keyThinkers: ["Friston", "Clark", "Hohwy", "Barrett"],
    relatedSlugs: ["consciousness", "time-perception"],
  },
  {
    slug: "dreams",
    title: "Dreams",
    tagline: "Night cognition, image, and felt significance",
    definition:
      "Dreams are subjective experiences during sleep, often vivid and narrative, involving memory consolidation, emotional processing, and spontaneous imagery.",
    whyItMatters:
      "Dreams shape art, therapy, and spiritual practice. Their felt meaning often exceeds what current science can fully explain.",
    evidenceStatus: "Well-supported but incomplete",
    evidenceNote: "Sleep neuroscience is strong; symbolic interpretation is contested.",
    strongestArguments: [
      "REM and memory consolidation have solid empirical support.",
      "Dreams help process emotion and simulate scenarios.",
    ],
    strongestCriticisms: [
      "Freudian and Jungian universals lack uniform experimental proof.",
      "Dream reports are biased and hard to standardize.",
    ],
    misconceptions: [
      {
        title: "Dream symbols have fixed universal dictionaries",
        description: "One-size-fits-all symbol books are treated as science.",
        correction: "Context, culture, and personal history matter more than fixed keys.",
      },
    ],
    relatedTheories: ["Activation-synthesis", "Threat simulation", "Continuity hypothesis"],
    keyThinkers: ["Hobson", "Jung", "Hall", "Domhoff"],
    relatedSlugs: ["archetypes", "symbolic-meaning"],
  },
  {
    slug: "ai-consciousness",
    title: "AI Consciousness",
    tagline: "Whether and how machines could have experience",
    definition:
      "AI consciousness asks whether artificial systems could have subjective experience, moral status, or merely simulate intelligent behavior without inner life.",
    whyItMatters:
      "Deployment of large models raises safety, rights, and deception risks if we cannot assess inner experience.",
    evidenceStatus: "Speculative but interesting",
    evidenceNote: "No agreed tests; behavior can mimic understanding.",
    strongestArguments: [
      "Functional and computational theories suggest consciousness might scale with complexity.",
      "If substrate does not matter, silicon systems could in principle qualify.",
    ],
    strongestCriticisms: [
      "Current LLMs lack persistent embodiment and may only imitate report of experience.",
      "We lack validated consciousness metrics even for animals.",
    ],
    misconceptions: [
      {
        title: "Fluency proves consciousness",
        description: "Eloquent text is taken as inner experience.",
        correction: "Language skill and phenomenology are different targets.",
      },
    ],
    relatedTheories: ["Functionalism", "Biological naturalism", "IIT applied to AI"],
    keyThinkers: ["Chalmers", "Searle", "Tononi", "Bostrom"],
    relatedSlugs: ["consciousness", "hard-problem"],
  },
  {
    slug: "symbolic-meaning",
    title: "Symbolic Meaning",
    tagline: "How signs carry significance beyond literal reference",
    definition:
      "Symbolic meaning is significance carried by image, ritual, metaphor, and narrative. It structures identity and culture without always naming physical causes.",
    whyItMatters:
      "Humans live inside stories. Confusing symbol with mechanism produces both naive scientism and naive mysticism.",
    evidenceStatus: "Strongly established",
    evidenceNote: "As psychological and cultural fact; not as automatic physical causation.",
    strongestArguments: [
      "Anthropology and psychology document pervasive symbolic behavior.",
      "Ritual and metaphor regulate emotion and cooperation.",
    ],
    strongestCriticisms: [
      "Symbolic truth does not transfer to empirical claims without evidence.",
      "Over-interpretation can see patterns everywhere.",
    ],
    misconceptions: [
      {
        title: "Symbolic resonance proves physical causation",
        description: "Metaphor is mistaken for mechanism.",
        correction: "Keep hermeneutic insight and causal science in separate lanes.",
      },
    ],
    relatedTheories: ["Semiotics", "Hermeneutics", "Archetypal psychology"],
    keyThinkers: ["Jung", "Ricoeur", "Eliade", "Turner"],
    relatedSlugs: ["archetypes", "dreams", "synchronicity"],
  },
  {
    slug: "time-perception",
    title: "Time Perception",
    tagline: "How duration, memory, and attention shape experienced time",
    definition:
      "Time perception is the brain's construction of temporal flow. Clock time and felt time diverge under emotion, trauma, flow states, and neurological conditions.",
    whyItMatters:
      "Meditation, trauma therapy, and physics all touch time, often talking past each other.",
    evidenceStatus: "Well-supported but incomplete",
    evidenceNote: "Neural timing mechanisms are known; unity of temporal experience is partial.",
    strongestArguments: [
      "Dopamine, attention, and memory systems modulate temporal judgment.",
      "Clinical cases dissociate felt time from external measurement.",
    ],
    strongestCriticisms: [
      "No single neural clock explains all temporal phenomena.",
      "Physics of time is separate from phenomenology of duration.",
    ],
    misconceptions: [
      {
        title: "Altered states prove time is illusion only",
        description: "Subjective dilation is over-generalized.",
        correction: "Experience of time varies; measured time still anchors coordination.",
      },
    ],
    relatedTheories: ["Scalar timing", "Specious present", "Block universe"],
    keyThinkers: ["Eagleman", "Wittmann", "Augustine", "Einstein"],
    relatedSlugs: ["predictive-processing", "consciousness"],
  },
  {
    slug: "hard-problem",
    title: "The Hard Problem",
    tagline: "Why there is subjective experience at all",
    definition:
      "David Chalmers distinguished the 'easy' problems (functions and mechanisms) from the hard problem: why physical processing is accompanied by inner experience.",
    whyItMatters:
      "It sets the boundary of current science and prevents false certainty in both reductionism and mysticism.",
    evidenceStatus: "Philosophical interpretation",
    evidenceNote: "Defines a live debate, not a settled experiment.",
    strongestArguments: [
      "Explanatory gap persists even with detailed neural maps.",
      "Zombies and inversion thought experiments pressure physicalism.",
    ],
    strongestCriticisms: [
      "Some argue the hard problem rests on confused categories.",
      "Progress on easy problems may eventually dissolve the gap.",
    ],
    misconceptions: [
      {
        title: "Hard problem proves souls",
        description: "Open question is closed in favor of dualism.",
        correction: "It marks open terrain, not a single mandated answer.",
      },
    ],
    relatedTheories: ["Physicalism", "Panpsychism", "Illusionism", "Russellian monism"],
    keyThinkers: ["Chalmers", "Dennett", "Nagel", "Goff"],
    relatedSlugs: ["consciousness", "neutral-monism", "ai-consciousness"],
  },
  {
    slug: "neutral-monism",
    title: "Neutral Monism",
    tagline: "One underlying stuff, neither purely mental nor physical",
    definition:
      "Neutral monism holds that reality's base is neither mind nor matter as we usually conceive them, but something more fundamental from which both aspects arise.",
    whyItMatters:
      "It offers a middle path between crude dualism and reductive physicalism, influential in philosophy and some readings of Jung.",
    evidenceStatus: "Philosophical interpretation",
    evidenceNote: "Elegant metaphysics; limited direct empirical tests.",
    strongestArguments: [
      "Avoids forcing mind into matter or matter into mind prematurely.",
      "Aligns with some interpretations of Russell and Spinoza.",
    ],
    strongestCriticisms: [
      "May postpone explanation without adding predictive power.",
      "Hard to distinguish from other monisms operationally.",
    ],
    misconceptions: [
      {
        title: "Neutral monism is proven physics",
        description: "Philosophical monism is marketed as lab result.",
        correction: "It is a metaphysical proposal, not a settled empirical theory.",
      },
    ],
    relatedTheories: ["Dual-aspect monism", "Panpsychism", "Russellian monism"],
    keyThinkers: ["Russell", "James", "Spinoza", "Goff"],
    relatedSlugs: ["psychoid-theory", "consciousness", "hard-problem"],
  },
];

export function getAtlasTopic(slug: string): AtlasTopic | undefined {
  return atlasTopics.find((t) => t.slug === slug);
}
