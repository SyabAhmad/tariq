import { about } from "@/content/about";
import { Eyebrow, Section } from "./section";

export function ResearchInterests() {
  return (
    <Section id="interests" tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>{about.interests.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {about.interests.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Rather than treating entrepreneurship simply as business creation, Dr. Tariq&rsquo;s
          research explores entrepreneurship as a broader mechanism for{" "}
          <strong className="font-semibold text-ink">{about.interests.emphasis}</strong>.
        </p>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {about.interests.items.map((item) => (
          <article key={item.title} className="group flex flex-col bg-paper p-9">
            <span aria-hidden="true" className="mb-6 block h-px w-10 bg-oxblood transition-all duration-300 group-hover:w-16" />
            <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
