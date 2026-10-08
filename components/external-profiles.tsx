import { externalProfiles } from "@/content/publications";
import { Eyebrow, Section } from "./section";

export function ExternalProfiles() {
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>Find the Complete Profile</Eyebrow>
        <h2 className="font-display text-2xl font-semibold leading-[1.2] text-forest md:text-3xl">
          Academic profiles beyond this archive.
        </h2>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
        {externalProfiles.map((profile) => (
          <a
            key={profile.label}
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-white"
          >
            <span className="flex items-center justify-between font-display text-lg font-semibold text-forest">
              {profile.label}
              <span
                aria-hidden="true"
                className="text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
            <span className="mt-3 text-sm leading-relaxed text-charcoal/55">{profile.detail}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
