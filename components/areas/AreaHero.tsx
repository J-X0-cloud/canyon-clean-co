import Image from "next/image";
import { FloatCard } from "@/components/shared/FloatCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Hills } from "@/components/ui/Hills";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import type { ServiceArea } from "@/types/content";

const miniTrust = ["Local crew", "Flat pricing", "24-hr re-clean promise"];

export function AreaHero({ area }: { area: ServiceArea }) {
  return (
    <section className="area-hero">
      <div className="wrap area-hero-grid">
        <div>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service areas", href: "/#areas" },
              { label: area.name },
            ]}
          />
          <p className="eyebrow">
            <Icon name="pin" />
            Serving {area.zipList}
          </p>
          <h1>
            House cleaning in <em>{area.name}</em>
          </h1>
          <p className="lede">{area.lede}</p>
          <div className="area-hero-actions">
            <ButtonLink href={{ pathname: "/quote", query: { zip: area.zip } }}>
              Get my {area.name} price <Icon name="arrow" />
            </ButtonLink>
            <ButtonLink href={site.tel} variant="text">
              <Icon name="phone" />
              {site.phone}
            </ButtonLink>
          </div>
          <ul className="mini-trust">
            {miniTrust.map((item) => (
              <li key={item}>
                <Icon name="check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="area-hero-media">
          <Image
            src={area.image.src}
            alt={area.image.alt}
            width={area.image.width}
            height={area.image.height}
            sizes="(max-width: 980px) 100vw, 45vw"
            priority
          />
          <FloatCard
            position="bottom"
            leading={
              <span className="fc-ico">
                <Icon name="pin" />
              </span>
            }
          >
            <small>Crew availability in {area.name}</small>
            <strong>Openings this week</strong>
          </FloatCard>
        </div>
      </div>
      <Hills />
    </section>
  );
}
