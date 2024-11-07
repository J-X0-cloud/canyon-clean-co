import { SectionHeading } from "@/components/ui/SectionHeading";
import { addOnCards } from "@/lib/data/services";

export function AddOnGrid() {
  return (
    <section className="section section-mist" id="add-ons">
      <div className="wrap">
        <SectionHeading kicker="Add-ons" title="Extras you can add to any visit">
          Tick them in the instant quote and they&rsquo;re added to your flat price. Recurring
          clients every two weeks get one add-on free each month.
        </SectionHeading>
        <div className="addons">
          {addOnCards.map((addOn) => (
            <div className="addon" key={addOn.title}>
              <div className="addon-top">
                <h3>{addOn.title}</h3>
                <span>{addOn.price}</span>
              </div>
              <p>{addOn.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
