import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/logo-light.png"
            alt=""
            width={26}
            height={26}
            className="rounded-md dark:hidden"
          />
          <Image
            src="/logo-dark.png"
            alt=""
            width={26}
            height={26}
            className="hidden rounded-md dark:block"
          />
          <span className="font-semibold">{appName}</span>
        </>
      ),
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
      },
      {
        text: 'API Reference',
        url: '/docs/api',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
