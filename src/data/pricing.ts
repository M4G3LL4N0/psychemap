import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Start mapping questions with evidence-aware structure.",
    features: [
      "5 maps per month",
      "Limited saves",
      "Full Atlas browsing",
      "Evidence ladder on every map",
    ],
    cta: "Start free",
  },
  {
    id: "explorer",
    name: "Explorer",
    price: "$19",
    period: "/month",
    description: "For serious explorers who return to deep questions often.",
    features: [
      "Unlimited maps",
      "Save and export maps",
      "Deeper theory comparisons",
      "Extended synthesis sections",
    ],
    cta: "Start Explorer",
    highlighted: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For creators, educators, and workshop facilitators.",
    features: [
      "Creator mode",
      "Curriculum mode",
      "Workshop mode",
      "Advanced comparisons",
      "Longer, richer maps",
    ],
    cta: "Start Pro",
  },
  {
    id: "institution",
    name: "Institution",
    price: "Custom",
    description: "For teams, labs, and programs that need shared inquiry infrastructure.",
    features: [
      "Team access",
      "Research workflows",
      "Private knowledge base",
      "Custom support",
    ],
    cta: "Contact us",
  },
];
