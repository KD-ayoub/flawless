"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { geistSans, instrumentSerif } from "../layout";
import { FaArrowRight } from "react-icons/fa6";
import ToogleSwitch from "./ToogleSwitch";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function WebsiteCard() {
  const [isChecked, setIsChecked] = useState(false);
  const [currentPrice, setCurrentPrice] = useState("1999");
  const [currentLabel, setCurrentLabel] = useState("Only");
  const [currentPrefix, setCurrentPrefix] = useState("Design ");
  const cardRef = useRef(null);
  const backgroundRef = useRef(null);
  const priceRef = useRef(null);
  const labelRef = useRef(null);
  const prefixRef = useRef(null);
  const bottomImageRef = useRef(null);

  const baseValues = [
    "Fast, reliable turnaround",
    "Built for clarity & conversion",
    "Unlimited revisions",
    "Clear, async communication",
    "Milestone check-ins if needed",
  ];

  // Dynamic first two items based on isChecked state
  const getFirstItem = () => {
    if (isChecked) {
      return ["Custom design & dev"];
    } else {
      return ["Custom figma design"];
    }
  };

  const values = [...getFirstItem(), ...baseValues];

  useGSAP(() => {
    if (isChecked) {
      // Animation when switching to "Design + Dev" (2999)
      gsap
        .timeline()
        // Fade out current price, label, and prefix simultaneously
        .to([priceRef.current, labelRef.current, prefixRef.current], {
          opacity: 0,
          duration: 0.1,
          ease: "power1.out",
        })
        // Change price, label, and prefix text
        .call(() => {
          setCurrentPrice("2999");
          setCurrentLabel("Dev");
          setCurrentPrefix("Design + ");
        })
        // Fade in new price, label, and prefix with slight delay
        .to([priceRef.current, labelRef.current, prefixRef.current], {
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
          delay: 0.1,
        });
    } else {
      // Animation when switching back to "Design Only" (1999)
      gsap
        .timeline()
        // Fade out current price, label, and prefix simultaneously
        .to([priceRef.current, labelRef.current, prefixRef.current], {
          opacity: 0,
          duration: 0.1,
          ease: "power1.out",
        })
        // Change price, label, and prefix text
        .call(() => {
          setCurrentPrice("1999");
          setCurrentLabel("Only");
          setCurrentPrefix("Design ");
        })
        // Fade in new price, label, and prefix with slight delay
        .to([priceRef.current, labelRef.current, prefixRef.current], {
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
          delay: 0.1,
        });
    }
  }, [isChecked]);

  return (
    <>
      <div className="relative flex items-center justify-center mt-6 transition-transform duration-200">
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
          className={`bg-[#F9F9FB] w-[350px] mt-3 min-[400px]:w-[380px] h-[500px] md:h-[550px] rounded-3xl shadow-lg relative overflow-visible`}
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
          <div className="absolute inset-0 flex justify-between flex-col p-6 text-center z-10">
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-black ${geistSans.className} tracking-[-0.04em] text-2xl font-normal`}
              >
                Website
              </h3>
              <div className="flex items-center gap-2">
                <p
                  className={`${geistSans.className} text-base will-change-opacity`}
                >
                  <span ref={prefixRef} className="will-change-opacity">
                    {currentPrefix}
                  </span>
                  <span
                    ref={labelRef}
                    className={`${instrumentSerif.className} text-black italic will-change-opacity`}
                  >
                    {currentLabel}
                  </span>
                </p>
                <ToogleSwitch
                  card={"website"}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <p
                className={`${geistSans.className} text-base text-[#57576E] tracking-[-0.04em]`}
              >
                Starting at <span className="text-black">$</span>
              </p>
              <div className="flex items-center">
                <span
                  ref={priceRef}
                  className={`${instrumentSerif.className} tracking-[-0.04em] text-black leading-[40px] text-[53px] will-change-opacity`}
                >
                  {currentPrice}
                </span>
              </div>
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
                <div className="relative cursor-pointer w-full p-[1.5px] rounded-full bg-gradient-to-r from-[#0FA9EE] to-[#4075F0] transition-transform duration-300 hover:scale-[1.03] group shadow-blue-400 shadow-md">
                  {/* Inner Button Container */}
                  <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3  px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0  rounded-full overflow-hidden z-0">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705123/designblue_scnjef.svg"
                        }
                        alt="button background"
                        fill
                        className="object-cover rounded-full"
                        draggable={false}
                      />
                    </div>

                    {/* Button Text */}
                    <span
                      className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-white text-sm sm:text-base font-semibold`}
                    >
                      Book a Call
                    </span>

                    {/* Arrow Bubble with hover nudge */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                      <FaArrowRight
                        color="#0070F3"
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
          className={`absolute object-cover rounded-3xl -bottom-2 -z-1`}
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
