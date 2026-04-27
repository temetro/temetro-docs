import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";
import { docs } from "collections/server";
import { docsI18n } from "@/lib/i18n";

export const source = loader({
  baseUrl: "/docs",
  i18n: docsI18n,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()]
});
