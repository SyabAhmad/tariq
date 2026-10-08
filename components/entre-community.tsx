import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function CommunityEntrepreneurship() {
  const { community } = entrepreneurship;
  return (
    <Section tone="ivory">
      <div className="max-w-3xl">
        <Eyebrow>Community Entrepreneurship</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {community.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/65">{community.lead}</p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {community.items.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-forest/5"
          >
            <span aria-hidden="true" className="text-3xl">
              {item.glyph}
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-forest">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-sm text-charcoal/65">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
