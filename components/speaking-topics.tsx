import { speakingPage } from "@/content/speaking";
import { Eyebrow, Section } from "./section";

export function SpeakingTopics() {
  return (
    <Section tone="white" className="border-y border-charcoal/10">
      <Eyebrow>Areas of Speaking</Eyebrow>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
        {speakingPage.topics.items.map((topic) => (
          <article key={topic.title} className="group flex flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-white">
            <span className="font-display text-2xl font-semibold text-gold">{topic.index}</span>
            <h3 className="mt-5 font-display text-lg font-semibold text-forest">{topic.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65">{topic.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
