import { Inter } from "next/font/google";
import "./styles.css";
import Script from "next/script";
import { structuredData, googleAnalyticsID } from "@data";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { Footer } from "@components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className="mx-4 md:mx-10 h-full flex items-center justify-start lg:justify-center">
            {/* <p>🦥</p> */}
            <Link href="/" className="text-xl font-medium">
              Juan Alejandro Morais
            </Link>
            {/* <p>✨</p> */}
          </div>
        </nav>
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
