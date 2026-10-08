import { speakingPage } from "@/content/speaking";
import { Eyebrow, Section } from "./section";

export function SpeakingTopics() {
  return (
    <Section tone="cream">
      <Eyebrow>Areas of Speaking</Eyebrow>
      <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {speakingPage.topics.items.map((topic) => (
          <article key={topic.title} className="group flex flex-col bg-paper p-9">
            <span className="font-display text-2xl font-semibold text-oxblood">{topic.index}</span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{topic.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{topic.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
