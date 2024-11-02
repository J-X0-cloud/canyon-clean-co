export type CleanType = "standard" | "deep" | "move";

export type Frequency = "weekly" | "biweekly" | "monthly" | "once";

export type AddOnId = "oven" | "fridge" | "cabinets" | "blinds" | "windows" | "laundry";

export type ArrivalWindow = "morning" | "afternoon" | "flexible";

export type HomeSize = "under-1000" | "1000-1800" | "1800-2800" | "2800-plus";

export interface QuoteOptions {
  type: CleanType;
  beds: number;
  baths: number;
  frequency: Frequency;
  addOns: AddOnId[];
  pets: boolean;
}

export interface QuoteBreakdown {
  type: CleanType;
  /** Frequency actually applied; deep and move-out cleans are always one-time. */
  frequency: Frequency;
  basePrice: number;
  addOnTotal: number;
  addOnLabels: string[];
  discountRate: number;
  total: number;
  crewHours: number;
  isRecurring: boolean;
}
