"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { geistSans, instrumentSerif } from "../fonts";
import { FaArrowRight } from "react-icons/fa6";
import ToogleSwitch from "./ToogleSwitch";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function WebsiteCard() {
  const [isChecked, setIsChecked] = useState(false);
  const [currentPrice, setCurrentPrice] = useState("2999");
  const [currentLabel, setCurrentLabel] = useState("Only");
  const [currentPrefix, setCurrentPrefix] = useState("Design ");
  const cardRef = useRef(null);
  const backgroundRef = useRef(null);
  // const priceRef = useRef(null);
  // const labelRef = useRef(null);
  const bottomImageRef = useRef(null);

  const baseValues = [
    "Website & landing page design + dev",
    "Brand identity & full visual systems",
    "Product & app UI/UX design",
    "Motion graphics & animated assets",
    "Frontend development & code handoff",
    "Pitch decks & investor presentations",
    "Social media kits & marketing collateral",
    "Milestone payments no upfront risk",
  ];

  const values = [...baseValues];

  // useGSAP(() => {
  //   if (isChecked) {
  //     // Animation when switching to "Design + Dev" (2999)
  //     gsap
  //       .timeline()
  //       // Fade out current price, label, and prefix simultaneously
  //       .to([], {
  //         opacity: 0,
  //         duration: 0.1,
  //         ease: "power1.out",
  //       })
  //       // Change price, label, and prefix text
  //       .call(() => {
  //         setCurrentPrice("4999");
  //         setCurrentLabel("Dev");
  //         setCurrentPrefix("Design + ");
  //       })
  //       // Fade in new price, label, and prefix with slight delay
  //       .to([], {
  //         opacity: 1,
  //         duration: 0.2,
  //         ease: "power1.out",
  //         delay: 0.1,
  //       });
  //   } else {
  //     // Animation when switching back to "Design Only" (2999)
  //     gsap
  //       .timeline()
  //       // Fade out current price, label, and prefix simultaneously
  //       .to([], {
  //         opacity: 0,
  //         duration: 0.1,
  //         ease: "power1.out",
  //       })
  //       // Change price, label, and prefix text
  //       .call(() => {
  //         setCurrentPrice("2999");
  //         setCurrentLabel("Only");
  //         setCurrentPrefix("Design ");
  //       })
  //       // Fade in new price, label, and prefix with slight delay
  //       .to([], {
  //         opacity: 1,
  //         duration: 0.2,
  //         ease: "power1.out",
  //         delay: 0.1,
  //       });
  //   }
  // }, [isChecked]);

  return (
    <>
      <div className="relative w-full  mt-6 transition-transform duration-200">
        <Image
          ref={backgroundRef}
          className="absolute object-cover rounded-3xl left-0 right-0 z-[-1] opacity-0"
          src={
            "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705034/design2w_sfwwsd.svg"
          }
          fill
          alt="design2"
          draggable={false}
        />
        <div
          ref={cardRef}
          className={`bg-[#F9F9FB]  mt-3 w-auto h-[500px] sm:h-[530px] md:h-[600px] rounded-3xl shadow-lg relative overflow-visible`}
        >
          <Image
            className="w-full h-full rounded-3xl object-cover"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705258/fullbg_crrpgn.svg"
            }
            alt="full bg"
            fill
            draggable={false}
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex justify-between flex-col p-4 sm:p-6  z-10">
            <div className="">
              <p
                className={`text-black ${geistSans.className} tracking-[-0.04em] text-2xl lg:text-[36px] font-normal`}
              >
                Custom
                <span
                  className={`${instrumentSerif.className} ml-1 text-black italic`}
                >
                  Package
                </span>
              </p>
            </div>
            <div className="">
              <p
                className={`${geistSans.className} text-base leading-[130%] text-[#737394] tracking-[-0.04em]`}
              >
                A defined goal, scoped and executed end-to-end. Design, dev, or
                the full stack — built exactly to brief.
              </p>
            </div>
            <div className="mt-4">
              {/* Details */}
              <div className="space-y-3 sm:space-y-4 relative z-10">
                {values.map((txt, detailIdx) => {
                  return (
                    <div key={txt} className="flex items-start gap-2 sm:gap-3">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705930/markicon1_zuzihk.svg"
                        }
                        width={16}
                        height={16}
                        alt="check mark"
                        className="flex-shrink-0 mt-1 sm:w-[20px] sm:h-[20px]"
                        draggable={false}
                      />
                      <p
                        className={`${geistSans.className} text-[#454545] tracking-[-0.01em] text-sm sm:text-base lg:text-lg font-normal leading-relaxed`}
                      >
                        {txt}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className="mt-6">
              <div className="bg-[#F4F6FE] p-2 rounded-xl border border-[#E9E9FF]">
                <p
                  className={`${geistSans.className} font-normal text-[10px] text-[#737394]`}
                >
                  For teams needing a stunning, high-converting landing page
                  fast.
                </p>
              </div>
            </div> */}
            <Link href={"/30-min"}>
              <div className="mt-3">
                {/* Gradient Border Container */}
                <div className="relative cursor-pointer w-full p-[1.5px] rounded-full bg-[#FAFAFA] transition-transform duration-300 hover:scale-[1.03] group [box-shadow:rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
                  {/* Inner Button Container */}
                  <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3  px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                    {/* Background Image */}
                    {/* <div className="absolute inset-0  rounded-full overflow-hidden z-0">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705123/designblue_scnjef.svg"
                        }
                        alt="button background"
                        fill
                        className="object-cover rounded-full"
                        draggable={false}
                      />
                    </div> */}

                    {/* Button Text */}
                    <span
                      className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-sm sm:text-base font-semibold bg-gradient-to-r from-[#005BD4] to-[#1AC4F5] bg-clip-text text-transparent`}
                    >
                      Book a Call
                    </span>

                    {/* Arrow Bubble with hover nudge */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                      <FaArrowRight
                        color="#0FA9EE"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Image
          ref={bottomImageRef}
          className={`absolute object-cover rounded-3xl -bottom-2 -z-1 w-full h-[100px]`}
          src={
            "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705123/designblue_scnjef.svg"
          }
          width={380}
          height={100}
          alt="design2"
          draggable={false}
        />
      </div>
    </>
  );
}
