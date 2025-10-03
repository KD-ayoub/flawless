"use client";
import React, { useRef, useState } from "react";
import { geistSans, instrumentSerif } from "../layout";
import ToogleSwitch from "./ToogleSwitch";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CldImage } from "next-cloudinary";

export default function SubscriptionCard() {
  const [isChecked, setIsChecked] = useState(false);
  const [currentPrice, setCurrentPrice] = useState("2999");
  const [currentLabel, setCurrentLabel] = useState("Only");
  const [currentPrefix, setCurrentPrefix] = useState("Design ");
  const cardRef = useRef(null);
  const backgroundRef = useRef(null);
  const priceRef = useRef(null);
  const labelRef = useRef(null);
  const prefixRef = useRef(null);
  const valuesRef = useRef(null);

  // Static items that never change
  const baseValues = [
    "Unlimited Requests",
    "Unlimited revisions.",
    "Daily & Weekly updates",
    "1 request is processed at a time",
  ];

  // Dynamic first two items based on isChecked state
  const getFirstTwoItems = () => {
    if (isChecked) {
      return ["Dedicated Designer & Dev.", "Unlimited Design & Dev Access"];
    } else {
      return ["Dedicated designer.", "Unlimited Design Access"];
    }
  };

  // Combined array that updates automatically
  const values = [...getFirstTwoItems(), ...baseValues];

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
            priceRef.current,
            prefixRef.current,
            labelRef.current,
            // valuesRef.current,
          ],
          {
            opacity: 0,
            duration: 0.1,
            ease: "power1.out",
          }
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
          setCurrentPrice("4999");
          setCurrentLabel("Dev");
          setCurrentPrefix("Design + ");
          // setValues(values2);
        })
        // Fade in new text and values with slight delay
        .to(
          [
            priceRef.current,
            prefixRef.current,
            labelRef.current,
            // valuesRef.current,
          ],
          {
            opacity: 1,
            duration: 0.2,
            delay: 0.1,
            ease: "power1.out",
          }
        );
    } else {
      // Animate out when unchecked
      gsap
        .timeline()
        // Fade out current text (price, prefix, label) and values
        .to(
          [
            priceRef.current,
            prefixRef.current,
            labelRef.current,
            // valuesRef.current,
          ],
          {
            opacity: 0,
            duration: 0.1,
            ease: "power1.out",
          }
        )
        // .to(
        //   cardRef.current,
        //   {
        //     scale: 1,
        //     duration: 0.4,
        //     ease: "power2.out",
        //   },
        // )
        // .to(
        //   backgroundRef.current,
        //   {
        //     opacity: 1,
        //     duration: 0.4,
        //     ease: "power2.out",
        //   },
        // )

        // Change all text values
        .call(() => {
          setCurrentPrice("2999");
          setCurrentLabel("Only");
          setCurrentPrefix("Design ");
          // setValues(values1);
        })
        // Fade in new text and values with slight delay
        .to(
          [
            priceRef.current,
            prefixRef.current,
            labelRef.current,
            // valuesRef.current,
          ],
          {
            opacity: 1,
            duration: 0.2,
            delay: 0.1,
            ease: "power1.out",
          }
        );
    }
  }, [isChecked]);

  return (
    <>
      <div
        ref={cardRef}
        className="relative flex items-center justify-center mt-6 min-[900px]:mt-0"
      >
        <div className="absolute inset-0 flex justify-center p-2">
          <p
            className={`${geistSans.className} font-medium text-sm text-[#ECD9FF]`}
          >
            Best Value To Price
          </p>
          <Image
            ref={backgroundRef}
            className={`absolute w-full h-[535px] md:h-[585px] object-cover rounded-4xl left-0 right-0 z-[-1]`}
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705017/design1_yyo7a7.svg"
            }
            width={100}
            height={400}
            alt="design1"
          />
        </div>
        <div
          className={`bg-[#F9F9FB] w-[350px] min-[400px]:w-[380px] h-[500px] md:h-[550px] mx-2 mb-2 mt-8 rounded-3xl shadow-lg relative overflow-visible`}
        >
          <Image
            className="w-full h-full rounded-3xl object-cover"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705258/fullbg_crrpgn.svg"
            }
            alt="full bg"
            fill
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex justify-between flex-col p-6 text-center z-10">
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-black ${geistSans.className} text-2xl font-normal`}
              >
                Subscription
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
                <span
                  ref={priceRef}
                  className={`${instrumentSerif.className} tracking-[-0.04em] text-black leading-[40px] text-[53px] will-change-opacity`}
                >
                  {currentPrice}
                </span>
              </div>
              <p className={`self-start ${geistSans.className} text-[#57576E]`}>
                /Month
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
                    />
                  </div>

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
