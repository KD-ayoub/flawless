"use client";
import React, { useRef } from "react";
import { geistSans, instrumentSerif } from "../layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const heading3Ref = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const month = new Date().toLocaleString("default", { month: "long" });
  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Animate elements in sequence using fromTo
      tl.fromTo(
        badgeRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      )
        .fromTo(
          heading1Ref.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          heading2Ref.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          heading3Ref.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          [paragraphRef.current, buttonRef.current],
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
      // Add hover animations
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className="mt-[35px] md:mt-[50px] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-10"
    >
      <div className="text-center flex flex-col items-center justify-center max-w-6xl mx-auto">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 bg-[#E8F8EF] border border-[#C7E5D4] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 opacity-0"
        >
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#306C3A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#306C3A]"></span>
          </span>
          <p
            className={`${geistSans.className} text-xs sm:text-sm text-[#306C3A] font-medium`}
          >
            Accepting new projects for {month}
          </p>
        </div>

        <div className="leading-[85%] sm:leading-[88%] lg:leading-[92%] my-2 sm:my-4">
          <h1
            ref={heading1Ref}
            className={`${geistSans.className} opacity-0 font-normal tracking-[-0.04em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black`}
          >
            Elevate faster.
          </h1>
          <h1
            ref={heading2Ref}
            className={`${geistSans.className} opacity-0 font-normal tracking-[-0.04em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black`}
          >
            Scale higher.
          </h1>
          <h1
            ref={heading3Ref}
            className={`${geistSans.className} opacity-0 font-normal tracking-[-0.04em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black`}
          >
            Execute{" "}
            <span
              className={`${instrumentSerif.className} inline-flex font-normal tracking-[-0.01em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic text-black`}
            >
              flawlessly
            </span>
          </h1>
        </div>

        <p
          ref={paragraphRef}
          className={`${geistSans.className} opacity-0 text-base mb-2 md:mb-4 sm:text-lg md:text-xl text-[#585858] max-w-2xl mx-auto leading-relaxed `}
        >
          Ultra-precise design & code for Web3, AI, and mission-critical
          products that can't afford imperfections.
        </p>
        <div
          ref={buttonRef}
          className="relative opacity-0 cursor-pointer w-fit flex items-center gap-2 sm:gap-3 border border-[#0070F3] px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-[#0070F3] overflow-hidden  hover:scale-[1.03] group shadow-lg shadow-[#4075F0]/25"
        >
          {/* Moving blur on hover */}
          <div className="absolute z-0 cursor-pointer -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" />

          {/* Button Text */}
          <button
            className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-white text-sm sm:text-base font-semibold`}
          >
            Book a Free Strategy Call
          </button>

          {/* Arrow Bubble with hover nudge */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
            <FaArrowRight color="#0070F3" className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
