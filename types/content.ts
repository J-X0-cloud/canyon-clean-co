import type { IconName } from "@/components/ui/Icon";

export interface NavLink {
  href: string;
  label: string;
  /** Section key used to highlight the active nav item. */
  key: "services" | "pricing" | "areas" | "reviews" | "faq";
}

export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export type ServiceKey = "recurring" | "deep" | "move";

export interface Service {
  key: ServiceKey;
  title: string;
  image: SiteImage;
  /** Short price label shown on cards, e.g. "from $139". */
  priceFrom: string;
  summary: string;
  highlights: string[];
  detail: ServiceDetail;
}

export interface ServiceDetail {
  title: string;
  priceLabel: string;
  description: string;
  checklist: string[];
  bestFor: string;
  ctaLabel: string;
}

export interface AddOnCard {
  title: string;
  price: string;
  description: string;
}

export interface TrustPoint {
  icon: IconName;
  title: string;
  description: string;
}

export interface Review {
  name: string;
  area: string;
  service: string;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface RoomChecklist {
  room: string;
  items: string[];
}

export interface Plan {
  name: string;
  price: number;
  savings: string;
  features: string[];
  frequency: "monthly" | "biweekly" | "weekly";
  cta: string;
  featured?: boolean;
}

export interface Step {
  title: string;
  description: string;
}

export interface LocalPoint {
  title: string;
  description: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  /** ZIP used to pre-fill the quote form. */
  zip: string;
  /** Human-readable list of ZIPs covered, e.g. "91403, 91423 and 91413". */
  zipList: string;
  lede: string;
  intro: string;
  image: SiteImage;
  points: LocalPoint[];
  review: Review;
  faqs: Faq[];
  nearby: string[];
}
