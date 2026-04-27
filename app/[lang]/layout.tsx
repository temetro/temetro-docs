import { notFound } from "next/navigation";
import { RootProvider } from "fumadocs-ui/provider/next";
import { docsI18n, isDocLocale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isDocLocale(lang)) {
    notFound();
  }

  return (
    <RootProvider i18n={docsI18n.provider(lang)} theme={{ enabled: false }}>
      {children}
    </RootProvider>
  );
}
