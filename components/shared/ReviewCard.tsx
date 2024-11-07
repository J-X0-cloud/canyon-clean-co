import { Stars } from "@/components/ui/Stars";
import { initials } from "@/lib/format";
import type { Review } from "@/types/content";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="review">
      <Stars />
      <blockquote>&ldquo;{review.text}&rdquo;</blockquote>
      <figcaption>
        <span className="avatar">{initials(review.name)}</span>
        <span>
          <strong>{review.name}</strong>
          <small>
            {review.area} · {review.service}
          </small>
        </span>
      </figcaption>
    </figure>
  );
}
