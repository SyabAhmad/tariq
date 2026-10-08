import { speakingPage } from "@/content/speaking";
import { ActionLink, Eyebrow, Section, SourceNote } from "./section";

export function SpeakingResearchLink() {
  const { researchLink } = speakingPage;
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <div className="max-w-3xl">
        <Eyebrow>From Research to Conversation</Eyebrow>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.01em] text-forest md:text-4xl">
          {researchLink.heading}
        </h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 md:grid-cols-3">
        {researchLink.items.map((item) => (
          <article key={item.title} className="group flex flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-white">
            <span aria-hidden="true" className="mb-6 block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
            <h3 className="font-display text-lg font-semibold text-forest">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">{item.body}</p>
            <div className="mt-5">
              <SourceNote source={item.source} />
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <ActionLink href={researchLink.cta.href}>{researchLink.cta.label}</ActionLink>
      </div>
    </Section>
  );
}
