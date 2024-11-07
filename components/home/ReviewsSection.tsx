import { ReviewCard } from "@/components/shared/ReviewCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredReviews } from "@/lib/data/reviews";

export function ReviewsSection() {
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <SectionHeading kicker="Reviews" title="Neighbors who stopped cleaning on Saturdays" />
        <div className="reviews">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
