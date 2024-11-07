import { Icon } from "@/components/ui/Icon";
import { trustPoints } from "@/lib/data/home";

export function TrustRow() {
  return (
    <section className="trust" aria-label="Why homeowners trust us">
      <div className="wrap trust-grid">
        {trustPoints.map((point) => (
          <div className="trust-item" key={point.title}>
            <span className="ico">
              <Icon name={point.icon} />
            </span>
            <div>
              <strong>{point.title}</strong>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
