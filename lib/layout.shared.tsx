import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/temetro/temetro-docs",
    nav: {
      title: "Temetro Docs"
    },
    links: [
      {
        text: "Dashboard",
        url: "https://github.com/temetro/temetro"
      },
      {
        text: "Deploy",
        url: "https://github.com/temetro/temetro-deploy"
      }
    ]
  };
}
