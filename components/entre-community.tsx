import { entrepreneurship } from "@/content/entrepreneurship";
import { Eyebrow, Section } from "./section";

export function CommunityEntrepreneurship() {
  const { community } = entrepreneurship;
  return (
    <Section tone="paper">
      <div className="max-w-3xl">
        <Eyebrow>Community Entrepreneurship</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {community.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{community.lead}</p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {community.items.map((item, index) => (
          <article
            key={item.title}
            className="group flex flex-col border border-hairline bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:border-oxblood/30"
          >
            <span className="font-display text-3xl font-semibold text-oxblood">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
