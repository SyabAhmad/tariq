# Tariq Yousafzai — Portfolio

Academic portfolio website for **Muhammad Tariq Yousafzai** — Associate Professor, Centre for Management and Commerce, and Director of the Quality Enhancement Cell, University of Swat.

Built with [Next.js 16](https://nextjs.org) (App Router, Turbopack), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Editing content

All copy, links and section data live in [`content/site.ts`](./content/site.ts) — no component edits needed for text changes. Each section in `components/` reads from that file.

## Brand

| Token | Value | Usage |
| --- | --- | --- |
| Warm Ivory | `#F6F3EC` | Page background |
| White | `#FFFFFF` | Alternating sections / cards |
| Charcoal | `#171717` | Body text |
| Deep Forest | `#17352B` | Display type, dark sections |
| Muted Gold | `#B59A62` | Eyebrows, accents, hairlines |

Fonts: Fraunces (display) and Inter (body), loaded via `next/font/google` in `app/layout.tsx`.

## Content notes

Copy is compiled from public professional profiles and the research brief
(`dr-tariq-yousafzai-portfolio-research.md`). Items self-reported on LinkedIn
(talk dates, publication counts) are marked with sources and listed in
`content/site.ts` for reconfirmation before publication:

- Preferred name spelling and honorific
- Institutional email address display permission
- Current status of QEC, editorial and volunteer roles
- Real ORCID identifier (currently an ORCID search link)
- A CV or official publication list for the full bibliography
