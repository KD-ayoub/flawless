import React from "react";
import { geistSans } from "../layout";
import Image from "next/image";
import shape3 from "@/app/assets/svg/shape3.svg"
import shape4 from "@/app/assets/svg/shape4.svg"
import GreatSectionCard from "./GreatSectionCard";

export default function GreatIdeas() {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center">
          <p
            className={`${geistSans.className} uppercase font-normal text-xs sm:text-sm md:text-base text-[#818181]`}
          >
            In a scroll-first world
          </p>
        </div>
        <div className="my-6 sm:my-8 mx-4 flex flex-col justify-center items-center text-center tracking-[-0.04em]">
          <p
            className={`${geistSans.className} font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black leading-tight`}
          >
            Great ideas start the story.
          </p>
          <p
            className={`${geistSans.className} font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black leading-tight`}
          >
            Results seal the deal.
          </p>
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8 flex justify-center items-center text-center tracking-[-0.04em]">
          <p
            className={`${geistSans.className} text-[#585858] text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl leading-relaxed`}
          >
            We craft fast-loading, conversion-ready experiences that turn
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="sm:hidden"> </span>
            instant impressions into measurable growth.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-10 -z-10">
            <Image src={shape3} width={200} height={200} alt="shape3" />
          </div>
          <div>
            <GreatSectionCard/>
          </div>
          <div className="absolute right-10 bottom-0 -z-10">
            <Image src={shape4} width={200} height={200} alt="shape3" />
          </div>
        </div>
      </div>
    </>
  );
}
