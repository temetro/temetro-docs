import { defineI18n } from "fumadocs-core/i18n";
import { defineI18nUI } from "fumadocs-ui/i18n";

export const DOC_LANGUAGES = ["en", "ar", "fr", "sw", "so", "am", "ha"] as const;
export type DocLocale = (typeof DOC_LANGUAGES)[number];

export const DEFAULT_DOC_LOCALE: DocLocale = "en";

export const docsI18n = defineI18nUI(
  defineI18n({
    languages: [...DOC_LANGUAGES],
    defaultLanguage: DEFAULT_DOC_LOCALE,
    hideLocale: "never",
    parser: "dot",
    fallbackLanguage: DEFAULT_DOC_LOCALE
  }),
  {
    en: {
      displayName: "English"
    },
    ar: {
      displayName: "العربية",
      search: "بحث",
      searchNoResult: "لم يتم العثور على نتائج",
      toc: "في هذه الصفحة",
      tocNoHeadings: "لا توجد عناوين",
      lastUpdate: "آخر تحديث في",
      chooseLanguage: "اختر لغة",
      nextPage: "الصفحة التالية",
      previousPage: "الصفحة السابقة",
      chooseTheme: "السمة",
      editOnGithub: "عدّل على GitHub"
    },
    fr: {
      displayName: "Français",
      search: "Rechercher",
      searchNoResult: "Aucun résultat trouvé",
      toc: "Sur cette page",
      tocNoHeadings: "Aucun titre",
      lastUpdate: "Dernière mise à jour le",
      chooseLanguage: "Choisir une langue",
      nextPage: "Page suivante",
      previousPage: "Page précédente",
      chooseTheme: "Thème",
      editOnGithub: "Modifier sur GitHub"
    },
    sw: {
      displayName: "Kiswahili",
      search: "Tafuta",
      searchNoResult: "Hakuna matokeo yaliyopatikana",
      toc: "Kwenye ukurasa huu",
      tocNoHeadings: "Hakuna vichwa",
      lastUpdate: "Ilisasishwa mwisho tarehe",
      chooseLanguage: "Chagua lugha",
      nextPage: "Ukurasa unaofuata",
      previousPage: "Ukurasa uliopita",
      chooseTheme: "Mandhari",
      editOnGithub: "Hariri kwenye GitHub"
    },
    so: {
      displayName: "Soomaali",
      search: "Raadi",
      searchNoResult: "Wax natiijo ah lama helin",
      toc: "Boggan waxa ku jira",
      tocNoHeadings: "Cinwaanno ma jiraan",
      lastUpdate: "Markii u dambeysay la cusboonaysiiyay",
      chooseLanguage: "Dooro luqad",
      nextPage: "Bogga xiga",
      previousPage: "Bogga hore",
      chooseTheme: "Muuqaal",
      editOnGithub: "Ku sax GitHub"
    },
    am: {
      displayName: "አማርኛ",
      search: "ፈልግ",
      searchNoResult: "ምንም ውጤት አልተገኘም",
      toc: "በዚህ ገጽ ላይ",
      tocNoHeadings: "ርዕሶች የሉም",
      lastUpdate: "መጨረሻ የተዘመነበት",
      chooseLanguage: "ቋንቋ ይምረጡ",
      nextPage: "ቀጣይ ገጽ",
      previousPage: "ያለፈው ገጽ",
      chooseTheme: "ገጽታ",
      editOnGithub: "በGitHub ላይ አርትዕ"
    },
    ha: {
      displayName: "Hausa",
      search: "Bincika",
      searchNoResult: "Ba a sami sakamako ba",
      toc: "A wannan shafin",
      tocNoHeadings: "Babu kanun labarai",
      lastUpdate: "An sabunta na ƙarshe a",
      chooseLanguage: "Zaɓi harshe",
      nextPage: "Shafi na gaba",
      previousPage: "Shafi na baya",
      chooseTheme: "Jigo",
      editOnGithub: "Gyara a GitHub"
    }
  }
);

export function isDocLocale(value: string): value is DocLocale {
  return DOC_LANGUAGES.includes(value as DocLocale);
}
