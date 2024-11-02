import type { ServiceArea } from "@/types/content";
import { images } from "./images";
import { reviews } from "./reviews";

export const areas: ServiceArea[] = [
  {
    slug: "sherman-oaks",
    name: "Sherman Oaks",
    zip: "91403",
    zipList: "91403, 91423 and 91413",
    lede: "Recurring and deep cleaning for Sherman Oaks homes, from hillside houses south of Ventura Boulevard to condos and townhomes near the Galleria. Our home crew base is right here.",
    intro:
      "Sherman Oaks is where Canyon Clean started, and it’s still where most of our crews live. That means shorter drive times, more arrival windows and the same cleaners staying on your schedule for years rather than months.",
    image: images.recurringSofa,
    points: [
      {
        title: "Hillside homes",
        description:
          "Stairs, split levels and big glass. We bring extension tools for high sills and clean slider tracks that collect canyon dust.",
      },
      {
        title: "Condos & townhomes",
        description:
          "We work around building rules, loading zones and quiet hours, and bring compact kits for elevators and tight parking.",
      },
      {
        title: "Busy families",
        description:
          "Weekly and biweekly plans built around school runs, with a crew who knows which room is off-limits during nap time.",
      },
    ],
    review: reviews.maya,
    faqs: [
      {
        question: "How soon can you start in Sherman Oaks?",
        answer:
          "Because our crews are based here, we can usually do a first clean within 3–5 days, and often sooner for move-outs.",
      },
      {
        question: "Do you clean homes up in the hills above Ventura?",
        answer:
          "Yes. We cover the streets south of Ventura up toward Mulholland. Let us know about steep driveways or tight parking in the notes so the crew plans ahead.",
      },
      {
        question: "Can you work with my building’s rules?",
        answer:
          "Absolutely. Add your building’s hours, parking instructions and any certificate-of-insurance requirements to the quote and we’ll handle them.",
      },
    ],
    nearby: ["studio-city", "encino"],
  },
  {
    slug: "studio-city",
    name: "Studio City",
    zip: "91604",
    zipList: "91604 and 91602",
    lede: "House cleaning for Studio City bungalows, hillside homes and apartments, from Colfax Meadows to the streets above Ventura. Flat prices, same crew every visit.",
    intro:
      "Studio City homes range from 1940s bungalows with original tile to modern hillside builds with walls of glass. Our crews are trained for both, and we note each home’s quirks on your checklist so nothing gets relearned every visit.",
    image: images.deepRailing,
    points: [
      {
        title: "Older bungalows",
        description:
          "Gentle products for original tile, hardwood and painted trim, plus extra time on the corners that older homes collect.",
      },
      {
        title: "Work-from-home schedules",
        description:
          "Quiet crews, flexible arrival windows and a routine that works around calls, recording sessions and studio days.",
      },
      {
        title: "Rentals between tenants",
        description:
          "Move-out cleans scheduled to the day, with a photo checklist you can send straight to the owner or property manager.",
      },
    ],
    review: reviews.daniel,
    faqs: [
      {
        question: "Do you clean apartments as well as houses?",
        answer:
          "Yes, studios and one-bedroom apartments are a big part of our Studio City schedule. Our pricing scales down for smaller homes.",
      },
      {
        question: "I work from home. Will you be disruptive?",
        answer:
          "Crews work quietly and can do the office last or skip it. Tell us your calls schedule in the notes and we’ll plan the vacuuming around it.",
      },
      {
        question: "Can you clean original tile and hardwood safely?",
        answer:
          "Yes. We use pH-neutral, plant-based products by default and never use abrasive pads on vintage tile or finished wood.",
      },
    ],
    nearby: ["sherman-oaks", "encino"],
  },
  {
    slug: "encino",
    name: "Encino",
    zip: "91436",
    zipList: "91316 and 91436",
    lede: "Detailed home cleaning for Encino’s larger homes, from the flats near Lake Balboa to the Encino Hills. Two-person and three-person crews, one flat price.",
    intro:
      "Many Encino homes are bigger than average, with more bathrooms, more glass and more upholstery. We staff those visits with larger crews so a thorough clean still fits into a single morning, and we assign a lead cleaner who stays with your home.",
    image: images.upholstery,
    points: [
      {
        title: "Larger homes",
        description:
          "Three-person crews for homes over 2,800 sq ft, with a lead who owns the checklist and your notes.",
      },
      {
        title: "Pools, patios & guest houses",
        description:
          "Add pool-house bathrooms, casitas and patio furniture wipe-downs to any visit.",
      },
      {
        title: "Hosting & holidays",
        description:
          "Pre-event deep cleans and next-morning resets, booked around your guest list.",
      },
    ],
    review: reviews.priya,
    faqs: [
      {
        question: "Do you clean guest houses and casitas?",
        answer:
          "Yes. Add them as an extra bedroom and bathroom in the instant quote, or mention them in the notes and we’ll price them in.",
      },
      {
        question: "How long does a large-home clean take?",
        answer:
          "A 4-bedroom recurring clean usually takes a three-person crew around 2.5–3 hours. Deep cleans are closer to a full day.",
      },
      {
        question: "Do you work in gated communities?",
        answer:
          "We do. Add gate codes or guard-desk instructions in the notes, and we’ll register the crew ahead of time if needed.",
      },
    ],
    nearby: ["sherman-oaks", "studio-city"],
  },
];

/** Neighborhoods we cover that don't have a dedicated page yet. */
export const moreAreas = [
  "Burbank",
  "Toluca Lake",
  "Valley Village",
  "North Hollywood",
  "Van Nuys",
  "Tarzana",
  "Woodland Hills",
  "Valley Glen",
];

export function getArea(slug: string): ServiceArea | undefined {
  return areas.find((area) => area.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getArea(slug))
    .filter((nearby): nearby is ServiceArea => nearby !== undefined);
}

export interface MapPin {
  x: number;
  y: number;
  r: number;
  /** Crew bases get a translucent coverage halo and a blue pin; stops are orange. */
  halo?: number;
  label?: { text: string; x: number; y: number; size?: number };
}

/** Pins for the illustrated coverage map on the homepage. */
export const coverageMapPins: MapPin[] = [
  { x: 96, y: 176, r: 8, halo: 42, label: { text: "Encino", x: 72, y: 214 } },
  { x: 222, y: 196, r: 9, halo: 52, label: { text: "Sherman Oaks", x: 176, y: 240 } },
  { x: 340, y: 214, r: 8, halo: 42, label: { text: "Studio City", x: 306, y: 254 } },
  { x: 430, y: 118, r: 7, label: { text: "Burbank", x: 410, y: 96 } },
  { x: 268, y: 96, r: 6, label: { text: "Van Nuys", x: 232, y: 78 } },
  { x: 384, y: 152, r: 6, label: { text: "Toluca Lake", x: 398, y: 170, size: 12 } },
  { x: 330, y: 120, r: 5 },
];
