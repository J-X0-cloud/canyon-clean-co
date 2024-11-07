"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/data/navigation";
import type { NavLink } from "@/types/content";

function activeKey(pathname: string): NavLink["key"] | null {
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/house-cleaning")) return "areas";
  return null;
}

interface NavLinksProps {
  onNavigate?: () => void;
}

export function NavLinks({ onNavigate }: NavLinksProps) {
  const current = activeKey(usePathname());

  return (
    <>
      {mainNav.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          aria-current={link.key === current ? "page" : undefined}
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
