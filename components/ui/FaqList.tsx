import type { Faq } from "@/types/content";

/** Native details/summary accordion: works without JavaScript. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq-list">
      {items.map((faq) => (
        <details key={faq.question}>
          <summary>{faq.question}</summary>
          <div>
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
