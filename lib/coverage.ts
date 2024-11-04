/**
 * ZIP codes our crews currently cover. Used by the quote API to flag requests
 * that fall outside the service area so the office can follow up by phone.
 */
const SERVED_ZIPS: Record<string, string> = {
  "91403": "Sherman Oaks",
  "91423": "Sherman Oaks",
  "91413": "Sherman Oaks",
  "91604": "Studio City",
  "91602": "Studio City / Toluca Lake",
  "91316": "Encino",
  "91436": "Encino",
  "91501": "Burbank",
  "91502": "Burbank",
  "91504": "Burbank",
  "91505": "Burbank",
  "91506": "Burbank",
  "91607": "Valley Village",
  "91601": "North Hollywood",
  "91605": "North Hollywood",
  "91606": "North Hollywood",
  "91401": "Van Nuys / Valley Glen",
  "91405": "Van Nuys",
  "91406": "Van Nuys",
  "91411": "Van Nuys",
  "91356": "Tarzana",
  "91364": "Woodland Hills",
  "91367": "Woodland Hills",
};

export interface CoverageResult {
  served: boolean;
  neighborhood: string | null;
}

export function checkCoverage(zip: string | undefined): CoverageResult {
  const normalized = zip?.trim().slice(0, 5) ?? "";
  const neighborhood = SERVED_ZIPS[normalized] ?? null;
  return { served: neighborhood !== null, neighborhood };
}
