"use client";

import { useMemo, useState } from "react";
import { categories, publications, type Category, type Publication } from "@/content/publications";
import { ActionLink, Eyebrow, Section } from "./section";

const years = Array.from(new Set(publications.map((publication) => publication.year))).sort(
  (a, b) => b - a,
);

const chipBase = "rounded-full border px-4 py-2 text-sm transition-colors duration-200";

function PublicationRow({
  publication,
  expanded,
  onToggle,
}: {
  publication: Publication;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="border-b border-hairline">
      <div className="py-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
              {publication.year}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
              {publication.title}
            </h3>
            <p className="mt-1.5 text-sm italic text-ink-soft/60">{publication.journal}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft/50">
              {publication.categories.join(" · ")}
            </p>
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            className="shrink-0 rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-oxblood hover:text-oxblood"
          >
            {expanded ? "Hide Details" : "Details"}
            <span aria-hidden="true" className="ml-2">
              {expanded ? "↑" : "↓"}
            </span>
          </button>
        </div>

        {expanded && (
          <div className="mt-6 border border-hairline bg-white p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
              {publication.authors[0]}
              {publication.coAuthors ? " + co-authors" : ""}
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">{publication.summary}</p>
            <div className="mt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft/50">
                Keywords
              </p>
              <p className="mt-2 text-sm text-ink-soft/70">{publication.keywords.join(" · ")}</p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {publication.doi && (
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-oxblood hover:text-oxblood"
                >
                  DOI
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              <a
                href={publication.publisherUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-oxblood"
              >
                Publisher
                <span aria-hidden="true">↗</span>
              </a>
              {publication.researchgateUrl && (
                <a
                  href={publication.researchgateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-oxblood hover:text-oxblood"
                >
                  ResearchGate
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
            <p className="mt-5 text-xs text-ink-soft/50">
              Summary written for this portfolio — replace with the verified abstract when the official
              publication record is available.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * Searchable, filterable, sortable publication archive.
 * All data comes from content/publications.ts — adding a paper is a data edit.
 * Query can be controlled externally (e.g. by the topic cloud) via query/onQueryChange.
 */
export function PublicationLibrary({
  eyebrow,
  heading,
  note,
  showControls = true,
  query: controlledQuery,
  onQueryChange,
}: {
  eyebrow: string;
  heading: string;
  note?: string;
  showControls?: boolean;
  query?: string;
  onQueryChange?: (value: string) => void;
}) {
  const [internalQuery, setInternalQuery] = useState("");
  const query = controlledQuery ?? internalQuery;
  const setQuery = onQueryChange ?? setInternalQuery;
  const [category, setCategory] = useState<Category | "All">("All");
  const [year, setYear] = useState<number | "All">("All");
  const [sort, setSort] = useState<"newest" | "oldest" | "title">("newest");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = publications.filter((publication) => {
      const haystack = [
        publication.title,
        publication.shortTitle,
        publication.journal,
        ...publication.keywords,
        ...publication.categories,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = normalizedQuery === "" || haystack.includes(normalizedQuery);
      const matchesCategory = category === "All" || publication.categories.includes(category);
      const matchesYear = year === "All" || publication.year === year;
      return matchesQuery && matchesCategory && matchesYear;
    });

    result.sort((a, b) => {
      if (sort === "oldest") return a.year - b.year;
      if (sort === "title") return a.title.localeCompare(b.title);
      return b.year - a.year;
    });
    return result;
  }, [query, category, year, sort]);

  return (
    <Section id="publications" tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
          {heading}
        </h2>
      </div>

      {showControls && (
        <div className="mt-12 space-y-6">
          <div className="relative max-w-xl">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-ink-soft/40"
            >
              🔍
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search publications..."
              aria-label="Search publications"
              className="w-full rounded-full border border-ink/15 bg-paper py-3.5 pl-12 pr-5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/40 focus:border-oxblood"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            {(["All", ...categories] as const).map((option) => {
              const active = category === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCategory(option)}
                  aria-pressed={active}
                  className={`${chipBase} ${
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink-soft hover:border-oxblood hover:text-oxblood"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2.5 text-sm text-ink-soft/60">
              Year
              <select
                value={String(year)}
                onChange={(event) =>
                  setYear(event.target.value === "All" ? "All" : Number(event.target.value))
                }
                className="rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-oxblood"
              >
                <option value="All">All Years</option>
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2.5 text-sm text-ink-soft/60">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as typeof sort)}
                className="rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-oxblood"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A–Z</option>
              </select>
            </label>
            <p className="ml-auto text-sm text-ink-soft/50">
              {filtered.length} {filtered.length === 1 ? "record" : "records"}
            </p>
          </div>
        </div>
      )}

      <div className="mt-12 border-t border-hairline">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-ink-soft/60">
            No publications match the current filters.
          </p>
        ) : (
          filtered.map((publication) => (
            <PublicationRow
              key={publication.id}
              publication={publication}
              expanded={expandedId === publication.id}
              onToggle={() => setExpandedId(expandedId === publication.id ? null : publication.id)}
            />
          ))
        )}
      </div>

      {note && <p className="mt-10 text-sm leading-relaxed text-ink-soft/60">{note}</p>}

      <div className="mt-12">
        <ActionLink
          href="https://www.researchgate.net/profile/M-Tariq-Yousafzai"
          variant="secondary"
          external
        >
          Explore All Publications
        </ActionLink>
      </div>
    </Section>
  );
}
