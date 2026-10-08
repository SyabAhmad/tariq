import { contact } from "@/content/contact";
import { Eyebrow, Section } from "./section";

export function DirectContact() {
  const { direct } = contact;
  return (
    <Section tone="paper">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{direct.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {direct.heading}
          </h2>
        </div>
        <div className="md:col-span-7">
          <dl className="divide-y divide-hairline border-y border-hairline">
            <div className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
                Email
              </dt>
              <dd className="md:col-span-2">
                <a
                  href={`mailto:${direct.email}`}
                  className="font-display text-xl font-semibold text-ink underline decoration-oxblood/40 underline-offset-4 transition-colors hover:text-oxblood"
                >
                  {direct.email}
                </a>
                <p className="mt-2 text-xs text-ink-soft/50">{direct.emailNote}</p>
              </dd>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
                University
              </dt>
              <dd className="text-lg text-ink-soft md:col-span-2">{direct.university}</dd>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
                Department
              </dt>
              <dd className="text-lg text-ink-soft md:col-span-2">{direct.department}</dd>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
                Location
              </dt>
              <dd className="text-lg text-ink-soft md:col-span-2">{direct.location}</dd>
            </div>
          </dl>
          <div className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
              Profiles
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {direct.profiles.map((profile) => (
                <li key={profile.label}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-oxblood hover:text-oxblood"
                  >
                    {profile.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
