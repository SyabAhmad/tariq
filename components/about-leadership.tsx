import { about } from "@/content/about";
import { Eyebrow, Section } from "./section";

export function AboutLeadership() {
  return (
    <Section tone="ivory">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{about.leadership.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {about.leadership.heading}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-charcoal/75">{about.leadership.body}</p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {about.leadership.pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full border border-charcoal/15 px-5 py-2.5 text-sm text-charcoal/70"
              >
                {pillar}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm leading-relaxed text-charcoal/45">
            In addition to his current roles, his career includes university teaching appointments at
            FAST-NUCES, Sarhad University and the University of Peshawar, and service as Director of the
            Office of Research, Innovation and Commercialization (ORIC) at the University of Swat.
          </p>
        </div>
      </div>
    </Section>
  );
}
