import { speakingPage } from "@/content/speaking";
import { ActionLink, Eyebrow, Section } from "./section";

export function SpeakingPhilosophy() {
  const { philosophy } = speakingPage;
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>Speaking Philosophy</Eyebrow>
        <p className="mt-10 font-display text-2xl font-semibold leading-[1.35] tracking-[-0.01em] text-forest md:text-4xl">
          {philosophy.statement}
        </p>
        <p className="mt-8 text-sm text-charcoal/50">{philosophy.label}</p>
      </div>
    </Section>
  );
}

export function SpeakingInvite() {
  const { invite } = speakingPage;
  return (
    <section className="bg-forest px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">{invite.eyebrow}</p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ivory md:text-6xl">
          {invite.heading}
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/70">{invite.body}</p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ActionLink href={invite.cta.href} variant="onDark">
            {invite.cta.label}
          </ActionLink>
          <ActionLink href={invite.secondary.href} variant="onDarkSecondary">
            {invite.secondary.label}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
