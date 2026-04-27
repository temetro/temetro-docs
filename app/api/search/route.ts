import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/lib/source";

export const { GET } = createFromSource(source, {
  localeMap: {
    en: "english",
    ar: "arabic",
    fr: "french",
    sw: "english",
    so: "english",
    am: "english",
    ha: "english"
  }
});
