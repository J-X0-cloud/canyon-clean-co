"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import {
  arrivalWindowOptions,
  bathroomOptions,
  bedroomOptions,
  cleanTypeOptions,
  frequencyOptions,
  homeSizeOptions,
} from "@/lib/data/quote-options";
import { formatMoney } from "@/lib/format";
import { QUOTE_ADD_ONS, calculateQuote } from "@/lib/pricing";
import { site } from "@/lib/site";
import type { AddOnId, QuoteOptions } from "@/types/quote";
import { EstimateCard } from "./EstimateCard";
import { FieldError } from "./FieldError";
import { QuoteStep } from "./QuoteStep";
import { useQuoteSubmission } from "./useQuoteSubmission";

interface QuoteCalculatorProps {
  initialOptions: QuoteOptions;
  initialZip?: string;
}

export function QuoteCalculator({ initialOptions, initialZip = "" }: QuoteCalculatorProps) {
  const [options, setOptions] = useState<QuoteOptions>(initialOptions);
  const quote = useMemo(() => calculateQuote(options), [options]);
  const { state, submit, fieldErrors } = useQuoteSubmission();
  const sentRef = useRef<HTMLDivElement>(null);

  const isRecurringType = options.type === "standard";
  const sent = state.status === "sent";

  useEffect(() => {
    if (sent) sentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [sent]);

  const update = <K extends keyof QuoteOptions>(key: K, value: QuoteOptions[K]) =>
    setOptions((current) => ({ ...current, [key]: value }));

  const toggleAddOn = (id: AddOnId, checked: boolean) =>
    setOptions((current) => ({
      ...current,
      addOns: checked ? [...current.addOns, id] : current.addOns.filter((a) => a !== id),
    }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = (name: string) => String(form.get(name) ?? "");

    await submit({
      ...options,
      frequency: quote.frequency,
      size: text("size"),
      date: text("date"),
      window: text("window"),
      address: text("address"),
      zip: text("zip"),
      name: text("name"),
      phone: text("phone"),
      email: text("email"),
      notes: text("notes"),
    });
  }

  const errorProps = (name: string) =>
    fieldErrors[name] ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` } : {};

  return (
    <div className="wrap quote-grid">
      <form className="quote-form" onSubmit={handleSubmit}>
        <QuoteStep step={1} title="What kind of clean?">
          <div className="rc-grid">
            {cleanTypeOptions.map((option) => (
              <label className="rc" key={option.value}>
                <input
                  type="radio"
                  name="type"
                  value={option.value}
                  checked={options.type === option.value}
                  onChange={() => update("type", option.value)}
                />
                <span className="rc-box">
                  <span className="rc-ico">
                    <Icon name={option.icon} />
                  </span>
                  <strong>{option.title}</strong>
                  <small>{option.subtitle}</small>
                </span>
              </label>
            ))}
          </div>
        </QuoteStep>

        <QuoteStep step={2} title="Tell us about your home">
          <div className="field-row three">
            <label>
              Bedrooms
              <select
                name="beds"
                value={options.beds}
                onChange={(e) => update("beds", Number(e.target.value))}
              >
                {bedroomOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Bathrooms
              <select
                name="baths"
                value={options.baths}
                onChange={(e) => update("baths", Number(e.target.value))}
              >
                {bathroomOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Approx. size
              <select name="size" defaultValue="1000-1800">
                {homeSizeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              name="pets"
              checked={options.pets}
              onChange={(e) => update("pets", e.target.checked)}
            />
            <span className="tg" />
            We have pets that shed
          </label>
        </QuoteStep>

        <QuoteStep step={3} title="How often?" id="freq-set" disabled={!isRecurringType}>
          <div className="seg">
            {frequencyOptions.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name="freq"
                  value={option.value}
                  checked={options.frequency === option.value}
                  onChange={() => update("frequency", option.value)}
                />
                <span>
                  {option.label}
                  <small>{option.badge}</small>
                </span>
              </label>
            ))}
          </div>
          <p className="hint">
            Frequency applies to recurring cleans. Deep and move-out cleans are priced as one-time
            visits.
          </p>
        </QuoteStep>

        <QuoteStep step={4} title="Any extras?">
          <div className="chk-grid">
            {QUOTE_ADD_ONS.map((addOn) => (
              <label className="chk" key={addOn.id}>
                <input
                  type="checkbox"
                  name="addon"
                  value={addOn.id}
                  checked={options.addOns.includes(addOn.id)}
                  onChange={(e) => toggleAddOn(addOn.id, e.target.checked)}
                />
                <span>{addOn.label}</span>
                <em>+{formatMoney(addOn.price)}</em>
              </label>
            ))}
          </div>
        </QuoteStep>

        <QuoteStep step={5} title="When and where?">
          <div className="field-row">
            <label>
              Preferred date
              <input type="date" name="date" {...errorProps("date")} />
              <FieldError id="date-error" messages={fieldErrors.date} />
            </label>
            <label>
              Arrival window
              <select name="window" defaultValue="morning">
                {arrivalWindowOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="field-row">
            <label>
              Street address
              <input name="address" autoComplete="street-address" placeholder="Street and unit" />
            </label>
            <label>
              ZIP code
              <input
                name="zip"
                inputMode="numeric"
                maxLength={5}
                placeholder="91403"
                autoComplete="postal-code"
                defaultValue={initialZip}
                {...errorProps("zip")}
              />
              <FieldError id="zip-error" messages={fieldErrors.zip} />
            </label>
          </div>
        </QuoteStep>

        <QuoteStep step={6} title="How do we reach you?">
          <div className="field-row">
            <label>
              Full name
              <input name="name" autoComplete="name" required {...errorProps("name")} />
              <FieldError id="name-error" messages={fieldErrors.name} />
            </label>
            <label>
              Mobile phone
              <input name="phone" type="tel" autoComplete="tel" required {...errorProps("phone")} />
              <FieldError id="phone-error" messages={fieldErrors.phone} />
            </label>
          </div>
          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              {...errorProps("email")}
            />
            <FieldError id="email-error" messages={fieldErrors.email} />
          </label>
          <label>
            Anything we should know?
            <textarea
              name="notes"
              rows={3}
              placeholder="Gate code, parking, rooms to skip, surfaces to be careful with…"
            />
          </label>
        </QuoteStep>

        <button
          className="btn btn-primary btn-lg"
          type="submit"
          disabled={state.status === "submitting" || sent}
        >
          {state.status === "submitting" ? "Sending…" : "Request this time"} <Icon name="arrow" />
        </button>
        <p className="fine">
          We&rsquo;ll text to confirm your crew and arrival window, usually within the hour during
          business hours. Nothing is charged until after your clean.
        </p>

        {state.status === "error" ? (
          <p className="form-error" role="alert">
            {state.message}
          </p>
        ) : null}

        {sent ? (
          <div className="sent" role="status" ref={sentRef}>
            <strong>Request received, thank you!</strong>
            <p>
              We&rsquo;ll text you shortly to confirm your crew and time. Questions in the meantime?
              Call {site.phone}.
            </p>
          </div>
        ) : null}
      </form>

      <EstimateCard quote={quote} beds={options.beds} baths={options.baths} />
    </div>
  );
}
