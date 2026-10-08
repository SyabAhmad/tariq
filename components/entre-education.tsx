import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function EntrepreneurialEducation() {
  const { education } = entrepreneurship;
  return (
    <Section tone="cream">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{education.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {education.heading}
          </h2>
          <p className="mt-8 font-display text-lg italic text-oxblood">{education.bridge}</p>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-ink-soft">
            A major part of his work focuses on the role universities can play in developing
            entrepreneurial capabilities. His research has examined{" "}
            <strong className="font-semibold text-ink">{education.emphasis}</strong>, including
            research based on perspectives from CEOs and business practitioners.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {education.cards.map((card) => (
              <article key={card.title} className="group bg-paper p-8">
                <span aria-hidden="true" className="mb-5 block h-px w-10 bg-oxblood transition-all duration-300 group-hover:w-16" />
                <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
