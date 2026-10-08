import { about } from "@/content/about";
import { ActionLink, Eyebrow, Section } from "./section";

export function AboutRoles() {
  return (
    <Section id="roles" tone="cream">
      <div className="grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
        {about.leadership.roles.map((role) => (
          <article key={role.title} className="bg-paper p-10">
            <span aria-hidden="true" className="block h-px w-10 bg-oxblood" />
            <h2 className="mt-7 font-display text-2xl font-semibold text-ink">{role.title}</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{role.department}</p>
            <p className="font-medium text-ink">{role.organization}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Journey() {
  return (
    <Section tone="paper">
      <div className="max-w-3xl">
        <Eyebrow>{about.journey.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {about.journey.heading}
        </h2>
      </div>
      <ol className="relative mt-16 space-y-14 before:absolute before:bottom-4 before:left-[7px] before:top-2 before:w-px before:bg-hairline">
        {about.journey.stages.map((stage, i) => (
          <li key={stage.title} className="relative pl-10">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-oxblood bg-paper"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" />
            </span>
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-oxblood">
                  {stage.period}
                </span>
                <p className="mt-2 font-display text-xl font-semibold text-ink">{stage.place}</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-lg font-semibold text-ink">{stage.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{stage.body}</p>
                {stage.credentials && (
                  <ul className="mt-4 space-y-2">
                    {stage.credentials.map((credential) => (
                      <li key={credential} className="flex items-baseline gap-3 text-sm text-ink-soft/70">
                        <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-oxblood" />
                        {credential}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {i === about.journey.stages.length - 1 && (
              <div className="mt-10">
                <ActionLink href="/leadership" variant="secondary">
                  View Academic Leadership
                </ActionLink>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
