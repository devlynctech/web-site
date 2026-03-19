import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Syne, DM_Sans } from "next/font/google";
import ComingSoon from "./components/system/ComingSoon";
import ScrollToTop from "./components/ui/ScrollToTop";

const isMaintenance = process.env.NEXT_PUBLIC_SITE_STATUS === "maintenance";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

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
          ${syne.variable} ${dmSans.variable}
          antialiased
          bg-light-warm dark:bg-dark
        `}
      >
        <ThemeProvider>
          {isMaintenance ? (
            <main className="h-dvh overflow-hidden">
              <ComingSoon />
            </main>
          ) : (
            <>
              <Header />
              <main className="border-l border-orange">{children}</main>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
