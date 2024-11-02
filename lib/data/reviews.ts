import type { Review } from "@/types/content";

export const reviews = {
  maya: {
    name: "Maya R.",
    area: "Sherman Oaks",
    service: "Recurring, every 2 weeks",
    text: "We've tried three services since moving here. Canyon Clean is the first one where the same two people show up every time and actually remember that the dog is scared of the vacuum.",
  },
  daniel: {
    name: "Daniel K.",
    area: "Studio City",
    service: "Move-out clean",
    text: "Booked the move-out clean on a Tuesday night for Thursday. They did the inside of every cabinet and the oven, and we got our full deposit back from a very picky landlord.",
  },
  priya: {
    name: "Priya S.",
    area: "Encino",
    service: "Deep clean, then monthly",
    text: "The deep clean took most of a day and it showed: baseboards, blinds, the grout I had given up on. The quote was exactly what I paid, which is rarer than it should be.",
  },
  jordan: {
    name: "Jordan L.",
    area: "Burbank",
    service: "Recurring, weekly",
    text: "I work from home, so I notice everything. They are quiet, quick, and leave a little note about anything they spotted, like a leaky tap. Genuinely the easiest part of my week.",
  },
} satisfies Record<string, Review>;

export const featuredReviews: Review[] = [
  reviews.maya,
  reviews.daniel,
  reviews.priya,
  reviews.jordan,
];
