import type { NavLink } from "@/types/content";
import { mailto } from "@/lib/site";
import { areas } from "./areas";
import { legalPages } from "./legal";

export const mainNav: NavLink[] = [
  { href: "/services", label: "Services", key: "services" },
  { href: "/#pricing", label: "Pricing", key: "pricing" },
  { href: "/#areas", label: "Service areas", key: "areas" },
  { href: "/#reviews", label: "Reviews", key: "reviews" },
  { href: "/#faq", label: "FAQ", key: "faq" },
];

export interface FooterColumn {
  title: string;
  links: { href: string; label: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { href: "/services#recurring", label: "Recurring cleaning" },
      { href: "/services#deep", label: "Deep cleaning" },
      { href: "/services#move", label: "Move-in / move-out" },
      { href: "/services#add-ons", label: "Add-ons" },
    ],
  },
  {
    title: "Service areas",
    links: [
      ...areas.map((area) => ({ href: `/house-cleaning/${area.slug}`, label: area.name })),
      { href: "/#areas", label: "All neighborhoods" },
    ],
  },
  {
    title: "Book",
    links: [
      { href: "/quote", label: "Instant quote" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
      { href: mailto, label: "Email us" },
    ],
  },
];

export const legalLinks = legalPages.map((page) => ({
  href: `/legal/${page.slug}`,
  label: page.title,
}));
