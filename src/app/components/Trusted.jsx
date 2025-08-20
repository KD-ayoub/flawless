"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo1 from "@/app/assets/svg/logo1.svg";
import logo2 from "@/app/assets/svg/logo2.svg";
import logo3 from "@/app/assets/svg/logo3.svg";
import logo4 from "@/app/assets/svg/logo4.svg";
import logo5 from "@/app/assets/svg/logo5.svg";
import logo6 from "@/app/assets/svg/logo6.svg";
import logo7 from "@/app/assets/svg/logo7.svg";
import logo8 from "@/app/assets/svg/logo8.svg";
import logo9 from "@/app/assets/svg/logo9.svg";
import logo10 from "@/app/assets/svg/logo10.svg";
import logo11 from "@/app/assets/svg/logo11.svg";
import logo12 from "@/app/assets/svg/logo12.svg";
import { geistSans } from "../layout";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function Trusted() {
  // Desktop layout: 6 logos per row
  const firstRowLogos = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705256/logo1_bhsow2.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705262/logo2_qhgkrn.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705269/logo3_l3yyco.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705267/logo4_expm4a.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705269/logo5_zlpc9u.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705264/logo6_gh1pwe.svg",
  ];
  const secondRowLogos = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705265/logo7_yb5gsi.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705271/logo8_kykagq.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705271/logo9_f0kwkr.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705273/logo10_pkw0wl.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705278/logo11_vfrj6w.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705277/logo12_f9htoa.svg",
  ];

  // Mobile layout: 4 logos per row, 3 rows total
  const mobileFirstRow = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705256/logo1_bhsow2.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705262/logo2_qhgkrn.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705269/logo3_l3yyco.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705267/logo4_expm4a.svg",
  ];
  const mobileSecondRow = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705269/logo5_zlpc9u.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705264/logo6_gh1pwe.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705265/logo7_yb5gsi.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705271/logo8_kykagq.svg",
  ];
  const mobileThirdRow = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705271/logo9_f0kwkr.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705273/logo10_pkw0wl.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705278/logo11_vfrj6w.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705277/logo12_f9htoa.svg",
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
          duration: 0.6,
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
            duration: 0.5,
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
            duration: 0.5,
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
            duration: 0.5,
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
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
                width={96}
                height={48}
              />
            </div>
          ))}
        </div>

        {/* Second row - 6 logos */}
        <div
          ref={secondRowRef}
          className="flex gap-[8%] items-center w-full max-w-3xl mx-auto"
        >
          {secondRowLogos.map((logo, index) => (
            <div
              key={index + 6}
              className="w-20 h-10 md:w-24 md:h-12 opacity-0"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 7}`}
                className="w-full h-full object-contain"
                width={96}
                height={48}
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
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
                width={64}
                height={32}
              />
            </div>
          ))}
        </div>

        {/* Mobile Second row - 4 logos */}
        <div className="flex items-center justify-between w-full">
          {mobileSecondRow.map((logo, index) => (
            <div key={index + 4} className="mobile-logo w-16 h-8 opacity-0">
              <Image
                src={logo}
                alt={`Logo ${index + 5}`}
                className="w-full h-full object-contain"
                width={64}
                height={32}
              />
            </div>
          ))}
        </div>

        {/* Mobile Third row - 4 logos */}
        <div className="flex items-center justify-between w-full">
          {mobileThirdRow.map((logo, index) => (
            <div key={index + 8} className="mobile-logo w-16 h-8 opacity-0">
              <Image
                src={logo}
                alt={`Logo ${index + 9}`}
                className="w-full h-full object-contain"
                width={64}
                height={32}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
