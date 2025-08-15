"use client";
import React, { useRef, useState } from "react";
import { geistSans, instrumentSerif } from "../layout";
import fullbg from "@/app/assets/svg/fullbg.svg";
import design1 from "@/app/assets/svg/design1.svg";
import markicon2 from "@/app/assets/svg/markicon2.svg";
import ToogleSwitch from "./ToogleSwitch";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SubscriptionCard() {
  const [isChecked, setIsChecked] = useState(false);
  const cardRef = useRef(null);
  const backgroundRef = useRef(null);
  const priceWheelRef = useRef(null);
  const valuesRef = useRef(null);
  const values1 = [
    "Dedicated designer.",
    "Unlimited Design Access",
    "Unlimited Requests",
    "Unlimited revisions.",
    "Daily & Weekly updates",
    "1 request is processed at a time",
  ];
  const values2 = [
    "Dedicated Designer & Dev.",
    "Unlimited Design & Dev Access",
    "Unlimited Requests",
    "Unlimited revisions.",
    "Daily & Weekly updates",
    "1 request is processed at a time",
  ];
  const [values, setValues] = useState(values1);

  useGSAP(() => {
    if (isChecked) {
      // Animate in when checked
      gsap
        .timeline()
        .set(backgroundRef.current, {
          opacity: 0,
          scale: 0.9,
        })
        .to(backgroundRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(
          cardRef.current,
          {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          priceWheelRef.current,
          {
            y: "-50%",
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Fade out current values
        .to(
          valuesRef.current,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          "-=0.2"
        )
        // Change values and fade in
        .call(() => setValues(values2))
        .to(valuesRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
    } else {
      // Animate out when unchecked
      gsap
        .timeline()
        .to(priceWheelRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          cardRef.current,
          {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          backgroundRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        ) // Fade out current values
        .to(
          valuesRef.current,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          "-=0.2"
        )
        // Change values and fade in
        .call(() => setValues(values1))
        .to(valuesRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
    }
  }, [isChecked]);

  return (
    <>
      <div
        ref={cardRef}
        className="relative flex items-center justify-center  mt-6 min-[900px]:mt-0"
      >
        <div className="absolute inset-0 flex justify-center p-2">
          <p
            className={`${geistSans.className} font-medium text-sm text-[#ECD9FF]`}
          >
            Best Value To Price
          </p>
          <Image
            className={`absolute object-cover rounded-4xl left-0 right-0 z-[-1]`}
            style={{
              boxShadow:
                isChecked &&
                "rgba(159, 102, 241, 0.5) 0px 8px 24px, rgba(159, 102, 241, 0.5) 0px 16px 56px, rgba(159, 102, 241, 0.5) 0px 24px 80px, rgba(159, 102, 241, 0.5) 0px 32px 120px",
            }}
            src={design1}
            fill
            alt="design1"
          />
        </div>
        <div
          className={`bg-[#F9F9FB] w-[350px] min-[400px]:w-[380px] h-[500px] md:h-[550px] mx-2 mb-2 mt-8 rounded-3xl shadow-lg relative overflow-visible`}
        >
          <Image
            className="w-full h-full rounded-3xl object-cover"
            src={fullbg}
            alt="full bg"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col pt-4 px-6 text-center z-10">
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-black ${geistSans.className} text-2xl font-normal`}
              >
                Subscription
              </h3>
              <div className="flex items-center gap-2">
                <p className={`${geistSans.className} text-base`}>
                  Design {isChecked && "+"}
                  <span
                    className={`${instrumentSerif.className} text-black italic`}
                  >
                    {isChecked ? "Dev" : "Only"}
                  </span>
                </p>
                <ToogleSwitch
                  card={"subscription"}
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
                {/* First digit wheel (1 -> 2) */}
                <div
                  className={`${instrumentSerif.className} tracking-[-0.04em] text-black leading-[40px] text-[53px] relative overflow-hidden h-[40px]`}
                >
                  <div
                    ref={priceWheelRef}
                    className="transition-transform duration-500 ease-out"
                  >
                    {/* First Number (1) */}
                    <div className="h-[41.5px]">2</div>
                    {/* Second Number (2) */}
                    <div className="h-[41.5px]">4</div>
                  </div>
                </div>
                {/* Static digits (999) */}
                <span
                  className={`${instrumentSerif.className} tracking-[-0.04em] text-black leading-[40px] text-[53px]`}
                >
                  999
                </span>
              </div>
                <p
                  className={`self-start ${geistSans.className}  text-[#57576E]`}
                >
                  /Month
                </p>
            </div>
            <div className="mt-4">
              {/* Details */}
              <div
                ref={valuesRef}
                className="space-y-3 sm:space-y-4 relative z-10"
              >
                {values.map((txt, detailIdx) => {
                  return (
                    <div key={txt} className="flex items-start gap-2 sm:gap-3">
                      <Image
                        src={markicon2}
                        width={16}
                        height={16}
                        alt="check mark"
                        className="flex-shrink-0 mt-1 sm:w-[20px] sm:h-[20px]"
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
            <div className="mt-6">
              <div className="bg-[#F4F6FE] p-2 rounded-xl border border-[#E9E9FF]">
                <p
                  className={`${geistSans.className} font-normal text-[10px] text-[#737394]`}
                >
                  Ideal for teams that iterate fast and need design help on
                  demand.
                </p>
              </div>
            </div>
            <div className="mt-3">
              {/* Gradient Border Container */}
              <div className="relative cursor-pointer w-full p-[1.5px] rounded-full bg-gradient-to-r from-[#9F66F1] to-[#A06EDD] transition-transform duration-300 hover:scale-[1.03] group shadow-[#9F66F1] shadow-md">
                {/* Inner Button Container */}
                <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3  px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0  rounded-full overflow-hidden z-0">
                    <Image
                      src={design1}
                      alt="button background"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  {/* Moving blur on hover
                     <div className="absolute z-[1] cursor-pointer -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" /> */}

                  {/* Button Text */}
                  <button
                    className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-white text-sm sm:text-base font-semibold`}
                  >
                    Book a Call
                  </button>

                  {/* Arrow Bubble with hover nudge */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                    <FaArrowRight
                      color="#9F66F1"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
