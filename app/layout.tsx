import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import ComingSoon from "./components/system/ComingSoon";
import ScrollToTop from "./components/ui/ScrollToTop";
import { Sora, IBM_Plex_Mono } from "next/font/google"
import Cursor from "./components/ui/Cursor";

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
  title: "Devlync - tech company",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K48PWKWT');`}
      </Script>
      <body
        className={`
          ${sora.variable} ${plexMono.variable}
          antialiased
          bg-light-warm dark:bg-dark
        `}
      >
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
