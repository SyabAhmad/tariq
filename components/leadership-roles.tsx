import { leadership } from "@/content/leadership";
import { Eyebrow, Section } from "./section";

export function CurrentRoles() {
  const { associateProfessor } = leadership.roles;
  return (
    <Section tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>Current Academic Roles</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {associateProfessor.title}
          </h2>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-oxblood">
            {associateProfessor.org}
          </p>
        </div>
        <ul className="space-y-5 md:col-span-7 md:pt-14">
          {associateProfessor.duties.map((duty) => (
            <li key={duty} className="flex items-baseline gap-4 border-b border-hairline pb-5">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-oxblood" />
              <span className="text-lg text-ink-soft">{duty}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function QualityEnhancementCell() {
  const { qec } = leadership.roles;
  return (
    <Section tone="ink">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{qec.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-paper md:text-5xl">
          {qec.title}
        </h2>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-oxblood-soft">
          {qec.org}
        </p>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2">
        {qec.focusAreas.map((area) => (
          <article key={area.title} className="bg-ink p-9">
            <h3 className="font-display text-xl font-semibold text-oxblood-soft">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">{area.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
