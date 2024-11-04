export const site = {
  name: "Canyon Clean Co.",
  shortName: "Canyon Clean",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://canyonclean.com",
  phone: "(818) 555-0163",
  tel: "tel:+18185550163",
  email: "hello@canyonclean.com",
  hours: "Mon–Sat, 7am–7pm",
  city: "Los Angeles, CA",
  themeColor: "#2272c3",
  serviceAreaLong: "Serving Sherman Oaks, Studio City, Encino, Burbank & the East Valley",
  serviceAreaShort: "Home cleaning across the San Fernando Valley",
  footerBlurb:
    "Recurring, deep and move-out house cleaning for homes across the San Fernando Valley. Same crew, same checklist, every visit.",
} as const;

export const mailto = `mailto:${site.email}`;
