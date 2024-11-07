import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { footerColumns, legalLinks } from "@/lib/data/navigation";
import { mailto, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo invert />
            <p>{site.footerBlurb}</p>
            <p className="footer-contact">
              <a href={site.tel}>
                <Icon name="phone" />
                {site.phone}
              </a>
              <a href={mailto}>
                <Icon name="mail" />
                {site.email}
              </a>
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-base">
          <p>
            © {year} {site.name} · Bonded &amp; insured house cleaning · {site.city}
          </p>
          <p>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
