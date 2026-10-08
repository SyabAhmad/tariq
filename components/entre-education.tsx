import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function EntrepreneurialEducation() {
  const { education } = entrepreneurship;
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{education.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {education.heading}
          </h2>
          <p className="mt-8 font-display text-lg italic text-gold">{education.bridge}</p>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-charcoal/75">
            A major part of his work focuses on the role universities can play in developing
            entrepreneurial capabilities. His research has examined{" "}
            <strong className="font-semibold text-forest">{education.emphasis}</strong>, including
            research based on perspectives from CEOs and business practitioners.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2">
            {education.cards.map((card) => (
              <article key={card.title} className="group flex flex-col bg-ivory p-8">
                <span aria-hidden="true" className="mb-5 block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
                <h3 className="font-display text-lg font-semibold text-forest">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
