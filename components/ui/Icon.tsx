import type { ReactNode, SVGProps } from "react";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
} as const;

const icons = {
  check: {
    viewBox: "0 0 20 20",
    body: (
      <path
        d="M4.5 10.5l3.4 3.4 7.6-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  phone: {
    viewBox: "0 0 24 24",
    body: (
      <path
        d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"
        fill="currentColor"
      />
    ),
  },
  shield: {
    viewBox: "0 0 24 24",
    body: (
      <>
        <path
          d="M12 2.5l8 3v6.2c0 4.8-3.4 8.7-8 9.8-4.6-1.1-8-5-8-9.8V5.5z"
          {...stroke}
          strokeLinejoin="round"
        />
        <path d="M8.5 12l2.5 2.5 4.5-5" {...stroke} strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  leaf: {
    viewBox: "0 0 24 24",
    body: (
      <path
        d="M20 4C9 4 4 9.5 4 16c0 1.4.3 2.7.8 4 1-4.6 4.2-8.4 9.2-10.5C9.8 12.3 7.4 15.8 6.5 20c9.6 0 13.5-6.7 13.5-16z"
        {...stroke}
        strokeLinejoin="round"
      />
    ),
  },
  repeat: {
    viewBox: "0 0 24 24",
    body: (
      <path
        d="M17 3l3 3-3 3M4 12V9.5A3.5 3.5 0 017.5 6H20M7 21l-3-3 3-3M20 12v2.5a3.5 3.5 0 01-3.5 3.5H4"
        {...stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  user: {
    viewBox: "0 0 24 24",
    body: (
      <>
        <circle cx="12" cy="8" r="4" {...stroke} />
        <path d="M4 21c.8-4 4-6 8-6s7.2 2 8 6" {...stroke} strokeLinecap="round" />
      </>
    ),
  },
  clock: {
    viewBox: "0 0 24 24",
    body: (
      <>
        <circle cx="12" cy="12" r="9" {...stroke} />
        <path d="M12 7v5l3.5 2" {...stroke} strokeLinecap="round" />
      </>
    ),
  },
  pin: {
    viewBox: "0 0 24 24",
    body: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" {...stroke} />
        <circle cx="12" cy="9.5" r="2.5" fill="currentColor" />
      </>
    ),
  },
  mail: {
    viewBox: "0 0 24 24",
    body: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" {...stroke} />
        <path d="M4 7l8 6 8-6" {...stroke} strokeLinecap="round" />
      </>
    ),
  },
  spark: {
    viewBox: "0 0 24 24",
    body: <path d="M12 2.5l2 6.5 6.5 2-6.5 2-2 6.5-2-6.5-6.5-2 6.5-2z" fill="currentColor" />,
  },
  arrow: {
    viewBox: "0 0 20 20",
    body: (
      <path
        d="M4 10h11M11 5.5L15.5 10 11 14.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  star: {
    viewBox: "0 0 20 20",
    body: (
      <path
        d="M10 1.8l2.5 5.3 5.7.7-4.2 4 1.1 5.7L10 14.7l-5.1 2.8 1.1-5.7-4.2-4 5.7-.7z"
        fill="currentColor"
      />
    ),
  },
  home: {
    viewBox: "0 0 24 24",
    body: (
      <path
        d="M3.5 11L12 4l8.5 7M6 9.5V20h12V9.5"
        {...stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  box: {
    viewBox: "0 0 24 24",
    body: (
      <path
        d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z M3.5 7.5L12 12l8.5-4.5M12 12v9"
        {...stroke}
        strokeLinejoin="round"
      />
    ),
  },
} satisfies Record<string, { viewBox: string; body: ReactNode }>;

export type IconName = keyof typeof icons;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "viewBox"> {
  name: IconName;
}

/** Inline SVG icon. Decorative by default; pass aria-label to expose it. */
export function Icon({ name, ...props }: IconProps) {
  const icon = icons[name];
  const labelled = props["aria-label"] !== undefined;
  return (
    <svg viewBox={icon.viewBox} aria-hidden={labelled ? undefined : true} {...props}>
      {icon.body}
    </svg>
  );
}
