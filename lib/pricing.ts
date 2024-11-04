import type { AddOnId, CleanType, Frequency, QuoteBreakdown, QuoteOptions } from "@/types/quote";

/**
 * Flat-rate pricing model.
 *
 * Every price is derived from a per-service base plus a per-bedroom and
 * per-bathroom rate. Recurring cleans get a frequency discount; deep and
 * move-out cleans are always priced as a single visit. The same function runs
 * in the browser (live estimate) and in the quote API (authoritative price),
 * so the number a customer sees is the number we store.
 */

interface RateCard {
  base: number;
  perBed: number;
  perBath: number;
  /** Crew-hours before bedrooms and bathrooms are added. */
  baseHours: number;
}

export const RATES: Record<CleanType, RateCard> = {
  standard: { base: 109, perBed: 15, perBath: 20, baseHours: 1.5 },
  deep: { base: 189, perBed: 30, perBath: 35, baseHours: 3 },
  move: { base: 239, perBed: 35, perBath: 40, baseHours: 3.5 },
};

export const HOURS_PER_BED = 0.35;
export const HOURS_PER_BATH = 0.4;

export const FREQUENCY_DISCOUNTS: Record<Frequency, number> = {
  once: 0,
  monthly: 0.1,
  biweekly: 0.15,
  weekly: 0.2,
};

export const PET_SURCHARGE = { price: 15, label: "Pet hair detail (light)" } as const;

export interface QuoteAddOn {
  id: AddOnId;
  label: string;
  price: number;
}

export const QUOTE_ADD_ONS: readonly QuoteAddOn[] = [
  { id: "oven", label: "Inside oven", price: 45 },
  { id: "fridge", label: "Inside fridge", price: 40 },
  { id: "cabinets", label: "Inside cabinets", price: 40 },
  { id: "blinds", label: "Blinds detail", price: 35 },
  { id: "windows", label: "Interior windows (up to 8)", price: 48 },
  { id: "laundry", label: "Laundry & fold (1 load)", price: 30 },
];

export const CLEAN_TYPE_NAMES: Record<CleanType, string> = {
  standard: "Recurring clean",
  deep: "Deep clean",
  move: "Move-in / move-out clean",
};

export const FREQUENCY_NAMES: Record<Frequency, string> = {
  once: "One-time",
  monthly: "Monthly",
  biweekly: "Every 2 weeks",
  weekly: "Weekly",
};

export const BED_RANGE = { min: 1, max: 5 } as const;
export const BATH_RANGE = { min: 1, max: 4 } as const;

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value)));
}

/** Only recurring cleans can repeat; everything else is billed once. */
export function effectiveFrequency(type: CleanType, frequency: Frequency): Frequency {
  return type === "standard" ? frequency : "once";
}

/** Price of the clean itself, before add-ons and discounts. */
export function basePrice(type: CleanType, beds: number, baths: number): number {
  const rate = RATES[type];
  const b = clamp(beds, BED_RANGE.min, BED_RANGE.max);
  const ba = clamp(baths, BATH_RANGE.min, BATH_RANGE.max);
  return rate.base + rate.perBed * b + rate.perBath * ba;
}

/** Estimated crew-hours on site, rounded to the nearest half hour. */
export function estimateCrewHours(type: CleanType, beds: number, baths: number): number {
  const b = clamp(beds, BED_RANGE.min, BED_RANGE.max);
  const ba = clamp(baths, BATH_RANGE.min, BATH_RANGE.max);
  const hours = RATES[type].baseHours + b * HOURS_PER_BED + ba * HOURS_PER_BATH;
  return Math.round(hours * 2) / 2;
}

export function calculateQuote(options: QuoteOptions): QuoteBreakdown {
  const frequency = effectiveFrequency(options.type, options.frequency);
  const base = basePrice(options.type, options.beds, options.baths);

  // De-duplicate so a repeated id can never be charged twice.
  const selected = QUOTE_ADD_ONS.filter((addOn) => options.addOns.includes(addOn.id));
  let addOnTotal = selected.reduce((sum, addOn) => sum + addOn.price, 0);
  const addOnLabels = selected.map((addOn) => addOn.label);

  if (options.pets) {
    addOnTotal += PET_SURCHARGE.price;
    addOnLabels.push(PET_SURCHARGE.label);
  }

  const discountRate = FREQUENCY_DISCOUNTS[frequency];
  const total = Math.round((base + addOnTotal) * (1 - discountRate));

  return {
    type: options.type,
    frequency,
    basePrice: base,
    addOnTotal,
    addOnLabels,
    discountRate,
    total,
    crewHours: estimateCrewHours(options.type, options.beds, options.baths),
    isRecurring: frequency !== "once",
  };
}

export const DEFAULT_QUOTE_OPTIONS: QuoteOptions = {
  type: "standard",
  beds: 2,
  baths: 2,
  frequency: "biweekly",
  addOns: [],
  pets: false,
};
