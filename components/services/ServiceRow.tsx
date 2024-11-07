import clsx from "clsx";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Icon } from "@/components/ui/Icon";
import { quoteTypeForService } from "@/lib/data/services";
import { site } from "@/lib/site";
import type { Service } from "@/types/content";

interface ServiceRowProps {
  service: Service;
  flip?: boolean;
}

export function ServiceRow({ service, flip = false }: ServiceRowProps) {
  const { detail, image } = service;

  return (
    <section className={clsx("svc-row", flip && "flip")} id={service.key}>
      <div className="svc-row-media">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 980px) 100vw, 50vw"
        />
      </div>
      <div className="svc-row-copy">
        <p className="kicker">{detail.priceLabel}</p>
        <h2>{detail.title}</h2>
        <p>{detail.description}</p>
        <CheckList items={detail.checklist} variant="two-col" />
        <p className="best">
          <Icon name="spark" />
          <span>{detail.bestFor}</span>
        </p>
        <div className="row-actions">
          <ButtonLink
            href={{ pathname: "/quote", query: { type: quoteTypeForService[service.key] } }}
          >
            {detail.ctaLabel}
          </ButtonLink>
          <ButtonLink href={site.tel} variant="text">
            <Icon name="phone" />
            Or call us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
