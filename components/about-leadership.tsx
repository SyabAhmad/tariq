import { about } from "@/content/about";
import { ActionLink, Eyebrow, Section } from "./section";

export function AboutLeadership() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{about.leadership.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {about.leadership.heading}
          </h2>
          <div className="mt-8">
            <ActionLink href="/leadership" variant="secondary">
              Academic Leadership &amp; Experience
            </ActionLink>
          </div>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-ink-soft">{about.leadership.body}</p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {about.leadership.pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink-soft"
              >
                {pillar}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm leading-relaxed text-ink-soft/60">
            In addition to his current roles, his career includes university teaching appointments at
            FAST-NUCES, Sarhad University and the University of Peshawar, and service as Director of
            the Office of Research, Innovation and Commercialization (ORIC) at the University of Swat.
          </p>
        </div>
      </div>
    </Section>
  );
}
