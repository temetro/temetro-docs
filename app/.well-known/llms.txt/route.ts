import { buildLlmsIndex, buildWellKnownHeaders } from "@/lib/ai";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsIndex(), {
    headers: buildWellKnownHeaders("text/plain; charset=utf-8")
  });
}
