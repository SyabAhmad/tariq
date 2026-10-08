import { contact } from "@/content/contact";
import { ActionLink, Eyebrow, Section } from "./section";

export function SpeakingInvitations() {
  const { speakingInvitations } = contact;
  return (
    <Section tone="cream">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{speakingInvitations.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {speakingInvitations.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">{speakingInvitations.body}</p>
        </div>
        <div className="md:col-span-7 md:pt-14">
          <ul className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {speakingInvitations.suitableFor.map((item) => (
              <li key={item} className="bg-paper px-7 py-6 text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ActionLink href={speakingInvitations.cta.href}>
              {speakingInvitations.cta.label}
            </ActionLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function LocationSection() {
  const { location } = contact;
  return (
    <Section tone="paper">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-oxblood">
          Academic Home
        </p>
        <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.02em] text-ink md:text-5xl">
          {location.heading}
        </h2>
        <div className="mt-8 space-y-1.5 leading-relaxed text-ink-soft">
          {location.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        {/* Understated location marker */}
        <div aria-hidden="true" className="mx-auto mt-12 flex w-full max-w-md flex-col items-center">
          <span className="h-2.5 w-2.5 rounded-full bg-oxblood ring-4 ring-oxblood/15" />
          <span className="mt-2 h-10 w-px bg-ink/15" />
          <span className="h-px w-full bg-hairline" />
        </div>
        <p className="mt-8 text-xs text-ink-soft/50">{location.note}</p>
      </div>
    </Section>
  );
}

export function FinalStatement() {
  const { finalStatement } = contact;
  return (
    <section className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-paper md:text-6xl">
          {finalStatement.lines.map((line) => (
            <span key={line} className="block">
              {line.replace(/\.$/, "")}
              <span className="text-oxblood-soft">.</span>
            </span>
          ))}
        </h2>
        <div className="mt-12 flex justify-center">
          <ActionLink href={finalStatement.cta.href} variant="onDark">
            {finalStatement.cta.label}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
