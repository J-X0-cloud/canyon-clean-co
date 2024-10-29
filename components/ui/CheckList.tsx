import clsx from "clsx";
import { Icon } from "./Icon";

interface CheckListProps {
  items: readonly string[];
  variant?: "small" | "two-col";
  className?: string;
}

export function CheckList({ items, variant, className }: CheckListProps) {
  return (
    <ul className={clsx("checks", variant, className)}>
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
