import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

interface AreaCardProps {
  href: string;
  title: string;
  subtitle: string;
}

export function AreaCard({ href, title, subtitle }: AreaCardProps) {
  return (
    <Link className="area-card" href={href}>
      <span className="ico">
        <Icon name="pin" />
      </span>
      <span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <Icon name="arrow" />
    </Link>
  );
}
