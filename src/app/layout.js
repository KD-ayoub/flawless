"use client";

import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BackgroundLayoutContent from "./components/BackgroundLayoutContent";
import { usePathname } from "next/navigation";

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
  title: "Flawless | Branding, Motion, and Web Development for Web3 and AI",
  description:
    "Flawless helps founders ship standout brands, product UI, motion content, and high-performing websites. Strategy to execution, built for Web3 and AI teams.",
};

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en" className="">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${
          pathName === "/arch" ? "bg-[#0E0E0F]" : "bg-[#FAFAFB]"
        } antialiased relative`}
      >
        <div className="">
          <BackgroundLayoutContent />
          {/* Foreground content */}

          <div className={`relative z-10 mx-auto max-w-[1840px] text-black`}>
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
