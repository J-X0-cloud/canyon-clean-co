import { describe, expect, it } from "vitest";
import {
  DEFAULT_QUOTE_OPTIONS,
  basePrice,
  calculateQuote,
  effectiveFrequency,
  estimateCrewHours,
} from "./pricing";
import type { QuoteOptions } from "@/types/quote";

const quote = (overrides: Partial<QuoteOptions> = {}) =>
  calculateQuote({ ...DEFAULT_QUOTE_OPTIONS, ...overrides });

describe("basePrice", () => {
  it("adds per-bedroom and per-bathroom rates to the service base", () => {
    expect(basePrice("standard", 2, 2)).toBe(179);
    expect(basePrice("deep", 3, 2)).toBe(349);
    expect(basePrice("move", 1, 1)).toBe(314);
  });

  it("clamps out-of-range room counts to what the form offers", () => {
    expect(basePrice("standard", 0, 0)).toBe(basePrice("standard", 1, 1));
    expect(basePrice("standard", 9, 7)).toBe(basePrice("standard", 5, 4));
  });

  it("treats non-numeric input as the minimum home", () => {
    expect(basePrice("deep", Number.NaN, Number.NaN)).toBe(basePrice("deep", 1, 1));
  });
});

describe("effectiveFrequency", () => {
  it("keeps the chosen frequency for recurring cleans", () => {
    expect(effectiveFrequency("standard", "weekly")).toBe("weekly");
  });

  it("forces deep and move-out cleans to one-time", () => {
    expect(effectiveFrequency("deep", "weekly")).toBe("once");
    expect(effectiveFrequency("move", "biweekly")).toBe("once");
  });
});

describe("calculateQuote", () => {
  it("prices the default 2 bd / 2 ba biweekly clean", () => {
    const result = quote();
    expect(result.basePrice).toBe(179);
    expect(result.discountRate).toBe(0.15);
    expect(result.total).toBe(152);
    expect(result.isRecurring).toBe(true);
  });

  it.each([
    ["weekly", 143],
    ["biweekly", 152],
    ["monthly", 161],
    ["once", 179],
  ] as const)("applies the %s discount", (frequency, total) => {
    expect(quote({ frequency }).total).toBe(total);
  });

  it("ignores frequency discounts on a deep clean", () => {
    const result = quote({ type: "deep", beds: 3, frequency: "weekly" });
    expect(result.frequency).toBe("once");
    expect(result.discountRate).toBe(0);
    expect(result.total).toBe(349);
    expect(result.isRecurring).toBe(false);
  });

  it("adds selected extras before the discount is applied", () => {
    const result = quote({ frequency: "weekly", addOns: ["oven"] });
    expect(result.addOnTotal).toBe(45);
    expect(result.addOnLabels).toEqual(["Inside oven"]);
    // (179 + 45) * 0.8 = 179.2
    expect(result.total).toBe(179);
  });

  it("charges each add-on once even if it is submitted twice", () => {
    const result = quote({ type: "move", addOns: ["fridge", "fridge", "cabinets"] });
    expect(result.addOnTotal).toBe(80);
    expect(result.addOnLabels).toEqual(["Inside fridge", "Inside cabinets"]);
  });

  it("adds the pet hair surcharge and lists it with the extras", () => {
    const result = quote({ frequency: "once", pets: true });
    expect(result.addOnTotal).toBe(15);
    expect(result.addOnLabels).toContain("Pet hair detail (light)");
    expect(result.total).toBe(194);
  });

  it("prices a fully loaded move-out clean", () => {
    const result = quote({
      type: "move",
      beds: 4,
      baths: 3,
      addOns: ["oven", "fridge", "cabinets", "blinds", "windows", "laundry"],
      pets: true,
    });
    expect(result.basePrice).toBe(239 + 35 * 4 + 40 * 3);
    expect(result.addOnTotal).toBe(45 + 40 + 40 + 35 + 48 + 30 + 15);
    expect(result.total).toBe(752);
  });
});

describe("estimateCrewHours", () => {
  it("rounds to the nearest half hour", () => {
    expect(estimateCrewHours("standard", 2, 2)).toBe(3);
    expect(estimateCrewHours("deep", 3, 2)).toBe(5);
    expect(estimateCrewHours("move", 1, 1)).toBe(4.5);
  });

  it("grows with the size of the home", () => {
    expect(estimateCrewHours("standard", 5, 4)).toBeGreaterThan(
      estimateCrewHours("standard", 1, 1),
    );
  });
});
