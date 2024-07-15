import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { structuredData, googleAnalyticsID } from "@data";
import { GoogleAnalytics } from "@next/third-parties/google";

import {
  Inter as SansFont,
  JetBrains_Mono as MonoFont,
} from "next/font/google";

const sans = SansFont({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const mono = MonoFont({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timrodz.dev"),
  title: "Juan Rodríguez Morais - Portfolio",
  description: `Juan is a Software Engineer with 6+ years of professional experience, primarily 
  focusing on SaaS products for small to medium-sized businesses (including startups). He is located in 
  Auckland, New Zealand, working at Futureverse as a Senior Software Engineer. Juan's preferred tech 
  stack is TypeScript, React, Node, AWS, and Elixir + Phoenix. He also has experience with leading 
  developer teams. Contact Juan at juan@timrodz.dev
    `,
  authors: [
    { name: "Juan Alejandro Rodriguez Morais", url: "https://www.timrodz.dev" },
  ],
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cx(sans.variable, mono.variable)}>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <GoogleAnalytics gaId={googleAnalyticsID} />
      <body className="antialiased">{children}</body>
    </html>
  );
}
