"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { geistSans } from "../layout";
import { CldImage } from "next-cloudinary";

gsap.registerPlugin(ScrollTrigger);

export default function Trusted() {
  // Desktop layout: 6 logos per row
  const firstRowLogos = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252551/logo1_w1ruxk.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252611/logo2_laaa1g.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252672/logo3_inxvay.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252720/logo4_hgzecc.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252772/logo5_mcjlb2.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252816/logo6_iljsuh.png",
  ];
  const secondRowLogos = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252897/logo7_mhiujo.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252936/logo8_vl5olv.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252993/logo9_qb5lyq.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253036/logo10_ismv5d.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253077/logo11_ggnlkd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253156/logo12_mapmhe.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253212/logo13_tz8me6.png",
  ];

  // Mobile layout: 4 logos per row, 3 rows total
  const mobileFirstRow = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252551/logo1_w1ruxk.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252611/logo2_laaa1g.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252672/logo3_inxvay.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252720/logo4_hgzecc.png",
  ];
  const mobileSecondRow = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252772/logo5_mcjlb2.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252816/logo6_iljsuh.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252897/logo7_mhiujo.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252936/logo8_vl5olv.png",
  ];
  const mobileThirdRow = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252993/logo9_qb5lyq.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253036/logo10_ismv5d.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253077/logo11_ggnlkd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253156/logo12_mapmhe.png",
  ];

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const mobileRowsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate title first
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      )
        // Desktop: animate first row logos
        .fromTo(
          firstRowRef.current?.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.2"
        )
        // Desktop: animate second row logos
        .fromTo(
          secondRowRef.current?.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.3"
        )
        // Mobile: animate all mobile rows
        .fromTo(
          mobileRowsRef.current?.querySelectorAll(".mobile-logo"),
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div className="flex justify-center items-center">
        <p
          ref={titleRef}
          className={`${geistSans.className} font-normal mb-6 text-sm md:text-base text-[#818181] opacity-0`}
        >
          Trusted by industry leaders
        </p>
      </div>

      {/* Desktop Layout: Hidden on mobile */}
      <div className="hidden sm:flex flex-col items-center gap-3 mx-4">
        {/* First row - 6 logos */}
        <div
          ref={firstRowRef}
          className="flex gap-[8%] items-center w-full max-w-4xl"
        >
          {firstRowLogos.map((logo, index) => (
            <div key={index} className="w-20 h-10 md:w-24 md:h-12 opacity-0">
              <CldImage
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
                width={1000}
                height={1000}
                quality="auto"
                format="auto"
              />
            </div>
          ))}
        </div>

        {/* Second row - 6 logos */}
        <div
          ref={secondRowRef}
          className="flex gap-[8%] items-center w-full max-w-[66rem] mx-auto"
        >
          {secondRowLogos.map((logo, index) => (
            <div
              key={index + 6}
              className="w-20 h-10 md:w-32 md:h-16 opacity-0"
            >
              <CldImage
                src={logo}
                alt={`Logo ${index + 7}`}
                className="w-full h-full object-contain"
                width={1000}
                height={1000}
                quality="auto"
                format="auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout: 4 logos per row, 3 rows */}
      <div
        ref={mobileRowsRef}
        className="flex sm:hidden flex-col items-center gap-4 mx-4"
      >
        {/* Mobile First row - 4 logos */}
        <div className="flex items-center justify-between w-full">
          {mobileFirstRow.map((logo, index) => (
            <div key={index} className="mobile-logo w-16 h-8 opacity-0">
              <CldImage
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
                width={1000}
                height={1000}
                quality="auto"
                format="auto"
              />
            </div>
          ))}
        </div>

        {/* Mobile Second row - 4 logos */}
        <div className="flex items-center justify-between w-full">
          {mobileSecondRow.map((logo, index) => (
            <div key={index + 4} className="mobile-logo w-16 h-8 opacity-0">
              <CldImage
                src={logo}
                alt={`Logo ${index + 5}`}
                className="w-full h-full object-contain"
                width={1000}
                height={1000}
                quality="auto"
                format="auto"
              />
            </div>
          ))}
        </div>

        {/* Mobile Third row - 4 logos */}
        <div className="flex items-center justify-between w-full">
          {mobileThirdRow.map((logo, index) => (
            <div key={index + 8} className="mobile-logo w-16 h-8 opacity-0">
              <CldImage
                src={logo}
                alt={`Logo ${index + 9}`}
                className="w-full h-full object-contain"
                width={1000}
                height={1000}
                quality="auto"
                format="auto"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="mobile-logo w-16 h-8 opacity-0">
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253212/logo13_tz8me6.png"
              }
              alt={`Logo 13`}
              className="w-full h-full object-contain"
              width={1000}
              height={1000}
              quality="auto"
              format="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
