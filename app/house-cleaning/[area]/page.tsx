import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaHero } from "@/components/areas/AreaHero";
import { LocalPoints } from "@/components/areas/LocalPoints";
import { NearbyAreas } from "@/components/areas/NearbyAreas";
import { ServiceMinis } from "@/components/areas/ServiceMinis";
import { QuickQuoteForm } from "@/components/quote/QuickQuoteForm";
import { CtaBand } from "@/components/shared/CtaBand";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { FaqList } from "@/components/ui/FaqList";
import { areas, getArea } from "@/lib/data/areas";
import { site } from "@/lib/site";

interface AreaPageProps {
  params: Promise<{ area: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const area = getArea((await params).area);
  if (!area) return {};

  return {
    title: `House Cleaning in ${area.name}, CA`,
    description: `Recurring, deep and move-out house cleaning in ${area.name}, Los Angeles (${area.zipList}). Local crews, flat instant quotes and a 24-hour re-clean promise.`,
    alternates: { canonical: `/house-cleaning/${area.slug}` },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const area = getArea((await params).area);
  if (!area) notFound();

  return (
    <>
      <AreaHero area={area} />
      <LocalPoints area={area} />
      <ServiceMinis areaName={area.name} />

      <section className="section">
        <div className="wrap area-split">
          <div className="area-review">
            <ReviewCard review={area.review} />
          </div>
          <div className="area-quote">
            <QuickQuoteForm
              heading={`Price a clean in ${area.name}`}
              compact
              defaultZip={area.zip}
            />
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="wrap faq-grid">
          <div>
            <p className="kicker">{area.name} FAQ</p>
            <h2>Questions from {area.name} neighbors</h2>
            <p className="muted">
              Don&rsquo;t see yours? Call or text <a href={site.tel}>{site.phone}</a>.
            </p>
          </div>
          <FaqList items={area.faqs} />
        </div>
      </section>

      <NearbyAreas area={area} />
      <CtaBand
        title={`Book your ${area.name} clean this week`}
        text="Your flat price takes about a minute. We’ll text to confirm the crew and arrival window."
      />
    </>
  );
}
