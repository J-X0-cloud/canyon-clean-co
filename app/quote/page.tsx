import type { Metadata } from "next";
import { QuoteCalculator } from "@/components/quote/QuoteCalculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { parseQuotePrefill } from "@/lib/quote-schema";

export const metadata: Metadata = {
  title: "Instant House Cleaning Quote",
  description:
    "Get a flat, instant price for recurring, deep or move-out house cleaning in Sherman Oaks, Studio City, Encino and Burbank, then request a time online.",
};

interface QuotePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const prefill = parseQuotePrefill(await searchParams);

  return (
    <>
      <section className="quote-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Instant quote" }]} />
          <h1>
            Your flat price, <em>right now</em>
          </h1>
          <p className="lede">
            Answer a few questions about your home. Your estimate updates as you go, and it&rsquo;s
            the price you pay. No card needed to request a time.
          </p>
        </div>
      </section>
      <section className="quote-wrap">
        {/* Keyed so a new quick-quote submission resets the calculator. */}
        <QuoteCalculator
          key={JSON.stringify(prefill)}
          initialOptions={prefill.options}
          initialZip={prefill.zip}
        />
      </section>
    </>
  );
}
