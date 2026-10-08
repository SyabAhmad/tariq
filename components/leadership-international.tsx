import { leadership } from "@/content/leadership";
import { ActionLink, Eyebrow, Section, SourceNote } from "./section";

export function InternationalPerspective() {
  const { international } = leadership;
  return (
    <Section tone="paper">
      <div className="grid gap-14 md:grid-cols-12 md:items-start md:gap-12">
        <div className="md:col-span-6">
          <Eyebrow>International Academic Perspective</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {international.heading}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">{international.body}</p>
        </div>
        <div className="md:col-span-6">
          <div className="border border-hairline bg-cream p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60">
              Countries
            </p>
            <p className="mt-6 font-display text-8xl font-semibold leading-none text-ink md:text-9xl">
              6<span className="text-oxblood">+</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Teaching, research exposure and collaboration.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3 border-t border-hairline pt-8">
              {international.locations.map((location) => (
                <li
                  key={location}
                  className="rounded-full border border-ink/15 px-4 py-2 text-sm text-ink-soft"
                >
                  {location}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <SourceNote
                source={{
                  label: "ResearchGate profile",
                  href: "https://www.researchgate.net/profile/M-Tariq-Yousafzai",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function LeadershipCta() {
  const { cta } = leadership;
  return (
    <section className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-paper md:text-6xl">
          {cta.heading}
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/60">{cta.body}</p>
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
