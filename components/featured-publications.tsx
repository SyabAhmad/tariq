import { publications } from "@/content/publications";
import { ActionLink, Eyebrow, Section } from "./section";

export type FeaturedItem = {
  index: string;
  publicationId: string;
  shortTitle: string;
  summary: string;
};

/** Large editorial cards listing selected studies with publisher links. */
export function FeaturedPublications({
  eyebrow,
  heading,
  items,
  cta,
  tone = "paper",
}: {
  eyebrow: string;
  heading: string;
  items: FeaturedItem[];
  cta?: { label: string; href: string };
  tone?: "paper" | "cream";
}) {
  return (
    <Section tone={tone} className={tone === "cream" ? "border-y border-hairline" : ""}>
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {heading}
        </h2>
      </div>
      <ul className="mt-16 border-t border-hairline">
        {items.map((item) => {
          const publication = publications.find((entry) => entry.id === item.publicationId);
          if (!publication) return null;
          return (
            <li key={item.publicationId} className="border-b border-hairline">
              <article className="group grid gap-6 py-10 transition-colors duration-300 hover:bg-white/50 md:grid-cols-12 md:gap-10 md:px-4 md:py-12">
                <div className="md:col-span-2">
                  <span className="font-display text-5xl font-semibold text-oxblood md:text-6xl">
                    {item.index}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                    {item.shortTitle}
                  </h3>
                  <p className="mt-2 font-display text-sm italic text-ink-soft/60">
                    {publication.title}
                  </p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{item.summary}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
                      {publication.year}
                      <span aria-hidden="true" className="mx-3 text-oxblood">
                        ·
                      </span>
                      {publication.journal}
                    </span>
                    <ActionLink
                      href={publication.publisherUrl}
                      variant="secondary"
                      external
                      className="px-5 py-2.5"
                    >
                      View Research
                    </ActionLink>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {cta && (
        <div className="mt-12">
          <ActionLink href={cta.href}>{cta.label}</ActionLink>
        </div>
      )}
    </Section>
  );
}
