import { externalProfiles } from "@/content/publications";
import { Eyebrow, Section } from "./section";

export function ExternalProfiles() {
  return (
    <Section tone="paper">
      <div className="max-w-3xl">
        <Eyebrow>Find the Complete Profile</Eyebrow>
        <h2 className="mt-6 font-display text-2xl font-semibold leading-[1.15] text-ink md:text-3xl">
          Academic profiles beyond this archive.
        </h2>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {externalProfiles.map((profile) => (
          <a
            key={profile.label}
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-paper p-8 transition-colors duration-300 hover:bg-white"
          >
            <span className="flex items-center justify-between font-display text-lg font-semibold text-ink">
              {profile.label}
              <span
                aria-hidden="true"
                className="text-oxblood transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
            <span className="mt-3 text-sm leading-relaxed text-ink-soft/60">{profile.detail}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
