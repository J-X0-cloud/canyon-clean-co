import { areas, moreAreas } from "@/lib/data/areas";
import { site } from "@/lib/site";

/** schema.org HouseCleaning markup for local search results. */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HouseCleaning",
    name: site.name,
    url: site.url,
    telephone: "+1-818-555-0163",
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sherman Oaks",
      addressRegion: "CA",
      postalCode: "91403",
      addressCountry: "US",
    },
    areaServed: [...areas.map((area) => area.name), ...moreAreas],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
