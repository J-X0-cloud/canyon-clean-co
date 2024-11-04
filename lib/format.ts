/** Whole-dollar currency, the way prices are quoted across the site. */
export function formatMoney(amount: number): string {
  return `$${Math.round(amount)}`;
}

/** "−15%" for a discount rate of 0.15, or an em dash when there is none. */
export function formatDiscount(rate: number): string {
  return rate > 0 ? `−${Math.round(rate * 100)}%` : "—";
}

export function formatCrewHours(hours: number): string {
  return `About ${hours} crew-hours`;
}

/** "Maya R." -> "MR" */
export function initials(name: string): string {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("");
}
