# Contributing to temetro docs

Thanks for helping improve the temetro documentation! This repo is the [Fumadocs](https://fumadocs.vercel.app/) site that powers the temetro user guides, API reference, and admin docs.

## Getting started

1. Fork the repository and create a branch from `main`.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev` (runs on `localhost:3000`)
4. Edit or add `.mdx` files under `content/docs/`.
5. Open a pull request.

## Content structure

```
content/docs/
  guides/      # user-facing how-to guides
  api/         # API reference pages
  roadmap.mdx  # project roadmap
```

If you add a new page, add it to the sidebar config as well.

## Writing style

- Clear, direct sentences — write for clinicians and developers alike
- Keep examples accurate and in sync with the actual product behavior
- One idea per section; use headings liberally

## Reporting issues

Use the [documentation request template](.github/ISSUE_TEMPLATE/feature_request.md) for missing or unclear content, or the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) for errors.

## Security issues

Do **not** open a public issue for security vulnerabilities. See [SECURITY.md](SECURITY.md).

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md).
