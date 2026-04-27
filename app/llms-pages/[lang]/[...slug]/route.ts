import { notFound } from "next/navigation";
import { buildWellKnownHeaders } from "@/lib/ai";
import { isDocLocale } from "@/lib/i18n";
import { source } from "@/lib/source";

export const dynamic = "force-static";

export function generateStaticParams() {
  return source.generateParams("slug", "lang");
}

export async function GET(
  _: Request,
  context: { params: Promise<{ lang: string; slug: string[] }> }
) {
  const { lang, slug } = await context.params;

  if (!isDocLocale(lang)) {
    notFound();
  }

  const page = source.getPage(slug, lang);
  if (!page) {
    notFound();
  }

  return new Response(await page.data.getText("processed"), {
    headers: buildWellKnownHeaders("text/markdown; charset=utf-8")
  });
}
