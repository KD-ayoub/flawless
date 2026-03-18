"use client";
import React, { useRef, useState } from "react";
import { geistSans, instrumentSerif } from "../fonts";
import ToogleSwitch from "./ToogleSwitch";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function SubscriptionCard() {
  const [isChecked, setIsChecked] = useState(false);
  const [currentPrice, setCurrentPrice] = useState("4999");
  const [currentLabel, setCurrentLabel] = useState("Only");
  const [currentPrefix, setCurrentPrefix] = useState("Design ");
  const cardRef = useRef(null);
  const backgroundRef = useRef(null);
  const labelRef = useRef(null);
  const prefixRef = useRef(null);
  const valuesRef = useRef(null);

  // Static items that never change
  const baseValues = [
    "Dedicated designer & developer",
    "Unlimited design requests, any scope",
    "Unlimited revisions, zero friction",
    "Branding, UI, web, motion & social assets",
    "Active production on one task at a time",
    "Async-first, updates with or without meetings",
    "Average 48–72h turnaround per request",
    "Pause or cancel any month",
  ];


  // Combined array that updates automatically
  const values = [...baseValues];

  useGSAP(() => {
    if (isChecked) {
      // Animate in when checked
      gsap
        .timeline()
        // .set(backgroundRef.current, {
        //   opacity: 1,
        // })
        // Fade out current text (price, prefix, label) and values
        .to(
          [
            prefixRef.current,
            labelRef.current,
            // valuesRef.current,
          ],
          {
            opacity: 0,
            duration: 0.1,
            ease: "power1.out",
          },
        )
        // .to(backgroundRef.current, {
        //   opacity: 1,
        //   duration: 0.6,
        //   ease: "power2.out",
        // })
        // .to(
        //   cardRef.current,
        //   {
        //     duration: 0.4,
        //     ease: "power2.out",
        //   },
        // )

        // Change all text values
        .call(() => {
          setCurrentPrice("6999");
          setCurrentLabel("Dev");
          setCurrentPrefix("Design + ");
          // setValues(values2);
        })
        // Fade in new text and values with slight delay
        .to(
          [
            prefixRef.current,
            labelRef.current,
            // valuesRef.current,
          ],
          {
            opacity: 1,
            duration: 0.2,
            delay: 0.1,
            ease: "power1.out",
          },
        );
    } else {
      // Animate out when unchecked
      gsap
        .timeline()
        // Fade out current text (price, prefix, label) and values
        // .to(
        //   [
        //     prefixRef.current,
        //     labelRef.current,
        //     // valuesRef.current,
        //   ],
        //   {
        //     opacity: 0,
        //     duration: 0.1,
        //     ease: "power1.out",
        //   },
        // )

        // Change all text values
        .call(() => {
          setCurrentPrice("4999");
          setCurrentLabel("Only");
          setCurrentPrefix("Design ");
          // setValues(values1);
        })
        // Fade in new text and values with slight delay
        // .to(
        //   [
        //     prefixRef.current,
        //     labelRef.current,
        //     // valuesRef.current,
        //   ],
        //   {
        //     opacity: 1,
        //     duration: 0.2,
        //     delay: 0.1,
        //     ease: "power1.out",
        //   },
        // );
    }
  }, [isChecked]);

  return (
    <>
      <div ref={cardRef} className="relative w-full mt-6 min-[900px]:mt-0">
        <div className="absolute inset-0 flex justify-center p-2">
          <p
            className={`${geistSans.className} leading-[250%] font-medium text-sm text-[#ECD9FF]`}
          >
            Most Popular
          </p>
          <Image
            ref={backgroundRef}
            className={`absolute w-full max-[370px]:h-[645px] h-[545px] sm:h-[575px] md:h-[645px] object-cover brightness-125 rounded-4xl left-0 right-0 z-[-1]`}
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705017/design1_yyo7a7.svg"
            }
            width={100}
            height={400}
            alt="design1"
            draggable={false}
          />
        </div>
        <div
          className={`bg-[#F9F9FB] w-auto  max-[370px]:h-[600px] h-[500px]  sm:h-[530px] md:h-[600px] mx-2 mb-2 mt-[2.7rem] rounded-3xl shadow-lg relative overflow-visible`}
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
            <div className="flex items-center justify-between">
              <p
                className={`text-black ${geistSans.className} tracking-[-0.04em] text-2xl lg:text-[36px] font-normal`}
              >
                Retainer
                <span
                  className={`${instrumentSerif.className} ml-1 text-black italic`}
                >
                  Unlimited
                </span>
              </p>
              {/* <div className="flex items-center gap-2">
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
                  card={"subscription"}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
              </div> */}
            </div>
            <div className="">
              <p
                className={`${geistSans.className} text-base leading-[130%] text-[#737394] tracking-[-0.04em]`}
              >
                Your dedicated design team, on demand. Ship faster without the
                overhead of hiring in-house.
              </p>
            </div>
            <div className="mt-4">
              {/* Details */}
              <div
                // ref={valuesRef}
                className="space-y-3 sm:space-y-4 relative z-10 will-change-opacity"
              >
                {values.map((txt, detailIdx) => {
                  return (
                    <div key={txt} className="flex items-start gap-2 sm:gap-3">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705932/markicon2_k1tipj.svg"
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
                  Ideal for teams that iterate fast and need design help on
                  demand.
                </p>
              </div>
            </div> */}
            <Link href={"/30-min"}>
              <div className="mt-3">
                {/* Gradient Border Container */}
                <div className="relative cursor-pointer w-full p-[1.5px] rounded-full bg-gradient-to-r from-[#9F66F1] to-[#A06EDD] transition-transform duration-300 hover:scale-[1.03] group shadow-[#9F66F1] shadow-md">
                  {/* Inner Button Container */}
                  <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3 px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 rounded-full overflow-hidden z-0">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705017/design1_yyo7a7.svg"
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
                        color="#9F66F1"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
