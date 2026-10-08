import { about } from "@/content/about";
import { Eyebrow, Section } from "./section";

export function ResearchInterests() {
  return (
    <Section id="interests" tone="white" className="border-y border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>{about.interests.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {about.interests.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/65">
          Rather than treating entrepreneurship simply as business creation, Dr. Tariq&rsquo;s research
          explores entrepreneurship as a broader mechanism for{" "}
          <strong className="font-semibold text-forest">{about.interests.emphasis}</strong>.
        </p>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
        {about.interests.items.map((item) => (
          <article key={item.title} className="group flex flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-white">
            <span aria-hidden="true" className="mb-6 block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
            <h3 className="font-display text-xl font-semibold text-forest">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-sm text-charcoal/65">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
