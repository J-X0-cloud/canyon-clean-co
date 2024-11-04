import { z } from "zod";
import { BATH_RANGE, BED_RANGE, DEFAULT_QUOTE_OPTIONS } from "@/lib/pricing";
import type { QuoteOptions } from "@/types/quote";

export const cleanTypeSchema = z.enum(["standard", "deep", "move"]);
export const frequencySchema = z.enum(["weekly", "biweekly", "monthly", "once"]);
export const addOnSchema = z.enum(["oven", "fridge", "cabinets", "blinds", "windows", "laundry"]);
export const arrivalWindowSchema = z.enum(["morning", "afternoon", "flexible"]);
export const homeSizeSchema = z.enum(["under-1000", "1000-1800", "1800-2800", "2800-plus"]);

const zipSchema = z
  .string()
  .trim()
  .regex(/^\d{5}$/, "Enter a 5-digit ZIP code");

export const quoteRequestSchema = z.object({
  type: cleanTypeSchema,
  beds: z.coerce.number().int().min(BED_RANGE.min).max(BED_RANGE.max),
  baths: z.coerce.number().int().min(BATH_RANGE.min).max(BATH_RANGE.max),
  size: homeSizeSchema,
  pets: z.boolean().default(false),
  frequency: frequencySchema,
  addOns: z.array(addOnSchema).max(6).default([]),
  date: z.iso.date().optional().or(z.literal("")),
  window: arrivalWindowSchema,
  address: z.string().trim().max(200).optional().default(""),
  zip: zipSchema.optional().or(z.literal("")),
  name: z.string().trim().min(2, "Please enter your name").max(120),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s()+.-]{10,20}$/, "Please enter a mobile number we can text"),
  email: z.email("Please enter a valid email").max(200),
  notes: z.string().trim().max(2000).optional().default(""),
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;

/**
 * Quick-quote widgets link to /quote with the basics in the query string
 * (type, beds, baths, zip, freq). Anything invalid falls back to the defaults.
 */
const prefillSchema = z.object({
  type: cleanTypeSchema.catch(DEFAULT_QUOTE_OPTIONS.type),
  beds: z.coerce
    .number()
    .int()
    .min(BED_RANGE.min)
    .max(BED_RANGE.max)
    .catch(DEFAULT_QUOTE_OPTIONS.beds),
  baths: z.coerce
    .number()
    .int()
    .min(BATH_RANGE.min)
    .max(BATH_RANGE.max)
    .catch(DEFAULT_QUOTE_OPTIONS.baths),
  freq: frequencySchema.catch(DEFAULT_QUOTE_OPTIONS.frequency),
  zip: zipSchema.optional().catch(undefined),
});

export interface QuotePrefill {
  options: QuoteOptions;
  zip: string;
}

type SearchParams = Record<string, string | string[] | undefined>;

export function parseQuotePrefill(params: SearchParams): QuotePrefill {
  const first = (key: string) => {
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const parsed = prefillSchema.parse({
    type: first("type"),
    beds: first("beds"),
    baths: first("baths"),
    freq: first("freq"),
    zip: first("zip"),
  });

  return {
    options: {
      ...DEFAULT_QUOTE_OPTIONS,
      type: parsed.type,
      beds: parsed.beds,
      baths: parsed.baths,
      frequency: parsed.freq,
    },
    zip: parsed.zip ?? "",
  };
}
