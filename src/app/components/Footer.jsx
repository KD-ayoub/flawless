"use client";

import React, { useEffect, useRef } from "react";
import { geistSans } from "../layout";
import Link from "next/link";
import CircularGallery from "./Circular";
import BelowFooter from "./BelowFooter";
import useDetectScroll from "@smakss/react-scroll-direction";
import { useElementScrollProgress } from "../hooks/useElementScrollProgress";
import { usePathname } from "next/navigation";
import GlassEffect from "./GlassEffect";

export default function Footer() {
  const footerRef = useRef(null);
  // const res = useDetectScroll();
  // const maxScale = 10; // Maximum scale value
  // const scaleValue = Math.min(res.scrollPosition.top / 1200, 10000);
  const progress = useElementScrollProgress(footerRef);
  const pathName = usePathname();

  // useEffect(() => {
  //   const belowRainbow = document.getElementById("below-rainbow");
  //   if (belowRainbow) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       if (entry.isIntersecting) {
  //         const scrollTofooterRef = document
  //           .getElementById("footerRef")
  //           .getBoundingClientRect();
  //         console.log("intersection", scrollTofooterRef.left, scrollTofooterRef.top) 
  //         window.scrollTo({
  //           top: scrollTofooterRef.top - 300,
  //           behavior: "smooth"
  //         });
  //         observer.unobserve(belowRainbow);
  //       }
  //     });
  //     observer.observe(belowRainbow);
  //     return () => {
  //       observer.disconnect();
  //     };
  //   }
  // }, []);

  return (
    <>
      {/* <div className="relative h-[400px]"> */}
      {/* <div style={{ height: "100%", position: "relative" }}>
          <CircularGallery
            bend={0.6}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div> */}
      <footer id="footerRef" className="relative z-10">
        {/* <div> */}
        <div className="mx-auto w-full max-w-7xl px-4 py-1.5 md:py-8">
          <div className="hidden md:flex flex-row  justify-between items-center gap-4">
            <div className={`flex items-center gap-4 `}>
              <div
                className="flex items-center gap-2 "
                style={{
                  transform: `translateY(${progress * 68}vh)`,
                  willChange: "transform",
                }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-[#9876EC] to-[#6B46C1] rounded-md flex items-center justify-center">
                  <span
                    className={`${geistSans.className} text-white font-bold text-xs`}
                  >
                    F
                  </span>
                </div>
                <span
                  className={`${geistSans.className} font-semibold ${
                    pathName === "/arch" ? "text-white" : "text-black"
                  }`}
                >
                  Flawless
                </span>
              </div>
              <span
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } text-sm`}
                style={{
                  transform: `translateY(${progress * 45}vh)`,
                  willChange: "transform",
                }}
              >
                © 2025 All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
                style={{
                  transform: `translateY(${progress * 45}vh)`,
                  willChange: "transform",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
                style={{
                  transform: `translateY(${progress * 68}vh)`,
                  willChange: "transform",
                }}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div
            className="flex md:hidden flex-col justify-between items-center gap-4"
            style={{
              transform: `translateY(${progress * 38}vh)`,
              willChange: "transform",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-[#9876EC] to-[#6B46C1] rounded-md flex items-center justify-center">
                  <span
                    className={`${geistSans.className} text-white font-bold text-xs`}
                  >
                    F
                  </span>
                </div>
                <span
                  className={`${geistSans.className} font-semibold ${
                    pathName === "/arch" ? "text-white" : "text-black"
                  }`}
                >
                  Flawless
                </span>
              </div>
              <span
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } text-sm`}
              >
                © 2025 All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* <BelowFooter scaleValue={progress} /> */}
        {/* </div> */}
      </footer>
      {/* spacer to create scrollable distance for the scale animation */}
      <section ref={footerRef} className="relative h-[60vh]">
        <div className="mx-3 relative" style={{
          height: `${progress * 150}%`
        }}>
        </div>
        <div className="sticky bottom-0 h-[65vh] -z-10 pointer-events-none">
          <BelowFooter scaleValue={progress} />
        </div>
        {/* <div
          id="below-rainbow"
          className="absolute bottom-0 w-full h-3 bg-red-600"
        /> */}
      </section>
      {/* </div> */}
    </>
  );
}
