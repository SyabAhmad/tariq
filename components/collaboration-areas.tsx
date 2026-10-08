import { contact } from "@/content/contact";
import { Eyebrow, Section } from "./section";

export function CollaborationAreas() {
  return (
    <Section tone="white" className="border-b border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>Collaboration Areas</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {contact.collaboration.heading}
        </h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
        {contact.collaboration.items.map((item, index) => (
          <article
            key={item.title}
            className={`group flex flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-white ${
              index === contact.collaboration.items.length - 1 ? "lg:col-span-1" : ""
            }`}
          >
            <span aria-hidden="true" className="mb-6 block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
            <h3 className="font-display text-lg font-semibold text-forest">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
