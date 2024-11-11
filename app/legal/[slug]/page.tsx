import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getLegalPage, legalPages } from "@/lib/data/legal";

interface LegalPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const page = getLegalPage((await params).slug);
  return page ? { title: page.title, description: page.intro } : {};
}

export default async function LegalPage({ params }: LegalPageProps) {
  const page = getLegalPage((await params).slug);
  if (!page) notFound();

  return (
    <section className="quote-hero legal">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page.title }]} />
        <h1>{page.title}</h1>
        <p className="lede">{page.intro}</p>
        {page.sections.map((section) => (
          <div className="legal-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
