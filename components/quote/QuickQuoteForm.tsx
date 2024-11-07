import clsx from "clsx";
import Form from "next/form";
import { Icon } from "@/components/ui/Icon";

interface QuickQuoteFormProps {
  heading?: string;
  compact?: boolean;
  defaultZip?: string;
}

const cleanTypes = [
  { value: "standard", label: "Recurring" },
  { value: "deep", label: "Deep" },
  { value: "move", label: "Move-out" },
] as const;

/**
 * Compact entry point to the quote page. It's a plain GET form, so it works
 * before hydration; next/form upgrades it to a client-side navigation.
 */
export function QuickQuoteForm({
  heading = "Get your price in 60 seconds",
  compact = false,
  defaultZip,
}: QuickQuoteFormProps) {
  return (
    <Form className={clsx("qq", compact && "qq-compact")} action="/quote">
      <div className="qq-head">
        <span className="qq-dot" />
        <strong>{heading}</strong>
      </div>
      <fieldset className="qq-type">
        <legend className="sr">Cleaning type</legend>
        {cleanTypes.map((type, index) => (
          <label key={type.value}>
            <input type="radio" name="type" value={type.value} defaultChecked={index === 0} />
            <span>{type.label}</span>
          </label>
        ))}
      </fieldset>
      <div className="qq-row">
        <label>
          Bedrooms
          <select name="beds" defaultValue="2">
            <option value="1">1 bed</option>
            <option value="2">2 beds</option>
            <option value="3">3 beds</option>
            <option value="4">4 beds</option>
            <option value="5">5+ beds</option>
          </select>
        </label>
        <label>
          Bathrooms
          <select name="baths" defaultValue="2">
            <option value="1">1 bath</option>
            <option value="2">2 baths</option>
            <option value="3">3 baths</option>
            <option value="4">4+ baths</option>
          </select>
        </label>
        <label>
          ZIP code
          <input
            name="zip"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            placeholder="91403"
            defaultValue={defaultZip}
          />
        </label>
      </div>
      <button className="btn btn-primary btn-block" type="submit">
        See my price <Icon name="arrow" />
      </button>
      <p className="qq-note">No card needed. Flat price before you book.</p>
    </Form>
  );
}
