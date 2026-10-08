import { about } from "@/content/about";
import { ActionLink, Eyebrow, Section } from "./section";

export function AboutRoles() {
  return (
    <Section id="roles" tone="white" className="border-y border-charcoal/10">
      <div className="grid gap-8 md:grid-cols-2">
        {about.leadership.roles.map((role) => (
          <article
            key={role.title}
            className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory p-10"
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gold" />
            <h2 className="font-display text-2xl font-semibold text-forest">{role.title}</h2>
            <p className="mt-4 leading-relaxed text-charcoal/65">{role.department}</p>
            <p className="font-medium text-charcoal/80">{role.organization}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Journey() {
  return (
    <Section tone="ivory">
      <div className="max-w-3xl">
        <Eyebrow>{about.journey.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {about.journey.heading}
        </h2>
      </div>
      <ol className="relative mt-16 space-y-14 before:absolute before:bottom-4 before:left-[7px] before:top-2 before:w-px before:bg-charcoal/15">
        {about.journey.stages.map((stage, i) => (
          <li key={stage.title} className="relative pl-10">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-ivory"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  {stage.period}
                </span>
                <p className="mt-2 font-display text-xl font-semibold text-forest">{stage.place}</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-lg font-semibold text-charcoal">{stage.title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal/65">{stage.body}</p>
                {stage.credentials && (
                  <ul className="mt-4 space-y-2">
                    {stage.credentials.map((credential) => (
                      <li key={credential} className="flex items-baseline gap-3 text-sm text-charcoal/55">
                        <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {credential}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {i === about.journey.stages.length - 1 && (
              <div className="mt-10">
                <ActionLink href="/about#roles" variant="secondary">
                  View Current Roles
                </ActionLink>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
