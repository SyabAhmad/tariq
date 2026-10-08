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
  tone = "ivory",
}: {
  eyebrow: string;
  heading: string;
  items: FeaturedItem[];
  cta?: { label: string; href: string };
  tone?: "ivory" | "white";
}) {
  return (
    <Section tone={tone} className={tone === "white" ? "border-y border-charcoal/10" : ""}>
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {heading}
        </h2>
      </div>
      <ul className="mt-16 border-t border-charcoal/10">
        {items.map((item) => {
          const publication = publications.find((entry) => entry.id === item.publicationId);
          if (!publication) return null;
          return (
            <li key={item.publicationId} className="border-b border-charcoal/10">
              <article className="group grid gap-6 py-10 transition-colors duration-300 hover:bg-white/60 md:grid-cols-12 md:gap-10 md:px-4 md:py-12">
                <div className="md:col-span-2">
                  <span className="font-display text-4xl font-semibold text-gold md:text-5xl">
                    {item.index}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-xl font-semibold leading-snug text-forest md:text-2xl">
                    {item.shortTitle}
                  </h3>
                  <p className="mt-2 font-display text-sm italic text-charcoal/50">
                    {publication.title}
                  </p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-charcoal/65">{item.summary}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <span className="text-sm text-charcoal/50">
                      {publication.year}
                      <span aria-hidden="true" className="mx-3 text-gold">
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
