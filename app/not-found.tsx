import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="quote-hero">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>
          This page took the <em>day off</em>
        </h1>
        <p className="lede">
          The link may be old or mistyped. Your flat price is still one click away.
        </p>
        <div className="row-actions">
          <ButtonLink href="/quote">
            Get an instant quote <Icon name="arrow" />
          </ButtonLink>
          <ButtonLink href="/" variant="outline">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
