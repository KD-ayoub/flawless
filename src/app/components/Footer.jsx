"use client";

import React from "react";
import { geistSans } from "../layout";
import Link from "next/link";
import CircularGallery from "./Circular";

export default function Footer() {
  return (
    <>
      <div className="relative h-[400px]">
        <div style={{ height: "100%", position: "relative" }}>
          <CircularGallery
            bend={0.6}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
        <footer  className=" md:px-14 w-full absolute -bottom-2 left-1/2 -translate-x-1/2">
          <div className="mx-auto max-w-7xl px-4 py-1.5 md:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
        </footer>
      </div>
    </>
  );
}
