import Image from "next/image";
import Link from "next/link";
import { CheckList } from "@/components/ui/CheckList";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

export function ServiceCards() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHeading kicker="Services" title="Three ways to get your weekends back">
          Pick a one-time reset or a recurring plan. Every clean follows a written, room-by-room
          checklist, and every price is flat and shown before you book.
        </SectionHeading>
        <div className="svc-grid">
          {services.map((service) => (
            <article className="svc-card" key={service.key}>
              <div className="svc-img">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 400px"
                />
                <span className="price-tag">{service.priceFrom}</span>
              </div>
              <div className="svc-body">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <CheckList items={service.highlights} />
                <Link className="link-arrow" href={`/services#${service.key}`}>
                  What&rsquo;s included <Icon name="arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
