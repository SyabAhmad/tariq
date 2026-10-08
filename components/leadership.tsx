import { leadership } from "@/content/site";
import { ActionLink, Eyebrow, Section } from "./section";

export function Leadership() {
  return (
    <Section id="leadership" tone="paper">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{leadership.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-5xl">
            Current academic roles.
          </h2>
        </div>
        <ActionLink href={leadership.cta.href} variant="secondary" external>
          {leadership.cta.label}
        </ActionLink>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
        {leadership.roles.map((role) => (
          <article key={role.title} className="bg-paper p-10">
            <span aria-hidden="true" className="block h-px w-10 bg-oxblood" />
            <h3 className="mt-7 font-display text-2xl font-semibold text-ink">{role.title}</h3>
            <p className="mt-4 leading-relaxed text-ink-soft">{role.department}</p>
            <p className="font-medium text-ink">{role.organization}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
