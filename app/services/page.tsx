import type { Metadata } from "next";
import { AddOnGrid } from "@/components/services/AddOnGrid";
import { ServiceRow } from "@/components/services/ServiceRow";
import { ServicesHero } from "@/components/services/ServicesHero";
import { WhatToExpect } from "@/components/services/WhatToExpect";
import { CtaBand } from "@/components/shared/CtaBand";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "House Cleaning Services & Prices",
  description:
    "Recurring, deep and move-in/move-out house cleaning in Los Angeles' San Fernando Valley, plus add-ons like inside oven, fridge and blinds. Flat prices shown up front.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div className="wrap svc-rows">
        {services.map((service, index) => (
          <ServiceRow key={service.key} service={service} flip={index % 2 === 1} />
        ))}
      </div>
      <AddOnGrid />
      <WhatToExpect />
      <CtaBand
        title="Not sure which clean you need?"
        text="Start with the instant quote. If your home needs a deep clean before recurring service, the quote will tell you, and so will we."
      />
    </>
  );
}
