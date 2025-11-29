// "use client";

import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BackgroundLayoutContent from "./components/BackgroundLayoutContent";
// import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import LenisWrapper from "./components/LenisWrapper";
import ScrollReset from "./components/ScrollReset";
// import { Suspense, useEffect, useState } from "react";
import useHideBottomBlur from "./hooks/useHideBottomBlur";
import GlassEffect from "./components/GlassEffect";
import Footer from "./components/Footer";
import Script from "next/script";
import ClientShell from "./components/ClientShell";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const metadata = {
  title: "Flawless Design | Branding, Motion, and Web Development for Web3 and AI",
  description:
    "Flawless Design helps founders ship standout brands, product UI, motion content, and high-performing websites. Strategy to execution, built for Web3 and AI teams.",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en" className="">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:site_name" content="Flawless Design" />
        <meta property="og:title" content={metadata.title} />
        <meta name="twitter:title" content={metadata.title} />
        {/* <meta name="google-site-verification" content="j9rPmedqS4rKs7rL3hUyxO7-2_b9kUi401ekPh1YWfQ" /> old */}
        <meta
          name="google-site-verification"
          content="E_pID0C5FOUVYSORdix769JON1Ax8J_fXWKgQuS-c5g"
        />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        {/* GA4 loader */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XHBSP08MJM"
          strategy="afterInteractive"
        />
        {/* GA4 init (disable auto page_view to avoid duplicates. { send_page_view: false }) */}
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XHBSP08MJM', { send_page_view: false });
          `}
        </Script>
      </head>
      <body
        className={`antialiased min-h-screen overflow-x-hidden `}
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
