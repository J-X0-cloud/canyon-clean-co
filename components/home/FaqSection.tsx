import { FaqList } from "@/components/ui/FaqList";
import { homeFaqs } from "@/lib/data/home";
import { mailto, site } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq-grid">
        <div>
          <p className="kicker">FAQ</p>
          <h2>Good questions, straight answers</h2>
          <p className="muted">
            Still curious? Call or text <a href={site.tel}>{site.phone}</a> or email{" "}
            <a href={mailto}>{site.email}</a>. A real person replies, usually within the hour.
          </p>
        </div>
        <FaqList items={homeFaqs} />
      </div>
    </section>
  );
}
