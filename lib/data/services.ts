import type { AddOnCard, Service } from "@/types/content";
import { images } from "./images";

export const services: Service[] = [
  {
    key: "recurring",
    title: "Recurring cleaning",
    image: images.recurringSofa,
    priceFrom: "from $139",
    summary:
      "Weekly, every two weeks or monthly. The same crew and the same room-by-room checklist every visit, so your home stays reset without you thinking about it.",
    highlights: [
      "Kitchens, bathrooms, floors & dusting",
      "Beds made, linens changed on request",
      "Save up to 20% with weekly visits",
    ],
    detail: {
      title: "Recurring cleaning",
      priceLabel: "From $139 per visit",
      description:
        "The core of what we do. A consistent crew keeps your home on a steady rhythm, so it never slides into needing a big rescue. Choose weekly, every two weeks or monthly and change it anytime.",
      checklist: [
        "Kitchen counters, sink, stovetop & appliance fronts",
        "Bathrooms scrubbed, disinfected & polished",
        "Dusting of every reachable surface",
        "Floors vacuumed & mopped throughout",
        "Beds made and linens changed if left out",
        "Trash and recycling emptied",
      ],
      bestFor:
        "Best for busy households, families with pets and anyone who wants the same people in their home each time.",
      ctaLabel: "Price my recurring clean",
    },
  },
  {
    key: "deep",
    title: "Deep cleaning",
    image: images.deepRailing,
    priceFrom: "from $259",
    summary:
      "A top-to-bottom reset for first visits, spring cleans and before guests arrive. We slow down on the details a regular clean skips.",
    highlights: [
      "Baseboards, door frames & blinds",
      "Cabinet fronts, vents & light fixtures",
      "Built-up grime on grout and tile",
    ],
    detail: {
      title: "Deep cleaning",
      priceLabel: "From $259",
      description:
        "A slower, more detailed clean that reaches the corners a regular visit skips. We recommend it as a first visit before recurring service, before hosting, or once or twice a year.",
      checklist: [
        "Everything in the recurring checklist",
        "Baseboards, door frames & doors hand-wiped",
        "Blinds, sills and window tracks",
        "Vents, ceiling fans & light fixtures",
        "Cabinet fronts and switch plates",
        "Built-up soap scum, grout and hard-water spots",
      ],
      bestFor:
        "Best for first cleans, seasonal resets and homes that haven’t had a professional clean in a while.",
      ctaLabel: "Price my deep clean",
    },
  },
  {
    key: "move",
    title: "Move-in / move-out",
    image: images.moveOutSupplies,
    priceFrom: "from $329",
    summary:
      "Empty-home cleaning timed around your keys and your deposit. Inside every cabinet, drawer and appliance, ready for the walkthrough.",
    highlights: [
      "Inside oven, fridge & cabinets",
      "Closets, shelves & window tracks",
      "Photo checklist for landlords & agents",
    ],
    detail: {
      title: "Move-in / move-out cleaning",
      priceLabel: "From $329",
      description:
        "Empty-home cleaning timed around your keys, your movers and your deposit. We clean inside everything, then send a photo checklist you can forward to a landlord, buyer or agent.",
      checklist: [
        "Inside all cabinets, drawers & closets",
        "Inside oven, fridge, microwave & dishwasher",
        "Window tracks, sills & sliding-door rails",
        "Baseboards, walls spot-cleaned",
        "Garage sweep on request",
        "Photo checklist after every job",
      ],
      bestFor:
        "Best for renters, landlords between tenants, and sellers getting ready for photos or closing.",
      ctaLabel: "Price my move-in clean",
    },
  },
];

/** Maps a service to the clean type used by the quote calculator. */
export const quoteTypeForService = {
  recurring: "standard",
  deep: "deep",
  move: "move",
} as const satisfies Record<Service["key"], string>;

export const addOnCards: AddOnCard[] = [
  { title: "Inside oven", price: "$45", description: "Racks, glass and interior degreased." },
  {
    title: "Inside fridge",
    price: "$40",
    description: "Emptied, shelves washed, restocked neatly.",
  },
  {
    title: "Interior windows",
    price: "$6/window",
    description: "Glass, sills and tracks, ground floor.",
  },
  {
    title: "Blinds detail",
    price: "$35",
    description: "Slat-by-slat wipe for every blind in the home.",
  },
  {
    title: "Inside cabinets",
    price: "$40",
    description: "Emptied, wiped and reset (kitchen or bath).",
  },
  {
    title: "Laundry & fold",
    price: "$30/load",
    description: "Washed, dried and folded during your visit.",
  },
  {
    title: "Upholstery refresh",
    price: "$55",
    description: "Sofa and chairs vacuumed, spot-treated.",
  },
  {
    title: "Pet hair detail",
    price: "$25",
    description: "Extra passes on furniture, stairs and rugs.",
  },
];

export const dayOfExpectations = [
  {
    title: "Arrival window.",
    text: "Morning (8–10am) or afternoon (12–2pm). We text when the crew is on the way.",
  },
  {
    title: "Time on site.",
    text: "A 2-bed recurring clean usually takes a two-person crew about 2–2.5 hours; deep cleans take longer.",
  },
  {
    title: "What we don’t do.",
    text: "Exterior windows, biohazards, mold remediation or moving heavy furniture; we’ll point you to someone who does.",
  },
  {
    title: "After the visit.",
    text: "You get a short visit note and a link to rate the clean. Anything missed is re-cleaned within 24 hours.",
  },
];
