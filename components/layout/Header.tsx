import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-in">
        <Logo />
        <nav className="main-nav" aria-label="Main">
          <NavLinks />
        </nav>
        <div className="header-cta">
          <a className="header-phone" href={site.tel}>
            <Icon name="phone" />
            <span>{site.phone}</span>
          </a>
          <ButtonLink href="/quote" size="sm">
            Instant quote
          </ButtonLink>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
