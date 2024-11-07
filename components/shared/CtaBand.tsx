import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

interface CtaBandProps {
  title?: string;
  text?: string;
}

export function CtaBand({
  title = "Ready for a cleaner week?",
  text = "Get a flat price in about a minute, pick a time that suits you, and come home to a house that feels like yours again.",
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="wrap cta-in">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <ButtonLink href="/quote" variant="sun">
            Get an instant quote <Icon name="arrow" />
          </ButtonLink>
          <ButtonLink href={site.tel} variant="ghost-light">
            <Icon name="phone" />
            {site.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
