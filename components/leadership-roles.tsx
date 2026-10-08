import { leadership } from "@/content/leadership";
import { Eyebrow, Section } from "./section";

export function CurrentRoles() {
  const { associateProfessor } = leadership.roles;
  return (
    <Section tone="ivory">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>Current Academic Roles</Eyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
            {associateProfessor.title}
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-gold">{associateProfessor.org}</p>
        </div>
        <ul className="space-y-5 md:col-span-7 md:pt-14">
          {associateProfessor.duties.map((duty) => (
            <li key={duty} className="flex items-baseline gap-4 border-b border-charcoal/10 pb-5">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span className="text-lg text-charcoal/75">{duty}</span>
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
    <Section tone="forest" className="relative overflow-hidden">
      <div className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{qec.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-ivory md:text-5xl">
            {qec.title}
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-gold-soft">{qec.org}</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ivory/10 sm:grid-cols-2">
          {qec.focusAreas.map((area) => (
            <article key={area.title} className="bg-forest p-9">
              <h3 className="font-display text-xl font-semibold text-gold-soft">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-ivory/70">{area.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
