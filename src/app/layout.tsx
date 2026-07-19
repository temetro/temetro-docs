import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { JsonLd } from '@/components/json-ld';

const inter = Inter({
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

// Absolute base for canonical/OG URLs and structured data. Mirrors robots.ts /
// sitemap.ts; override per deployment with NEXT_PUBLIC_SITE_URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.temetro.com';
const title = 'temetro docs';
const description =
  'Documentation for temetro — an open-source clinical tool that puts an AI chat between clinicians and patient data.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | temetro docs',
    default: title,
  },
  description,
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: title,
    title,
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

// Identity structured data: the docs site itself (WebSite) and the org behind it
// (Organization, pointing at the main site + GitHub). Helps search engines tie
// the docs to temetro and understand what it is.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: title,
      url: siteUrl,
      description,
      publisher: { '@type': 'Organization', name: 'temetro', url: 'https://www.temetro.com' },
    },
    {
      '@type': 'Organization',
      name: 'temetro',
      url: 'https://www.temetro.com',
      logo: 'https://www.temetro.com/temetro-logo.png',
      sameAs: ['https://github.com/temetro/temetro'],
    },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <JsonLd data={jsonLd} />
        <RootProvider theme={{ defaultTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  );
}
