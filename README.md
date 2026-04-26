# Temetro Docs

Temetro Docs is the documentation site for deployment, self-hosting, and product guidance.

## Stack

- Next.js 16
- Fumadocs UI
- Fumadocs Core
- Fumadocs MDX
- TypeScript

## Local Development

```bash
npm install
npm --workspace @temetro/docs run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Content Structure

- `content/docs` documentation pages and navigation metadata
- `app/docs` docs rendering routes
- `source.config.ts` Fumadocs source configuration

## Notes

- This site contains the self-hosting and deployment instructions for Temetro.
- MDX code fences should use supported Shiki languages.
