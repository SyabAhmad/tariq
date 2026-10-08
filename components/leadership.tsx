import { leadership } from "@/content/site";
import { ActionLink, Eyebrow, Section } from "./section";

export function Leadership() {
  return (
    <Section id="leadership" tone="ivory">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{leadership.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            Current academic roles.
          </h2>
        </div>
        <ActionLink href={leadership.cta.href} variant="secondary" external>
          {leadership.cta.label}
        </ActionLink>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {leadership.roles.map((role) => (
          <article
            key={role.title}
            className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-10"
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gold" />
            <h3 className="font-display text-2xl font-semibold text-forest">{role.title}</h3>
            <p className="mt-4 leading-relaxed text-charcoal/65">{role.department}</p>
            <p className="font-medium text-charcoal/80">{role.organization}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
