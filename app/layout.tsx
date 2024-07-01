import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { structuredData, socials, googleAnalyticsID } from "data";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://timrodz.dev"),
  title: "Juan Alejandro Morais - Portfolio",
  description: `Juan Morais is a Software Engineer with 6+ years of professional experience, primarily 
  focusing on SaaS products for small to medium-sized businesses (including startups). He is located in 
  Auckland, New Zealand, working at Futureverse as a Senior Software Engineer. Juan's preferred tech 
  stack is TypeScript, React, Node, AWS, and Elixir + Phoenix. He also has experience with leading 
  developer teams. Contact Juan at timrodz@icloud.com
    `,
  authors: [
    { name: "Juan Alejandro Rodriguez Morais", url: "https://www.timrodz.dev" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <GoogleAnalytics gaId={googleAnalyticsID} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
