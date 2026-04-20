import type { Metadata } from "next";
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
      <body
        className={`
          ${sora.variable} ${plexMono.variable}
          antialiased
          bg-light-warm dark:bg-dark
        `}
      >
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
