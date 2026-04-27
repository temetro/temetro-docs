import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { GitBranch } from "lucide-react";
import { DocsThemeSwitch } from "@/components/docs-theme-switch";
import type { DocLocale } from "@/lib/i18n";
import { WORKSPACE_VERSION_LABEL } from "@/lib/version";

type DocsBaseOptions = BaseLayoutProps & Pick<DocsLayoutProps, "tabs" | "tabMode">;

const layoutCopy: Record<DocLocale, { dashboard: string; deploy: string; latest: string }> = {
  en: {
    dashboard: "Dashboard",
    deploy: "Deploy",
    latest: "Latest"
  },
  ar: {
    dashboard: "لوحة التحكم",
    deploy: "النشر",
    latest: "الأحدث"
  },
  fr: {
    dashboard: "Tableau de bord",
    deploy: "Déploiement",
    latest: "Dernière"
  },
  sw: {
    dashboard: "Dashibodi",
    deploy: "Usambazaji",
    latest: "Toleo la hivi karibuni"
  },
  so: {
    dashboard: "Dashboard",
    deploy: "Dejin",
    latest: "Ugu dambeeyay"
  },
  am: {
    dashboard: "ዳሽቦርድ",
    deploy: "ማሰማሪያ",
    latest: "የቅርብ ጊዜ"
  },
  ha: {
    dashboard: "Dashboard",
    deploy: "Turawa",
    latest: "Na baya"
  }
};

export function baseOptions(locale: DocLocale): DocsBaseOptions {
  const copy = layoutCopy[locale];

  return {
    i18n: true,
    githubUrl: "https://github.com/temetro/temetro-docs",
    slots: {
      themeSwitch: DocsThemeSwitch
    },
    themeSwitch: {
      enabled: true,
      mode: "light-dark"
    },
    tabMode: "auto",
    tabs: [
      {
        title: `${WORKSPACE_VERSION_LABEL} (${copy.latest})`,
        url: `/${locale}/docs`,
        icon: <GitBranch className="size-4" />
      }
    ],
    nav: {
      title: "Temetro Docs",
      url: `/${locale}/docs`
    },
    links: [
      {
        text: copy.dashboard,
        url: "https://github.com/temetro/temetro"
      },
      {
        text: copy.deploy,
        url: "https://github.com/temetro/temetro-deploy"
      }
    ]
  };
}
