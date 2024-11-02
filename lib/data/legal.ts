export interface LegalPage {
  slug: "privacy" | "terms" | "accessibility";
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy",
    intro: "We only collect what we need to price, schedule and clean your home.",
    sections: [
      {
        heading: "What we collect",
        body: "Your name, phone, email, address and the details of your home you enter in the instant quote. Gate codes and access notes are stored with your booking and shared only with your assigned crew.",
      },
      {
        heading: "How we contact you",
        body: "We text to confirm your crew and arrival window and to send a reminder the day before each visit. Reply STOP at any time to opt out of texts.",
      },
      {
        heading: "Keys and lockboxes",
        body: "Spare keys are stored coded and never labeled with your address. Lockbox codes are visible only to the crew on the day of your visit.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms",
    intro: "The short version of how booking with Canyon Clean Co. works.",
    sections: [
      {
        heading: "Pricing",
        body: "Your instant quote is a flat price based on the home you describe. If the home is very different from the description, we talk to you before starting any work.",
      },
      {
        heading: "Rescheduling and cancellations",
        body: "Reschedule or skip any visit up to 48 hours ahead at no cost. Recurring plans have no contract; pause or stop whenever you want.",
      },
      {
        heading: "24-hour re-clean promise",
        body: "Tell us within 24 hours if something isn’t right and we’ll send the crew back to re-clean the area at no charge.",
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    intro:
      "This site is built to be usable with a keyboard, a screen reader and at any zoom level, and the quote form works without JavaScript.",
    sections: [
      {
        heading: "Need help booking?",
        body: "Call or text (818) 555-0163, Monday to Saturday from 7am to 7pm, and we’ll take your booking by phone.",
      },
    ],
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((page) => page.slug === slug);
}
