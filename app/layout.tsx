import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Temetro Docs",
  description: "Documentation for the Temetro hospital management platform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
