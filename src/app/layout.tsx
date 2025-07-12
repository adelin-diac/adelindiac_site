import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import config from "@/config";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { StarField } from "@/components/layout/star-field";
import { getSEOTags } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = getSEOTags({
  title: "Adelin | Founder & Engineer",
  description:
    "Founder & Software Engineer. I build cool things. I'm curious about everything.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          async
          defer
          data-website-id={config.umami.websiteId}
          data-domains={config.umami.allowedDomains}
          src="https://umami.adelindiac.site/script.js"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Adelin Diac" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <StarField
          starCount={200}
          interactionRadius={100}
          className="opacity-40"
        />
        <main className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
