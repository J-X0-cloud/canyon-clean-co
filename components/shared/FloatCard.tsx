import clsx from "clsx";
import type { ReactNode } from "react";

interface FloatCardProps {
  position: "top" | "bottom";
  leading: ReactNode;
  children: ReactNode;
}

/** Small white card that overlaps the corner of a hero photo. */
export function FloatCard({ position, leading, children }: FloatCardProps) {
  return (
    <div className={clsx("float-card", position === "top" ? "fc-top" : "fc-bottom")}>
      {leading}
      <div>{children}</div>
    </div>
  );
}
