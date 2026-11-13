import type { Metadata, MetadataRoute } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import ComingSoon from "./components/system/ComingSoon";
import ScrollToTop from "./components/ui/ScrollToTop";
import { Sora, IBM_Plex_Mono } from "next/font/google"
import Cursor from "./components/ui/Cursor";
import JsonLd from "./components/JsonLd/JsonLd";
import { GoogleTagManager } from "@next/third-parties/google";


const isMaintenance = process.env.NEXT_PUBLIC_SITE_STATUS === "maintenance";


const sora = Sora({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  variable: "--font-sora"
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono"
})
 
export const metadata: Metadata = {
  metadataBase: new URL("https://devlynctech.com"),

    verification: {
    google: "oIX_z5ec9afBN_RgwuUXq2JKWnIow8-fZ5lKe2oQfi0",
  },
  title: {
    default: "Software Development & Staff Augmentation | Devlync Tech",
    template: "%s | Devlync",
  },
  description: "Devlync Tech is a technology partner serving the U.S., Europe, and Central America. We specialize in custom software solutions, web development, mobile apps, staffing solutions, and digital transformation services.",
  
  
  keywords: [
    "Devlync",
    "Devlynctech",
    "devlync tech",
    "devlync",
    "devlynctech",
    "DevlyncTech",
    "Devlync Tech",
    "technology company",
    "custom software solutions",
    "web development",
    "mobile apps",
    "staffing solutions",
    "digital transformation services",
    "software development",
    "app development",
    "ERP solutions",
    "CRM solutions",
    "react development",
    "web application development",
    "wordpress development",
    "technology partner",
    "software engineering",
    "technology services",
  ],
  openGraph: {
    title: "Devlync Tech - Software Development & Staff Augmentation",
    description: "Custom software, web development, and digital solutions for growing businesses.",
    url: "https://devlynctech.com",
    siteName: "Devlync Tech",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/Principal.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
      
        className={`
          ${sora.variable} ${plexMono.variable}
          antialiased
          bg-light-warm dark:bg-dark
        `}
      >
         <GoogleTagManager gtmId="GTM-K48PWKWT" />
        <JsonLd />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K48PWKWT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Cursor />
        <ThemeProvider >
          {isMaintenance ? (
            <main className="h-dvh overflow-hidden">
              <ComingSoon />
            </main>
          ) : (
            <>
              <Header />
              <main className="border-l border-orange pt-[100px]">{children}</main>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </ThemeProvider>
      
      </body>
    </html>
  );
}
