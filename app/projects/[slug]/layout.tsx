import { Inter } from "next/font/google";
import "./styles.css";
import Script from "next/script";
import { structuredData, googleAnalyticsID } from "@data";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <GoogleAnalytics gaId={googleAnalyticsID} />
    </html>
  );
}
