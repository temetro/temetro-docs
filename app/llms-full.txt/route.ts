import { buildLlmsFull, buildWellKnownHeaders } from "@/lib/ai";

export const dynamic = "force-static";

export async function GET() {
  return new Response(await buildLlmsFull(), {
    headers: buildWellKnownHeaders("text/plain; charset=utf-8")
  });
}
