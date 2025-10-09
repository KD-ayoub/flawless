"use client";

import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BackgroundLayoutContent from "./components/BackgroundLayoutContent";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";

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
          pathName === "/arch"
            ? "bg-[#0E0E0F]"
            : pathName === "/trustybite"
            ? "bg-trustybite bg-[#FAFAFB]"
            : "bg-[#FAFAFB]"
        } antialiased relative`}
      >
        {pathName === "/trustybite" && (
          <div className="absolute inset-0">
            <CldImage
              className="w-full h-[20%]"
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1760005162/bg-trusty_bes5vv.png"
              }
              width={1000}
              height={600}
              alt="trusty pg"
              quality="auto"
              format="auto"
            />
          </div>
        )}
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
