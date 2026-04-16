import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// NAME PENDING HELA-449: Update the three title/description strings below once
// the product name is resolved.
export const metadata: Metadata = {
  title: "{{PROJECT_NAME}} — AI-Native Personal Finance, Open Source",
  description:
    "Your AI financial assistant. Open source. Self-hosted. A conversational CFO built on MCP — private by design, portable by default, auditable always.",
  openGraph: {
    title: "{{PROJECT_NAME}} — AI-Native Personal Finance, Open Source",
    description:
      "Your AI financial assistant. Open source. Self-hosted. Private by design, portable by default, auditable always.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "{{PROJECT_NAME}}",
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
