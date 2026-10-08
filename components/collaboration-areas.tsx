import { contact } from "@/content/contact";
import { Eyebrow, Section } from "./section";

export function CollaborationAreas() {
  return (
    <Section tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>Collaboration Areas</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {contact.collaboration.heading}
        </h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {contact.collaboration.items.map((item) => (
          <article key={item.title} className="group flex flex-col bg-paper p-9">
            <span aria-hidden="true" className="mb-6 block h-px w-10 bg-oxblood transition-all duration-300 group-hover:w-16" />
            <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
