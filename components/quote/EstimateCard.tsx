import { CheckList } from "@/components/ui/CheckList";
import { Icon } from "@/components/ui/Icon";
import { formatCrewHours, formatDiscount, formatMoney } from "@/lib/format";
import { CLEAN_TYPE_NAMES, FREQUENCY_NAMES } from "@/lib/pricing";
import { mailto, site } from "@/lib/site";
import type { QuoteBreakdown } from "@/types/quote";

interface EstimateCardProps {
  quote: QuoteBreakdown;
  beds: number;
  baths: number;
}

const promises = [
  "Flat price, no surprises",
  "Supplies & equipment included",
  "24-hour re-clean promise",
];

export function EstimateCard({ quote, beds, baths }: EstimateCardProps) {
  return (
    <aside className="estimate" aria-live="polite">
      <div className="est-card">
        <p className="est-label">Your estimate</p>
        <p className="est-total">
          <span>{formatMoney(quote.total)}</span>
          <small>{quote.isRecurring ? "per visit" : "one-time price"}</small>
        </p>
        <p className="est-service">
          {CLEAN_TYPE_NAMES[quote.type]} · {beds} bd / {baths} ba
        </p>
        <dl>
          <div>
            <dt>Frequency</dt>
            <dd>{FREQUENCY_NAMES[quote.frequency]}</dd>
          </div>
          <div>
            <dt>Base price</dt>
            <dd>{formatMoney(quote.basePrice)}</dd>
          </div>
          <div>
            <dt>Add-ons</dt>
            <dd>{quote.addOnTotal > 0 ? `+${formatMoney(quote.addOnTotal)}` : "None"}</dd>
          </div>
          <div>
            <dt>Plan discount</dt>
            <dd>{formatDiscount(quote.discountRate)}</dd>
          </div>
        </dl>
        {quote.addOnLabels.length > 0 ? (
          <p className="est-addlist">{quote.addOnLabels.join(", ")}</p>
        ) : null}
        <p className="est-time">
          <Icon name="clock" />
          <span>{formatCrewHours(quote.crewHours)}</span>
        </p>
        <CheckList items={promises} variant="small" />
      </div>
      <div className="est-help">
        <p>Prefer to talk it through?</p>
        <a href={site.tel}>
          <Icon name="phone" />
          {site.phone}
        </a>
        <a href={mailto}>
          <Icon name="mail" />
          {site.email}
        </a>
      </div>
    </aside>
  );
}
