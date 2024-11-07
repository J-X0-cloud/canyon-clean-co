import { AreaCard } from "@/components/shared/AreaCard";
import { areas, moreAreas } from "@/lib/data/areas";
import { CoverageMap } from "./CoverageMap";

export function AreasSection() {
  return (
    <section className="section section-mist areas" id="areas">
      <div className="wrap areas-grid">
        <div>
          <p className="kicker">Service areas</p>
          <h2>Local crews across the Valley and the hills</h2>
          <p className="muted">
            Our crews are based in Sherman Oaks and cover the neighborhoods along the 101 and the
            134, from Encino to Burbank. Enter your ZIP in the quote and we&rsquo;ll confirm
            coverage instantly.
          </p>
          <div className="area-cards">
            {areas.map((area) => (
              <AreaCard
                key={area.slug}
                href={`/house-cleaning/${area.slug}`}
                title={area.name}
                subtitle="See local details"
              />
            ))}
          </div>
          <p className="also">Also serving</p>
          <ul className="chips">
            {moreAreas.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <CoverageMap />
      </div>
    </section>
  );
}
