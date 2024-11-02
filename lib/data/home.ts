import type { Faq, Plan, RoomChecklist, Step, TrustPoint } from "@/types/content";

export const trustPoints: TrustPoint[] = [
  {
    icon: "shield",
    title: "Bonded & insured",
    description: "Every visit covered, every cleaner on our payroll",
  },
  {
    icon: "user",
    title: "Background-checked crews",
    description: "Vetted, trained in-house and paired to your home",
  },
  {
    icon: "leaf",
    title: "Low-scent, pet-safe products",
    description: "Plant-based by default; bring your own if you like",
  },
  {
    icon: "repeat",
    title: "24-hour re-clean promise",
    description: "Missed a spot? We come back and fix it, free",
  },
];

export const steps: Step[] = [
  {
    title: "Get a flat price",
    description:
      "Tell us your bedrooms, bathrooms and type of clean. Your price appears instantly, with no call required.",
  },
  {
    title: "Pick a time",
    description:
      "Choose a morning or afternoon arrival window. We confirm by text and send a reminder the day before.",
  },
  {
    title: "Come home to clean",
    description:
      "Your crew works through the checklist, leaves a short visit note and locks up. Rate the visit from your phone.",
  },
];

export const roomChecklists: RoomChecklist[] = [
  {
    room: "Kitchen",
    items: [
      "Counters, backsplash & sink scrubbed",
      "Stovetop, microwave inside & out",
      "Appliance fronts & cabinet faces wiped",
      "Floors vacuumed & mopped",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Tub, shower & glass descaled",
      "Toilet cleaned & disinfected",
      "Mirrors, fixtures & vanity polished",
      "Floors washed by hand at edges",
    ],
  },
  {
    room: "Bedrooms & living",
    items: [
      "Every reachable surface dusted",
      "Beds made, linens changed if left out",
      "Upholstery & rugs vacuumed",
      "Trash emptied & relined",
    ],
  },
  {
    room: "Deep-clean extras",
    items: [
      "Baseboards & door frames hand-wiped",
      "Blinds, sills & window tracks",
      "Vents, fans & light fixtures",
      "Cabinet exteriors & switch plates",
    ],
  },
];

/** Starting prices for a 2-bedroom, 2-bathroom home. */
export const plans: Plan[] = [
  {
    name: "Monthly",
    price: 169,
    savings: "Save 10%",
    frequency: "monthly",
    features: ["Same crew every visit", "Full recurring checklist", "Skip or reschedule anytime"],
    cta: "Choose monthly",
  },
  {
    name: "Every 2 weeks",
    price: 159,
    savings: "Save 15%",
    frequency: "biweekly",
    features: ["Same crew every visit", "Full recurring checklist", "One free add-on each month"],
    cta: "Choose every 2 weeks",
    featured: true,
  },
  {
    name: "Weekly",
    price: 149,
    savings: "Save 20%",
    frequency: "weekly",
    features: ["Same crew every visit", "Priority arrival windows", "Free inside-fridge monthly"],
    cta: "Choose weekly",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "Do I need to be home while you clean?",
    answer:
      "No. Most of our recurring clients give us a lockbox code or a spare key, which we store coded and never labeled with your address. Plenty of people like to be home for the first visit to walk us through priorities, and that’s welcome too.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes. Crews arrive with vacuums, microfiber, and our low-scent, plant-based products. If you have a preferred product or a surface that needs something specific, leave it out and we’ll use it.",
  },
  {
    question: "How does the instant quote work?",
    answer:
      "You tell us the type of clean, bedrooms, bathrooms and any add-ons, and we show a flat price for your home. That’s the price you pay unless the home is very different from what was described, in which case we talk to you before starting.",
  },
  {
    question: "Will I get the same cleaners each time?",
    answer:
      "For recurring service, yes. We pair you with a crew of one or two cleaners and keep them on your schedule. If someone is out sick we let you know who is coming instead.",
  },
  {
    question: "What if something isn’t right?",
    answer:
      "Tell us within 24 hours and we’ll send the crew back to re-clean the area at no charge. That promise applies to every visit, recurring or one-time.",
  },
  {
    question: "How do rescheduling and cancellations work?",
    answer:
      "Reschedule or skip any visit up to 48 hours ahead at no cost from the link in your confirmation text. There’s no contract on recurring plans; pause or stop whenever you want.",
  },
];
