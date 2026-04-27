import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import type { DocLocale } from "@/lib/i18n";

const layoutCopy: Record<DocLocale, { dashboard: string; deploy: string }> = {
  en: {
    dashboard: "Dashboard",
    deploy: "Deploy"
  },
  ar: {
    dashboard: "لوحة التحكم",
    deploy: "النشر"
  },
  fr: {
    dashboard: "Tableau de bord",
    deploy: "Déploiement"
  },
  sw: {
    dashboard: "Dashibodi",
    deploy: "Usambazaji"
  },
  so: {
    dashboard: "Dashboard",
    deploy: "Dejin"
  },
  am: {
    dashboard: "ዳሽቦርድ",
    deploy: "ማሰማሪያ"
  },
  ha: {
    dashboard: "Dashboard",
    deploy: "Turawa"
  }
};

export function baseOptions(locale: DocLocale): BaseLayoutProps {
  const copy = layoutCopy[locale];

  return {
    i18n: true,
    githubUrl: "https://github.com/temetro/temetro-docs",
    themeSwitch: {
      enabled: false
    },
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
