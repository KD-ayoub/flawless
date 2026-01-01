"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { geistSans, instrumentSerif } from "../fonts";

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
          [paragraphRef.current],
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
          buttonRef.current,
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
          "-=0.2"
        );
      // // Add hover animations
      // if (buttonRef.current) {
      //   buttonRef.current.addEventListener("mouseenter", () => {
      //     gsap.to(buttonRef.current, {
      //       scale: 1.03,
      //       duration: 0.3,
      //       ease: "power2.out",
      //     });
      //   });

      //   buttonRef.current.addEventListener("mouseleave", () => {
      //     gsap.to(buttonRef.current, {
      //       scale: 1,
      //       duration: 0.3,
      //       ease: "power2.out",
      //     });
      //   });
      // }
      // if (buttonRef2.current) {
      //   buttonRef2.current.addEventListener("mouseenter", () => {
      //     gsap.to(buttonRef2.current, {
      //       scale: 1.03,
      //       duration: 0.3,
      //       ease: "power2.out",
      //     });
      //   });

      //   buttonRef2.current.addEventListener("mouseleave", () => {
      //     gsap.to(buttonRef2.current, {
      //       scale: 1,
      //       duration: 0.3,
      //       ease: "power2.out",
      //     });
      //   });
      // }
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
            {/* One spot left for December */}
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
          className="flex flex-col opacity-0 md:flex-row items-center gap-3"
        >
          <Link
            href={
              "https://www.figma.com/proto/QFyTEpqAUvIMxdN8uZxsjl/Portfolio?page-id=0%3A1&node-id=2-2369&p=f&viewport=960%2C583%2C0.02&t=5ApNob8LXDTkvan1-1&scaling=min-zoom&content-scaling=fixed"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white cursor-pointer border border-[#E6E6E6] hover:scale-[1.03] transition-transform duration-300 drop-shadow-[0px_2px_13px_rgba(0,0,0,0.3)] relative flex gap-2 px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full">
              {/* Arrow Bubble with hover nudge */}
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                <FigmaLogo />
              </div>
              <button
                className={`${geistSans.className} cursor-pointer font-semibold tracking-[-0.02em] text-sm sm:text-base text-black`}
              >
                View Our Work
              </button>
            </div>
          </Link>
          <Link href={"/30-min"}>
            <div className="relative  cursor-pointer w-fit flex items-center gap-2 sm:gap-3 border border-[#0070F3] px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-[#0070F3] overflow-hidden  hover:scale-[1.03] group shadow-lg shadow-[#4075F0]/25 transition-transform duration-300">
              {/* Moving blur on hover */}
              <div className="absolute z-0 cursor-pointer -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" />

              {/* Button Text */}
              <span
                className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-white text-sm sm:text-base font-semibold`}
              >
                Book a Free Strategy Call
              </span>

              {/* Arrow Bubble with hover nudge */}
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                <FaArrowRight
                  color="#0070F3"
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FigmaLogo() {
  return (
    <svg
      width="12"
      height="17"
      viewBox="0 0 12 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 13.9651C0 12.4226 1.25049 11.1721 2.79302 11.1721H5.58604V13.9651C5.58604 15.5076 4.33555 16.7581 2.79302 16.7581C1.25049 16.7581 0 15.5076 0 13.9651Z"
        fill="#24CB71"
      />
      <path
        d="M5.58604 0V5.58604H8.37906C9.92159 5.58604 11.1721 4.33555 11.1721 2.79302C11.1721 1.25049 9.92159 0 8.37906 0H5.58604Z"
        fill="#FF7237"
      />
      <path
        d="M8.35579 11.1721C9.89834 11.1721 11.1488 9.9216 11.1488 8.37906C11.1488 6.83652 9.89834 5.58604 8.35579 5.58604C6.81325 5.58604 5.56277 6.83652 5.56277 8.37906C5.56277 9.9216 6.81325 11.1721 8.35579 11.1721Z"
        fill="#00B6FF"
      />
      <path
        d="M0 2.79302C0 4.33555 1.25049 5.58604 2.79302 5.58604H5.58604V0H2.79302C1.25049 0 0 1.25049 0 2.79302Z"
        fill="#FF3737"
      />
      <path
        d="M0 8.37906C0 9.92159 1.25049 11.1721 2.79302 11.1721H5.58604V5.58604H2.79302C1.25049 5.58604 0 6.83653 0 8.37906Z"
        fill="#874FFF"
      />
    </svg>
  );
}
