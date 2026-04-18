import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alderfi.org"),
  title: "Alderfi — AI-Native Personal Finance, Open Source",
  description:
    "Your AI financial assistant. Open source. Self-hosted. A conversational CFO built on MCP — private by design, portable by default, auditable always.",
  openGraph: {
    title: "Alderfi — AI-Native Personal Finance, Open Source",
    description:
      "Your AI financial assistant. Open source. Self-hosted. Private by design, portable by default, auditable always.",
    url: "https://alderfi.org",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alderfi",
    description:
      "Open-source, self-hosted AI personal finance. Conversational CFO built on MCP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Force dark mode by default
    <html lang="en" className="dark">
      <body>
        {children}
        {/* Vercel Analytics — only active on Vercel deployments, no-ops otherwise */}
        <Script src="/_vercel/insights/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
