import type { Metadata } from "next";
import Script from "next/script";
import "./global.css";

export const metadata: Metadata = {
  title: "Temetro Docs",
  description: "Documentation for the Temetro hospital management platform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Script id="docs-theme-init" strategy="beforeInteractive">{`
          (() => {
            const key = "temetro-docs-theme";
            const root = document.documentElement;
            const stored = localStorage.getItem(key) || "system";
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const resolved = stored === "system" ? (systemDark ? "dark" : "light") : stored;
            root.classList.toggle("dark", resolved === "dark");
            root.style.colorScheme = resolved;
            root.dataset.theme = stored;
          })();
        `}</Script>
        {children}
      </body>
    </html>
  );
}
