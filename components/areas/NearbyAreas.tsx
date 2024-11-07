import { AreaCard } from "@/components/shared/AreaCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getNearbyAreas } from "@/lib/data/areas";
import type { ServiceArea } from "@/types/content";

export function NearbyAreas({ area }: { area: ServiceArea }) {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading kicker="Nearby" title="We also clean nearby" />
        <div className="area-cards row">
          {getNearbyAreas(area).map((nearby) => (
            <AreaCard
              key={nearby.slug}
              href={`/house-cleaning/${nearby.slug}`}
              title={nearby.name}
              subtitle={`House cleaning in ${nearby.name}`}
            />
          ))}
          <AreaCard
            href="/#areas"
            title="All service areas"
            subtitle="Burbank, Toluca Lake, Van Nuys & more"
          />
        </div>
      </div>
    </section>
  );
}
