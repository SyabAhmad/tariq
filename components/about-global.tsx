import { about } from "@/content/about";
import { Eyebrow, Section } from "./section";

export function AboutGlobal() {
  return (
    <Section tone="cream">
      <div className="grid gap-16 md:grid-cols-12 md:items-start md:gap-12">
        <div className="md:col-span-6">
          <Eyebrow>{about.global.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {about.global.heading}
          </h2>
          <ul className="mt-12 space-y-7">
            {about.global.locations.map((location) => (
              <li key={location.label} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-oxblood"
                />
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{location.label}</p>
                  <p className="text-sm text-ink-soft/70">{location.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6">
          <div className="border border-hairline bg-paper p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              Countries
            </p>
            <p className="mt-6 font-display text-8xl font-semibold leading-none text-ink md:text-9xl">
              10<span className="text-oxblood">+</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Across study, teaching, research exposure and collaboration.
            </p>
            <div className="mt-8 border-t border-hairline pt-6">
              <p className="font-display text-lg italic leading-relaxed text-ink/70">
                {about.global.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
