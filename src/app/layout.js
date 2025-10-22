"use client";

import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BackgroundLayoutContent from "./components/BackgroundLayoutContent";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import LenisWrapper from "./components/LenisWrapper";
import ScrollReset from "./components/ScrollReset";
import { Suspense } from "react";
import useHideBottomBlur from "./hooks/useHideBottomBlur";
import GlassEffect from "./components/GlassEffect";

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
  useHideBottomBlur();
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
              draggable={false}
            />
          </div>
        )}
        <div className="">
          <BackgroundLayoutContent />
          {/* Foreground content */}

          <Suspense>
            <LenisWrapper>
              <ScrollReset />
              <div
                className={`relative z-10 mx-auto max-w-[1840px] text-black`}
              >
                <Header />
                {/* <GlassEffect/> */}
                {children}
              </div>
            </LenisWrapper>
          </Suspense>
        </div>
        <div id="bottom-fade-sentinel" className="h-5 hidden lg:block" />
        <div id="bottom-fade" className="fixed h-32 hidden lg:block transition-opacity duration-300 pointer-events-none w-full bg-transparent bottom-0 z-50">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 z-[1] backdrop-blur-[0.5px] pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 z-[2] backdrop-blur-[0.156px] pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 z-[3] backdrop-blur-[0.312px] pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 z-[4] backdrop-blur-[0.625px] pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 z-[5] backdrop-blur-[1.25px] pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 z-[6] backdrop-blur-[2.5px] pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 z-[7] backdrop-blur-[5px] pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)]"></div>
            <div className="absolute inset-0 z-[8] backdrop-blur-[10px] pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_80%,rgba(0,0,0,1)_100%)]"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
