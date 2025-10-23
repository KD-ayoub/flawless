"use client";

import React, { useRef } from "react";
import { geistSans } from "../layout";
import Link from "next/link";
import CircularGallery from "./Circular";
import BelowFooter from "./BelowFooter";
import useDetectScroll from "@smakss/react-scroll-direction";
import { useElementScrollProgress } from "../hooks/useElementScrollProgress";

export default function Footer() {
  const footerRef = useRef(null);
  // const res = useDetectScroll();
  // const maxScale = 10; // Maximum scale value
  // const scaleValue = Math.min(res.scrollPosition.top / 1200, 10000);
  const progress = useElementScrollProgress(footerRef);
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
      <footer ref={footerRef} id="footerRef" className="">
        <div>
          <div className="mx-auto max-w-7xl px-4 py-1.5 md:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2" style={{
                transform: `translateY(${progress * 4}vh)`,
              }}>
                  <div className="w-6 h-6 bg-gradient-to-br from-[#9876EC] to-[#6B46C1] rounded-md flex items-center justify-center">
                    <span
                      className={`${geistSans.className} text-white font-bold text-xs`}
                    >
                      F
                    </span>
                  </div>
                  <span
                    className={`${geistSans.className} font-semibold text-black`}
                  >
                    Flawless
                  </span>
                </div>
                <span
                  className={`${geistSans.className} text-[#0E0E0F]/50 text-sm`}
                >
                  © 2025 All rights reserved.
                </span>
              </div>

              <div className="flex items-center gap-6">
                <Link
                  href="/privacy-policy"
                  className={`${geistSans.className} text-[#0E0E0F]/50 hover:text-[#9876EC] transition-colors text-sm`}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className={`${geistSans.className} text-[#0E0E0F]/50 hover:text-[#9876EC] transition-colors text-sm`}
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* <BelowFooter scaleValue={progress} /> */}
        </div>
      </footer>
      {/* </div> */}
    </>
  );
}
