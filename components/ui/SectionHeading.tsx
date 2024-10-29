import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}

export function SectionHeading({ kicker, title, children, center }: SectionHeadingProps) {
  return (
    <div className={clsx("sec-head", center && "center")}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
