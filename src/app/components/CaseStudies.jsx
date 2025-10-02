import React from "react";
import { geistSans } from "../layout";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function CaseStudies() {
  return (
    <>
      <div id="case-studies" className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <p
            className={`${geistSans.className} mt-3 lg:mt-6 uppercase font-normal text-xs sm:text-sm md:text-[18px] text-[#818181]`}
          >
            Case Studies
          </p>
        </div>
        <div className="my-1 sm:my-3 mx-4 flex flex-col justify-center items-center text-center ">
          <p
            className={`${geistSans.className} tracking-[-0.04em] leading-[100%] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[50px]  text-black`}
          >
            Results that speak for themselves
          </p>
        </div>
        <div className="mb-2 sm:mb-8 mx-4 sm:mx-6 lg:mx-8 flex justify-center items-center text-center ">
          <p
            className={`${geistSans.className} text-[#585858] tracking-[-0.04em] text-lg sm:text-xl md:text-[21px] max-w-4xl leading-[120%]`}
          >
            Real projects with measurable outcomes. See how clear branding and
            product UX helped
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="sm:hidden"> </span>
            teams ship, grow, and raise.
          </p>
        </div>
        <div className="mb-4">
          <div className="flex justify-center items-center mt-2 md:mt-4 relative">
            <CldImage
              className="w-full h-[240px] sm:h-full lg:h-1/3 rounded-[12px] md:rounded-[20px] object-cover"
              src={"https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759244054/case0_x9yaf0.png"}
              width={1000}
              height={200}
              alt="case1"
              quality="auto"
              format="auto"
            />
            <div className="absolute w-full bottom-0 left-0 p-6 flex flex-col min-[992px]:flex-row min-[992px]:items-end items-start ">
              <p
                className={`${geistSans.className} flex-1 leading-[100%] text-white tracking-[-0.04em] font-normal text-base sm:text-2xl md:text-[34px]`}
              >
                How Arch Raised{" "}
                <span className="font-medium leading-[100%] text-[#FF9900] text-xl sm:text-3xl md:text-[47px]">
                  $20M+
                </span>{" "}
                and Grew to
                <br />{" "}
                <span className="font-medium leading-[100%] text-[#FF9900] text-xl sm:text-3xl md:text-[47px]">
                  {" "}
                  500K+
                </span>{" "}
                Followers with Design People Believe In
              </p>
              <Link href={"/arch"}>
                <div className="max-[992px]:mt-2 bg-gradient-to-b from-white to-[#C1C1C1] w-fit rounded-full p-0.5 overflow-hidden transition-transform duration-300 hover:scale-[1.03] will-change-transform transform-gpu group">
                  <div className="relative cursor-pointer w-fit flex items-center gap-1 px-1.5 py-1 sm:px-4 sm:py-3 rounded-full bg-gradient-to-b from-[#C1C1C1] to-white ">
                    {/* Button Text */}
                    <button
                      className={`tracking-[-0.04em]  leading-[130%] cursor-pointer relative z-10 ${geistSans.className} text-black text-sm sm:text-base font-medium`}
                    >
                      Read Case Study
                    </button>

                    {/* Arrow Bubble with hover nudge */}
                    <div className=" cursor-pointer relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                      <FaArrowRight
                        color="#000000"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
