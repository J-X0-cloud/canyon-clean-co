"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { NavLinks } from "./NavLinks";

/**
 * Hamburger menu built on <details> so it still opens without JavaScript.
 * On the client it also closes itself after navigation.
 */
export function MobileNav() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    ref.current?.removeAttribute("open");
  }, [pathname]);

  const close = () => ref.current?.removeAttribute("open");

  return (
    <details className="mnav" ref={ref}>
      <summary aria-label="Open menu">
        <span />
        <span />
        <span />
      </summary>
      <div className="mnav-panel">
        <NavLinks onNavigate={close} />
        <Link href="/quote" onClick={close}>
          Get an instant quote
        </Link>
        <a className="mnav-phone" href={site.tel}>
          <Icon name="phone" />
          Call {site.phone}
        </a>
      </div>
    </details>
  );
}
