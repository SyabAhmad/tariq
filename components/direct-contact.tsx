import { contact } from "@/content/contact";
import { Eyebrow, Section } from "./section";

export function DirectContact() {
  const { direct } = contact;
  return (
    <Section tone="ivory">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{direct.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {direct.heading}
          </h2>
        </div>
        <div className="md:col-span-7">
          <dl className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            <div className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Email</dt>
              <dd className="md:col-span-2">
                <a
                  href={`mailto:${direct.email}`}
                  className="font-display text-xl font-semibold text-forest underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
                >
                  {direct.email}
                </a>
                <p className="mt-2 text-xs text-charcoal/40">{direct.emailNote}</p>
              </dd>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-gold">University</dt>
              <dd className="text-lg text-charcoal/75 md:col-span-2">{direct.university}</dd>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Department</dt>
              <dd className="text-lg text-charcoal/75 md:col-span-2">{direct.department}</dd>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-3">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Location</dt>
              <dd className="text-lg text-charcoal/75 md:col-span-2">{direct.location}</dd>
            </div>
          </dl>
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Profiles</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {direct.profiles.map((profile) => (
                <li key={profile.label}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm text-charcoal/70 transition-colors hover:border-gold hover:text-forest"
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
