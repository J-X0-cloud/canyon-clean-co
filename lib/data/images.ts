import type { SiteImage } from "@/types/content";

export const images = {
  heroLivingRoom: {
    src: "/images/hero-living-room.webp",
    width: 1440,
    height: 706,
    alt: "Bright, freshly mopped living room with a sofa, armchair and plant",
  },
  recurringSofa: { src: "/images/recurring-sofa.webp", width: 1200, height: 638, alt: "" },
  deepRailing: { src: "/images/deep-railing.webp", width: 1024, height: 680, alt: "" },
  moveOutSupplies: { src: "/images/move-out-supplies.webp", width: 1080, height: 721, alt: "" },
  upholstery: { src: "/images/upholstery.webp", width: 1080, height: 720, alt: "" },
  lowScentProducts: {
    src: "/images/low-scent-products.webp",
    width: 1024,
    height: 682,
    alt: "Plant-based cleaning products, brushes and sponges laid out on a table",
  },
  carpetDetail: {
    src: "/images/carpet-detail.webp",
    width: 1080,
    height: 720,
    alt: "Cleaner in pink gloves scrubbing a light gray carpet by hand",
  },
} satisfies Record<string, SiteImage>;
