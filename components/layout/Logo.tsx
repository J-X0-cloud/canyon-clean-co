import clsx from "clsx";
import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#2272c3" />
      <path d="M6 29l8.5-10 5 6 4.5-5.5L34 29z" fill="#fff" opacity=".95" />
      <path d="M6 29l8.5-10 3.2 3.8L12.6 29z" fill="#cfe4f7" />
      <circle cx="29" cy="11.5" r="4" fill="#f29a5b" />
      <path
        d="M29 4.2v2.2M29 16.6v2.2M21.7 11.5h2.2M34.1 11.5h2.2"
        stroke="#f29a5b"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link
      className={clsx("brand", invert && "brand-invert")}
      href="/"
      aria-label={`${site.name} home`}
    >
      <LogoMark />
      <span className="brand-text">
        Canyon Clean<small>Co.</small>
      </span>
    </Link>
  );
}
