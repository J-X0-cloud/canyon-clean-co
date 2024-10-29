import { Icon } from "./Icon";

export function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }, (_, i) => (
        <Icon key={i} name="star" />
      ))}
    </span>
  );
}
