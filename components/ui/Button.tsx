import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "sun" | "outline" | "ghost-light" | "text";
type Size = "sm" | "md" | "lg";

interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
  block?: boolean;
}

function buttonClass(
  { variant = "primary", size = "md", block }: ButtonStyleProps,
  extra?: string,
) {
  return clsx("btn", `btn-${variant}`, size !== "md" && `btn-${size}`, block && "btn-block", extra);
}

type ButtonLinkProps = ButtonStyleProps &
  Omit<ComponentProps<typeof Link>, "className"> & {
    className?: string;
    children: ReactNode;
  };

/**
 * Link styled as a button. `tel:` and `mailto:` hrefs render a plain anchor so
 * Next.js doesn't try to prefetch them.
 */
export function ButtonLink({
  variant,
  size,
  block,
  className,
  href,
  children,
  ...rest
}: ButtonLinkProps) {
  const cls = buttonClass({ variant, size, block }, className);
  if (typeof href === "string" && /^(tel|mailto):/.test(href)) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonStyleProps & ComponentProps<"button">;

export function Button({ variant, size, block, className, type = "button", ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClass({ variant, size, block }, className)} {...rest} />
  );
}
