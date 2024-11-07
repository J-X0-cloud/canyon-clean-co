import clsx from "clsx";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/lib/data/home";

export function PricingPlans() {
  return (
    <section className="section section-sand" id="pricing">
      <div className="wrap">
        <SectionHeading
          kicker="Pricing"
          title="Simple, flat prices. Better when you repeat."
          center
        >
          Starting prices for a 2-bedroom, 2-bathroom home. Your instant quote adjusts for size,
          add-ons and pets.
        </SectionHeading>
        <div className="plans">
          {plans.map((plan) => (
            <div className={clsx("plan", plan.featured && "plan-featured")} key={plan.frequency}>
              {plan.featured ? <span className="plan-badge">Most popular</span> : null}
              <h3>{plan.name}</h3>
              <p className="plan-price">
                <span>${plan.price}</span>/visit
              </p>
              <p className="plan-save">{plan.savings}</p>
              <CheckList items={plan.features} />
              <ButtonLink
                href={{ pathname: "/quote", query: { type: "standard", freq: plan.frequency } }}
                variant={plan.featured ? "primary" : "outline"}
                block
              >
                {plan.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
        <p className="plans-foot">
          One-time deep cleans start at $259 and move-out cleans at $329.{" "}
          <Link href="/services">Compare all services</Link>.
        </p>
      </div>
    </section>
  );
}
