import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/data/home";

export function HowItWorks() {
  return (
    <section className="section section-mist" id="how">
      <div className="wrap">
        <SectionHeading
          kicker="How it works"
          title="Booked in minutes, clean by the weekend"
          center
        />
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-n">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
