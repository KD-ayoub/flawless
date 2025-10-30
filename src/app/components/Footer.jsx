"use client";

import React, { useEffect, useRef } from "react";
import { geistSans, instrumentSerif } from "../layout";
import Link from "next/link";
import CircularGallery from "./Circular";
import BelowFooter from "./BelowFooter";
import useDetectScroll from "@smakss/react-scroll-direction";
import { useElementScrollProgress } from "../hooks/useElementScrollProgress";
import { usePathname } from "next/navigation";
import GlassEffect from "./GlassEffect";
import { CldImage } from "next-cloudinary";

export default function Footer() {
  const footerRef = useRef(null);
  // const res = useDetectScroll();
  // const maxScale = 10; // Maximum scale value
  // const scaleValue = Math.min(res.scrollPosition.top / 1200, 10000);
  const progress = useElementScrollProgress(footerRef);
  const pathName = usePathname();
  const belowRainbowRef = useRef(null);

  useEffect(() => {
    const belowRainbowElement = belowRainbowRef.current;

    if (!belowRainbowElement) return;
    // window?.lenis?.on?.("scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Scroll to FAQ section when below-rainbow div is reached
            const faqSection = document.getElementById("faq");

            if (faqSection) {
              console.log("start scrolling");
              // window.lenis.scrollTo("#faq", {
              //   offset: -670, // Scroll to 50px above the section
              //   // duration: 1.5, // Faster scroll
              //   // easing: (t) => t * t * (3 - 2 * t), // Smoother easing
              // });
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: "0px",
      }
    );

    observer.observe(belowRainbowElement);

    return () => {
      observer.unobserve(belowRainbowElement);
    };
  }, []);

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
      <footer id="faq" className="relative z-10">
        {/* <div> */}
        <div className="mx-auto w-full max-w-7xl px-4 py-1.5 md:py-8">
          <div className="hidden md:flex flex-row  justify-between items-center gap-4">
            <div className={`flex items-center gap-4 `}>
              <div
                className="flex items-center gap-2 "
                // style={{
                //   transform: `translateY(${progress * 68}vh)`,
                //   willChange: "transform",
                // }}
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
                // style={{
                //   transform: `translateY(${progress * 45}vh)`,
                //   willChange: "transform",
                // }}
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
                // style={{
                //   transform: `translateY(${progress * 45}vh)`,
                //   willChange: "transform",
                // }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
                // style={{
                //   transform: `translateY(${progress * 68}vh)`,
                //   willChange: "transform",
                // }}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div
            className="flex md:hidden flex-col justify-between items-center gap-4"
            // style={{
            //   transform: `translateY(${progress * 38}vh)`,
            //   willChange: "transform",
            // }}
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
      <section
        ref={footerRef}
        className="relative overflow-hidden mx-auto max-w-[1840px]"
      >
        {/* <div
          className="mx-3 relative"
          style={{
            height: `${progress * 150}%`,
          }}
        >
          <GlassEffect height="h-full" border="rounded-2xl" />
        </div> */}
        <div className=" -z-10 pointer-events-none">
          {/* <BelowFooter scaleValue={progress} /> */}
          <div
            style={{
              transform: `perspective(100px) rotateX(${
                (180 - progress * 825) / 4
              }deg)`,
              lineHeight: "0.7",
            }}
            className={`text-[21vw] min-[1840px]:text-[400px] ${
              geistSans.className
            }  ${
              pathName === "/arch" ? "text-white/20" : "text-[#0E0E0F]/20"
            } text-center w-full h-[70%] md:h-full  font-black  perspective-origin-bottom flex justify-end md:justify-center flex-col`}
          >
            Flawless
          </div>
        </div>
        {/* <div
          id="below-rainbow"
          ref={belowRainbowRef}
          className="absolute bottom-0 w-full h-3 bg-red-600"
        /> */}
      </section>
      {/* </div> */}
    </>
  );
}
