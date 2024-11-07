import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

export function ServiceMinis({ areaName }: { areaName: string }) {
  return (
    <section className="section section-mist">
      <div className="wrap">
        <SectionHeading
          kicker={`Services in ${areaName}`}
          title="Everything we offer, available here"
        />
        <div className="svc-minis">
          {services.map((service) => (
            <Link className="svc-mini" href={`/services#${service.key}`} key={service.key}>
              <Image src={service.image.src} alt="" width={92} height={76} sizes="92px" />
              <span>
                <strong>{service.title}</strong>
                <small>{service.priceFrom}</small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
