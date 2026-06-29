import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {/* white fox mark; inverted to black in light mode */}
          <Image
            src="/logo-dark.png"
            alt=""
            width={34}
            height={34}
            className="invert dark:invert-0"
          />
          <span className="font-semibold">{appName}</span>
        </>
      ),
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        // `/docs` is also the index page ("Welcome to temetro"), so the default
        // url match would highlight this link AND that page at once. Disable the
        // link's own active state so only the page in the tree highlights.
        active: 'none',
      },
      {
        text: 'API Reference',
        url: '/docs/api',
        active: 'none',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
