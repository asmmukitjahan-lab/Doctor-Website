import {
  Activity,
  Brain,
  CircleDot,
  Clock3,
  Focus,
  Waves,
  Zap,
  ScanLine,
} from "lucide-react";

export const specialties = [
  { number: "01", slug: "migraine-headache", name: "Migraine & headache", note: "When pain keeps returning", icon: Waves },
  { number: "02", slug: "epilepsy", name: "Epilepsy", note: "Clarity around seizure care", icon: Zap },
  { number: "03", slug: "stroke-recovery", name: "Stroke & recovery", note: "Guidance through each stage", icon: Activity },
  { number: "04", slug: "parkinsons-disease", name: "Parkinson's disease", note: "Care that moves with you", icon: Brain },
  { number: "05", slug: "nerve-neuropathy", name: "Nerve & neuropathy", note: "Understanding the signals", icon: ScanLine },
  { number: "06", slug: "memory-cognition", name: "Memory & cognition", note: "A clearer picture of change", icon: Focus },
  { number: "07", slug: "vertigo-balance", name: "Vertigo & balance", note: "Finding your steady ground", icon: CircleDot },
  { number: "08", slug: "sleep-disorders", name: "Sleep disorders", note: "Rest, rhythm and the brain", icon: Clock3 },
];

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About the Doctor", to: "/practice" },
  {
    label: "Conditions",
    to: "/specialties",
    summary: "Explore areas of neurological care",
    children: [
      { label: "All conditions", note: "Explore areas of focus", to: "/specialties#specialties" },
      ...specialties.map((item) => ({
        label: item.name,
        note: item.note,
        to: `/specialties#condition-${item.slug}`,
      })),
    ],
  },
  {
    label: "Treatments",
    to: "/journey",
    summary: "A careful process, shaped around you",
    children: [
      { label: "Assessment & diagnosis", note: "A considered route to clearer answers", to: "/journey#path" },
      { label: "Personalised care", note: "Decisions made together", to: "/journey#path" },
      { label: "Request an appointment", note: "Start with a conversation", to: "/visit#appointment" },
    ],
  },
  {
    label: "Patient Resources",
    to: "/journey",
    summary: "Practical details for your next step",
    children: [
      { label: "Your first visit", note: "What to expect", to: "/journey#path" },
      { label: "Appointment request", note: "Get in touch with the practice", to: "/visit#appointment" },
      { label: "Location & hours", note: "Find the practice", to: "/visit#contact" },
    ],
  },
  { label: "Contact", to: "/visit#contact" },
];

export const pathSteps = [
  { number: "01", title: "We listen", copy: "Start wherever you are. There is no perfect way to describe what you feel." },
  { number: "02", title: "We investigate", copy: "A considered assessment gives the small details room to connect." },
  { number: "03", title: "We make sense", copy: "Understand your diagnosis, your options and what each next step means." },
  { number: "04", title: "We move forward", copy: "A plan, made with you, that can adapt as life changes." },
];
