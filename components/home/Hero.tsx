import Image from "next/image";
import { QuickQuoteForm } from "@/components/quote/QuickQuoteForm";
import { FloatCard } from "@/components/shared/FloatCard";
import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/Stars";
import { images } from "@/lib/data/images";
import { featuredReviews } from "@/lib/data/reviews";
import { initials } from "@/lib/format";

export function Hero() {
  const { heroLivingRoom } = images;

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <Icon name="spark" />
            Home cleaning in the San Fernando Valley
          </p>
          <h1>
            A spotless home, <em>on your schedule.</em>
          </h1>
          <p className="lede">
            Recurring, deep and move-out cleaning for Sherman Oaks, Studio City, Encino, Burbank and
            the neighborhoods in between. Flat, upfront pricing and the same trusted crew every
            visit.
          </p>
          <QuickQuoteForm />
        </div>
        <div className="hero-media">
          <Image
            src={heroLivingRoom.src}
            alt={heroLivingRoom.alt}
            width={heroLivingRoom.width}
            height={heroLivingRoom.height}
            sizes="(max-width: 980px) 100vw, 50vw"
            priority
          />
          <FloatCard
            position="top"
            leading={
              <span className="fc-ico">
                <Icon name="clock" />
              </span>
            }
          >
            <small>Next available</small>
            <strong>Thursday · 9:00 am</strong>
          </FloatCard>
          <FloatCard
            position="bottom"
            leading={
              <div className="fc-avatars">
                {featuredReviews.slice(0, 3).map((review) => (
                  <span key={review.name}>{initials(review.name)}</span>
                ))}
              </div>
            }
          >
            <Stars />
            <small>Loved by Valley households</small>
          </FloatCard>
        </div>
      </div>
    </section>
  );
}
