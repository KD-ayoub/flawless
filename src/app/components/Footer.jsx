"use client";

import React, { useEffect, useRef } from "react";
import { geistSans, instrumentSerif } from "../layout";
import Link from "next/link";
import CircularGallery from "./Circular";
import BelowFooter from "./BelowFooter";
import useDetectScroll from "@smakss/react-scroll-direction";
import { useElementScrollProgress } from "../hooks/useElementScrollProgress";
import { usePathname } from "next/navigation";
import GlassEffect from "./GlassEffect";
import { CldImage } from "next-cloudinary";

export default function Footer() {
  const pathName = usePathname();
  return (
    <>
      {/* Fixed footer image at bottom - only half visible */}
      <div className="relative">
        {/* <div className="absolute mx-auto w-full max-w-7xl left-1/2 -translate-x-1/2 px-4">
          <div
            className={` relative overflow-hidden rounded-[20px] p-4 lg:p-8 ${
              pathName === "/arch"
                ? "bg-[#171717]/60 border border-[#0C0C0C]"
                : pathName === "/trustybite"
                ? "bg-white/6 border border-white/14 [box-shadow:0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_2px_1px_rgba(255,255,255,0.1)]"
                : "bg-[#FAFAFB]/20 border border-white"
            }`}
          >
            <div className="grid grid-cols-3">
              <div className="">
                <div className="w-32 h-10 flex items-center">
                  <CldImage
                    src={`${
                      pathName === "/arch"
                        ? "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761925285/logo-white_kksiem.png"
                        : pathName === "/trustybite"
                        ? `${observerColor.logo}`
                        : "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761841388/logo_xre9tr.png"
                    }`}
                    width={1200}
                    height={1200}
                    alt="logo image"
                    format="auto"
                    quality="auto"
                  />
                </div>
                <div>
                  <p
                    className={`${geistSans.className} mt-2 whitespace-nowrap font-normal text-[20px] tracking-[-0.04em] text-[#505050]`}
                  >
                    Flawless design. Relentless execution
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 col-span-2">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <p
                      className={`${geistSans.className} mt-2 font-normal text-[20px] tracking-[-0.04em] text-black`}
                    >
                      X ( Twitter)
                    </p>
                    <p
                      className={`${geistSans.className} mt-2 font-normal text-[20px] tracking-[-0.04em] text-black`}
                    >
                      Instagram
                    </p>
                    <p
                      className={`${geistSans.className} mt-2 font-normal text-[20px] tracking-[-0.04em] text-black`}
                    >
                      Linkedin
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <p
                      className={`${geistSans.className} mt-2 font-normal text-[20px] tracking-[-0.04em] text-black`}
                    >
                      Latest Projects
                    </p>
                    <p
                      className={`${geistSans.className} mt-2 font-normal text-[20px] tracking-[-0.04em] text-black`}
                    >
                      Contra
                    </p>
                    <p
                      className={`${geistSans.className} mt-2 font-normal text-[20px] tracking-[-0.04em] text-black`}
                    >
                      Dribbble
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-center">
                  <div>
                    <p
                      className={`${geistSans.className} mt-2 font-normal text-[20px] tracking-[-0.04em] text-black`}
                    >
                      Book a call
                    </p>
                    <p
                      className={`${geistSans.className} mt-2 font-normal text-[20px] tracking-[-0.04em] text-black`}
                    >
                      Contact Us
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-32">
              <div>
                <p
                  className={`${geistSans.className} mt-2 font-normal text-[18px] tracking-[-0.04em] text-black/70`}
                >
                  © 2025 Flawless Design. All rights reserved.
                </p>
              </div>
              <div className="">
                <ul className="list-disc flex items-center gap-8">
                  <li
                    className={`${geistSans.className} mt-2 font-normal text-[18px] tracking-[-0.04em] text-black/70`}
                  >
                    Privacy Policy
                  </li>
                  <li
                    className={`${geistSans.className} mt-2 font-normal text-[18px] tracking-[-0.04em] text-black/70`}
                  >
                    Terms of Service
                  </li>
                </ul>
              </div>
            </div>
            <div className=" absolute w-[350px] h-[380px] -right-32 -bottom-[180px]">
              <CldImage
                className=" w-full h-full object-fill rotate-12"
                width={1200}
                height={1220}
                src={
                  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761129229/Rectangle_gfavsa.png"
                }
                alt="shape2"
                quality="auto"
                format="auto"
                draggable={false}
              />
            </div>
          </div>
        </div> */}
        <footer className=" w-full z-0 ">
          <div className="w-full">
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761943405/footer-logo_ky4myy.png"
              }
              className=" w-full h-full object-cover object-top "
              width={1000}
              height={1000}
              alt="footer image"
              format="auto"
              quality="auto"
              priority
            />
          </div>
        </footer>
      </div>
    </>
  );
}

export function OldFooter() {
  const footerRef = useRef(null);
  // const res = useDetectScroll();
  // const maxScale = 10; // Maximum scale value
  // const scaleValue = Math.min(res.scrollPosition.top / 1200, 10000);
  const progress = useElementScrollProgress(footerRef);
  const pathName = usePathname();
  const belowRainbowRef = useRef(null);

  useEffect(() => {
    const belowRainbowElement = belowRainbowRef.current;

    if (!belowRainbowElement) return;
    // window?.lenis?.on?.("scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Scroll to FAQ section when below-rainbow div is reached
            const faqSection = document.getElementById("faq");

            if (faqSection) {
              console.log("start scrolling");
              // window.lenis.scrollTo("#faq", {
              //   offset: -670, // Scroll to 50px above the section
              //   // duration: 1.5, // Faster scroll
              //   // easing: (t) => t * t * (3 - 2 * t), // Smoother easing
              // });
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: "0px",
      }
    );

    observer.observe(belowRainbowElement);

    return () => {
      observer.unobserve(belowRainbowElement);
    };
  }, []);

  return (
    <>
      {/* <div className="relative h-[400px]"> */}
      {/* <div style={{ height: "100%", position: "relative" }}>
          <CircularGallery
            bend={0.6}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div> */}
      <footer id="faq" className="relative z-10">
        {/* <div> */}
        <div className="mx-auto w-full max-w-7xl px-4 py-1.5 md:py-8">
          <div className="hidden md:flex flex-row  justify-between items-center gap-4">
            <div className={`flex items-center gap-4 `}>
              <div
                className="flex items-center gap-2 "
                // style={{
                //   transform: `translateY(${progress * 68}vh)`,
                //   willChange: "transform",
                // }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-[#9876EC] to-[#6B46C1] rounded-md flex items-center justify-center">
                  <span
                    className={`${geistSans.className} text-white font-bold text-xs`}
                  >
                    F
                  </span>
                </div>
                <span
                  className={`${geistSans.className} font-semibold ${
                    pathName === "/arch" ? "text-white" : "text-black"
                  }`}
                >
                  Flawless
                </span>
              </div>
              <span
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } text-sm`}
                // style={{
                //   transform: `translateY(${progress * 45}vh)`,
                //   willChange: "transform",
                // }}
              >
                © 2025 All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
                // style={{
                //   transform: `translateY(${progress * 45}vh)`,
                //   willChange: "transform",
                // }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
                // style={{
                //   transform: `translateY(${progress * 68}vh)`,
                //   willChange: "transform",
                // }}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div
            className="flex md:hidden flex-col justify-between items-center gap-4"
            // style={{
            //   transform: `translateY(${progress * 38}vh)`,
            //   willChange: "transform",
            // }}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-[#9876EC] to-[#6B46C1] rounded-md flex items-center justify-center">
                  <span
                    className={`${geistSans.className} text-white font-bold text-xs`}
                  >
                    F
                  </span>
                </div>
                <span
                  className={`${geistSans.className} font-semibold ${
                    pathName === "/arch" ? "text-white" : "text-black"
                  }`}
                >
                  Flawless
                </span>
              </div>
              <span
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } text-sm`}
              >
                © 2025 All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className={`${geistSans.className} ${
                  pathName === "/arch" ? "text-white" : "text-[#0E0E0F]/50"
                } hover:text-[#9876EC] transition-colors text-sm`}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* <BelowFooter scaleValue={progress} /> */}
        {/* </div> */}
      </footer>
      {/* spacer to create scrollable distance for the scale animation */}
      <section ref={footerRef} className="relative  mx-auto max-w-[1840px]">
        {/* <div
          className="mx-3 relative"
          style={{
            height: `${progress * 150}%`,
          }}
        >
          <GlassEffect height="h-full" border="rounded-2xl" />
        </div> */}
        <div className=" pointer-events-none relative overflow-hidden">
          {/* <BelowFooter scaleValue={progress} /> */}
          <div
            // style={{
            //   transform: `perspective(100px) rotateX(${
            //     (180 - progress * 675) / 4
            //   }deg)`,
            //   lineHeight: "0.7",
            // }}
            className={`text-[21vw] min-[1840px]:text-[400px] ${
              geistSans.className
            }  ${
              pathName === "/arch" ? "text-white/20" : "text-[#0E0E0F]/20"
            } text-center  w-full h-[90px] md:h-[200px]   font-black  perspective-origin-bottom flex items-center justify-end md:justify-center flex-col`}
          >
            <CldImage
              src="https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761843155/footer_cukzhs.png"
              className="absolute -bottom-[45%] opacity-40"
              width={1000}
              height={1000}
              alt="footer image"
              format="auto"
              quality="auto"
            />
          </div>
        </div>
        {/* <div
          id="below-rainbow"
          ref={belowRainbowRef}
          className="absolute bottom-0 w-full h-3 bg-red-600"
        /> */}
      </section>
      {/* </div> */}
    </>
  );
}
