import { AreasSection } from "@/components/home/AreasSection";
import { FaqSection } from "@/components/home/FaqSection";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IncludedChecklist } from "@/components/home/IncludedChecklist";
import { PricingPlans } from "@/components/home/PricingPlans";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ServiceCards } from "@/components/home/ServiceCards";
import { TrustRow } from "@/components/home/TrustRow";
import { CtaBand } from "@/components/shared/CtaBand";
import { LocalBusinessJsonLd } from "@/components/shared/LocalBusinessJsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <TrustRow />
      <ServiceCards />
      <HowItWorks />
      <IncludedChecklist />
      <PricingPlans />
      <ReviewsSection />
      <AreasSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
