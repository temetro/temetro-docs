import { llms } from "fumadocs-core/source";
import type { Page } from "fumadocs-core/source";
import { DEFAULT_DOC_LOCALE, DOC_LANGUAGES, type DocLocale } from "@/lib/i18n";
import { source } from "@/lib/source";

const DOCS_SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_DOCS_URL ?? "http://localhost:3001");

type DocPage = Page<{
  getText?: (type: "raw" | "processed") => Promise<string>;
  title?: string;
  description?: string;
}>;

const SECTION_TITLES: Array<{
  key: string;
  title: string;
}> = [
  { key: "root", title: "Overview" },
  { key: "getting-started", title: "Getting Started" },
  { key: "self-hosting", title: "Self-Hosting" },
  { key: "features", title: "Features" },
  { key: "api", title: "API" }
];

function normalizeSiteUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function toAbsoluteUrl(path: string): string {
  return `${DOCS_SITE_URL}${path}`;
}

function toMarkdownUrl(page: DocPage): string {
  if (page.slugs.length === 0) {
    return toAbsoluteUrl(`/llms-pages/${page.locale ?? DEFAULT_DOC_LOCALE}`);
  }

  return toAbsoluteUrl(`/llms-pages/${page.locale ?? DEFAULT_DOC_LOCALE}/${page.slugs.join("/")}`);
}

function getSectionKey(page: DocPage): string {
  return page.slugs[0] ?? "root";
}

function getPrimaryPages(locale: DocLocale = DEFAULT_DOC_LOCALE): DocPage[] {
  return source.getPages(locale) as DocPage[];
}

function formatPageBullet(page: DocPage): string {
  const description = page.data.description?.trim();
  const title = page.data.title ?? page.url;

  if (description) {
    return `- [${title}](${toMarkdownUrl(page)}): ${description}`;
  }

  return `- [${title}](${toMarkdownUrl(page)})`;
}

export function buildLlmsIndex(): string {
  const pages = getPrimaryPages();
  const pageGroups = new Map<string, DocPage[]>();

  for (const page of pages) {
    const key = getSectionKey(page);
    const existing = pageGroups.get(key) ?? [];
    existing.push(page);
    pageGroups.set(key, existing);
  }

  const lines = [
    "# Temetro Docs",
    "",
    "> Documentation for the Temetro hospital management platform, including installation, configuration, self-hosting, feature overviews, and authentication basics.",
    "",
    "Use the English pages below as the canonical source for AI ingestion. Clean Markdown versions of docs pages are available by appending `.md` to doc URLs.",
    ""
  ];

  for (const section of SECTION_TITLES) {
    const entries = pageGroups.get(section.key);
    if (!entries || entries.length === 0) continue;

    lines.push(`## ${section.title}`, "");

    for (const page of entries) {
      lines.push(formatPageBullet(page));
    }

    lines.push("");
  }

  lines.push("## Optional", "");
  lines.push(
    ...DOC_LANGUAGES.filter((locale) => locale !== DEFAULT_DOC_LOCALE).map((locale) => {
      return `- [${getLocaleName(locale)} docs overview](${toAbsoluteUrl(`/${locale}/docs.md`)}): Translated documentation entry point for the ${getLocaleName(locale)} locale.`;
    })
  );
  lines.push("");
  lines.push(`- [Full English context](${toAbsoluteUrl("/llms-full.txt")}): Single-file English Markdown compilation of the main docs.`);

  return lines.join("\n");
}

export async function buildLlmsFull(): Promise<string> {
  const pages = getPrimaryPages();
  const lines = [
    "# Temetro Docs",
    "",
    "> Full English Markdown context for Temetro documentation.",
    "",
    "Prefer `/llms.txt` for quick discovery. This file inlines the processed Markdown for the core English docs pages.",
    ""
  ];

  for (const page of pages) {
    const title = page.data.title ?? page.url;
    const description = page.data.description?.trim();
    const processed = await page.data.getText?.("processed");

    lines.push(`## [${title}](${toMarkdownUrl(page)})`, "");

    if (description) {
      lines.push(`> ${description}`, "");
    }

    lines.push(processed?.trim() ?? "", "", "---", "");
  }

  return lines.join("\n");
}

export function buildWellKnownHeaders(contentType: string): HeadersInit {
  return {
    "content-type": contentType,
    link: `</llms.txt>; rel="alternate"; type="text/plain", </llms-full.txt>; rel="alternate"; type="text/plain"`
  };
}

export function getLocaleName(locale: DocLocale): string {
  const names: Record<DocLocale, string> = {
    en: "English",
    ar: "Arabic",
    fr: "French",
    sw: "Swahili",
    so: "Somali",
    am: "Amharic",
    ha: "Hausa"
  };

  return names[locale];
}
