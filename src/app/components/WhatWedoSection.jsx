import React from "react";
import { geistSans } from "../layout";
import HorizontalCards from "./HorizontalCards";

export default function WhatWedoSection() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <p
            className={`${geistSans.className} uppercase font-normal text-xs sm:text-sm md:text-base text-[#818181]`}
          >
            WHAT WE DO
          </p>
        </div>
        <div className="my-6 sm:my-8 mx-4 flex flex-col justify-center items-center text-center tracking-[-0.04em]">
          <p
            className={`${geistSans.className} font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black leading-tight`}
          >
            Design & Code, delivered
          </p>
          <p
            className={`${geistSans.className} font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black leading-tight`}
          >
            flawless from 0 to 1
          </p>
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8 flex justify-center items-center text-center tracking-[-0.04em]">
          <p
            className={`${geistSans.className} text-[#585858] text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl leading-relaxed`}
          >
            One squad, four expert lanes. Pick the pieces you need or let
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="sm:hidden"> </span>
            us run the whole playbook from concept to launch.
          </p>
        </div>
        <div>
            <HorizontalCards/>
        </div>
      </div>
    </>
  );
}
