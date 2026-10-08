import { ActionLink } from "./section";

export function PublicationsCta() {
  return (
    <section className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-paper md:text-6xl">
          Looking for a specific publication?
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/60">
          Search the research archive or explore Dr. Tariq Yousafzai&rsquo;s research areas.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ActionLink href="#publications" variant="onDark">
            Search Publications
          </ActionLink>
          <ActionLink href="/research" variant="onDarkSecondary">
            Explore Research
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
