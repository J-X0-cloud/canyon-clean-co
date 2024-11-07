import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ServiceArea } from "@/types/content";

export function LocalPoints({ area }: { area: ServiceArea }) {
  return (
    <section className="section">
      <div className="wrap local">
        <SectionHeading kicker="Local know-how" title={`Cleaning built around ${area.name} homes`}>
          {area.intro}
        </SectionHeading>
        <div className="local-grid">
          {area.points.map((point) => (
            <div className="local-pt" key={point.title}>
              <span className="ico">
                <Icon name="home" />
              </span>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
