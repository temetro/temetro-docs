import { notFound } from "next/navigation";
import { buildWellKnownHeaders } from "@/lib/ai";
import { isDocLocale } from "@/lib/i18n";
import { source } from "@/lib/source";

export const dynamic = "force-static";

export function generateStaticParams() {
  return source.generateParams("slug", "lang").map(({ lang }) => ({ lang }));
}

export async function GET(_: Request, context: { params: Promise<{ lang: string }> }) {
  const { lang } = await context.params;

  if (!isDocLocale(lang)) {
    notFound();
  }

  const page = source.getPage([], lang);
  if (!page) {
    notFound();
  }

  return new Response(await page.data.getText("processed"), {
    headers: buildWellKnownHeaders("text/markdown; charset=utf-8")
  });
}
