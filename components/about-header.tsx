import Image from "next/image";
import { about } from "@/content/about";
import { AskGptBadge } from "./ask-gpt-badge";
import { ActionLink, Eyebrow } from "./section";

export function AboutHeader() {
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-9">
            <Eyebrow>{about.header.eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-ink md:text-6xl">
              {about.header.heading}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {about.header.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ActionLink href={about.header.cta.href}>{about.header.cta.label}</ActionLink>
              <AskGptBadge />
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-3">
            <figure className="group mx-auto max-w-[240px]">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -right-2.5 -top-2.5 h-full w-full border border-oxblood/30"
                />
                <div className="relative overflow-hidden border border-hairline bg-cream">
                  <Image
                    src="/assets/speaking-event.jpg"
                    alt="Dr. Muhammad Tariq Yousafzai"
                    width={474}
                    height={268}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <figcaption className="mt-4 border-t border-hairline pt-3 text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft/60">
                  Dr. Muhammad Tariq Yousafzai
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
