import { speakingPage } from "@/content/speaking";
import { ActionLink, Eyebrow, Section, SourceNote } from "./section";

export function SpeakingResearchLink() {
  const { researchLink } = speakingPage;
  return (
    <Section tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>From Research to Conversation</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {researchLink.heading}
        </h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
        {researchLink.items.map((item) => (
          <article key={item.title} className="group flex flex-col bg-paper p-9">
            <span aria-hidden="true" className="mb-6 block h-px w-10 bg-oxblood transition-all duration-300 group-hover:w-16" />
            <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
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
