import { leadership } from "@/content/leadership";
import { ActionLink, Eyebrow, Section, SourceNote } from "./section";

const DOT_COLUMNS = 22;
const DOT_ROWS = 7;
const DOT_HIGHLIGHTS = [
  { col: 16, row: 3 },
  { col: 11, row: 2 },
  { col: 10, row: 2 },
];

export function InternationalPerspective() {
  const { international } = leadership;
  return (
    <Section tone="ivory">
      <div className="grid gap-14 md:grid-cols-12 md:items-center md:gap-12">
        <div className="md:col-span-6">
          <Eyebrow>International Academic Perspective</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {international.heading}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-charcoal/65">{international.body}</p>
        </div>
        <div className="md:col-span-6">
          <div
            aria-hidden="true"
            className="grid gap-[12px]"
            style={{ gridTemplateColumns: `repeat(${DOT_COLUMNS}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: DOT_COLUMNS * DOT_ROWS }).map((_, index) => {
              const col = index % DOT_COLUMNS;
              const row = Math.floor(index / DOT_COLUMNS);
              const highlight = DOT_HIGHLIGHTS.some((dot) => dot.col === col && dot.row === row);
              return (
                <span
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full ${
                    highlight ? "scale-[1.5] bg-gold" : "bg-charcoal/15"
                  }`}
                />
              );
            })}
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {international.locations.map((location) => (
              <li
                key={location}
                className="rounded-full border border-charcoal/15 px-5 py-2.5 text-sm text-charcoal/70"
              >
                {location}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <SourceNote
              source={{
                label: "ResearchGate profile",
                href: "https://www.researchgate.net/profile/M-Tariq-Yousafzai",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export function LeadershipCta() {
  const { cta } = leadership;
  return (
    <section className="bg-forest px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ivory md:text-6xl">
          {cta.heading}
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/70">{cta.body}</p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {cta.links.map((link) => (
            <ActionLink
              key={link.label}
              href={link.href}
              variant={link.variant === "primary" ? "onDark" : "onDarkSecondary"}
            >
              {link.label}
            </ActionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
