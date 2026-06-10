# temetro docs

The documentation site for [temetro](https://github.com/temetro/temetro) — an
open-source clinical tool that puts an AI chat between clinicians and patient data.
Clinicians ask for a chart in plain language and get organized record cards back:
vitals, allergies, medications, labs, encounters, and more.

This repo contains only the documentation website. The product itself (the Next.js
app and the Express + Postgres API) lives in
[temetro/temetro](https://github.com/temetro/temetro), and the marketing site in
[temetro/temetro-landing](https://github.com/temetro/temetro-landing).

## What's documented

- **Get started** — what temetro is, a five-minute Docker quickstart, and core
  concepts (clinics, roles, patient file numbers).
- **Using temetro** — plain-language guides for clinicians: the chat, patient
  records, appointments, prescriptions, tasks, messaging, notes, and analytics.
- **Administration** — roles & permissions, self-hosting, and configuration.
- **Developers** — architecture, contributing, and a full API reference with
  example requests and responses.
- **Roadmap** — what works today and what's planned (real LLM chat, patient-owned
  records with signed, patient-approved changes).

## Stack

Built with [Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev),
themed with the same COSS color palette as the temetro app. Content lives as MDX in
[`content/docs/`](content/docs/); the sidebar is ordered by the `meta.json` files
alongside it.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Useful scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with live reload |
| `npm run build` | Production build (statically renders every page) |
| `npm run types:check` | MDX generation + route typegen + TypeScript check |
| `npm run lint` | ESLint |

## Editing the docs

- Add or edit pages in `content/docs/**/*.mdx` (frontmatter: `title`,
  `description`, optional `icon` — a [Lucide](https://lucide.dev) icon name).
- Order sections and pages in the `meta.json` file of the relevant folder.
- Components available in MDX (`Tabs`, `Steps`, `Callout`, `Cards`, `Accordions`,
  `TypeTable`, `Files`, …) are wired up in
  [`src/components/mdx.tsx`](src/components/mdx.tsx).
- Site name, GitHub links, and nav are configured in
  [`src/lib/shared.ts`](src/lib/shared.ts) and
  [`src/lib/layout.shared.tsx`](src/lib/layout.shared.tsx); the COSS theme lives in
  [`src/app/global.css`](src/app/global.css).

Search is built in (powered by [Orama](https://orama.com)) and indexes new content
automatically. The site also serves `/llms.txt` and `/llms-full.txt` for AI
assistants.
