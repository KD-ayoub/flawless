"use client";

import React from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function GlassEffect() {
  const pathName = usePathname();
  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="glass-distortion">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.008"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>
      <div className="glass-card h-20 hidden min-[1000px]:block">
        <div className="relative h-20 rounded-full ">
          <div className="glass-filter "></div>
          <div
            className={`glass-overlay ${
              pathName === "/arch"
                ? "bg-[#171717]/60 border border-[#0C0C0C]"
                : pathName === "/trustybite"
                ? "bg-white/6 border border-white/14 [box-shadow:0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_2px_1px_rgba(255,255,255,0.1)]"
                : "bg-[#FAFAFB]/20 border border-white"
            } `}
          ></div>
          <div className="glass-specular"></div>
        </div>
      </div>
      <div className="glass-card block min-[1000px]:hidden">
        <div className="relative h-full rounded-2xl ">
          <div className="glass-filter "></div>
          <div
            className={`glass-overlay absolute inset-0 ${
              pathName === "/arch"
                ? "bg-[#171717]/60 border border-[#0C0C0C]"
                : pathName === "/trustybite"
                ? "bg-white/6 border border-white/14 [box-shadow:0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_2px_1px_rgba(255,255,255,0.1)]"
                : "bg-[#FAFAFB]/20 border border-white"
            } `}
          ></div>
          <div className="glass-specular"></div>
        </div>
      </div>
    </>
  );
}
