import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Hills } from "@/components/ui/Hills";

const jumpLinks = [
  { href: "#recurring", label: "Recurring" },
  { href: "#deep", label: "Deep" },
  { href: "#move", label: "Move-in / out" },
  { href: "#add-ons", label: "Add-ons" },
];

export function ServicesHero() {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-in">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <h1>
          Cleaning services, <em>priced up front</em>
        </h1>
        <p className="lede">
          Every visit follows a written checklist and a flat price you see before booking.
          Here&rsquo;s exactly what each service covers.
        </p>
        <div className="jump">
          {jumpLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <Hills />
    </section>
  );
}
