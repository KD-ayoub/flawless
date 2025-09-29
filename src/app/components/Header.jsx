"use client";

import React, { useRef, useState } from "react";
import { geistSans, instrumentSerif } from "../layout";
import { FaArrowRight } from "react-icons/fa6";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
// import { animatePageIn, animatePageOut } from "@/animations";
import { usePathname, useRouter } from "next/navigation";
import { ScrollToPlugin } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP);

const handleScrollCase = () => {
  window.lenis.scrollTo("#case-studies", {
    offset: 0, // optional offset
    duration: 2.5,
    easing: (t) => 1 - Math.pow(1 - t, 3), // custom ease
  });
};

const handleScrollService = () => {
  window.lenis.scrollTo("#services", {
    offset: -80, // optional offset
    duration: 2.5,
    easing: (t) => 1 - Math.pow(1 - t, 3), // custom ease
  });
};

export default function Header() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <>
      <div className="sticky hidden min-[1000px]:block top-0 z-20 py-5 px-[60px] h-20">
        <div className="relative h-20">
          {/* Blurred background layer */}
          <div
            className={`absolute inset-0 rounded-full ${
              pathName === "/arch"
                ? "bg-[#171717]/60 border border-[#0C0C0C]"
                : "bg-[#FAFAFB]/40 border border-white"
            }  backdrop-blur-[10px] z-0`}
          />
          {/* Content layer */}
          <div
            className={`relative z-10 flex items-center p-5 h-full text-white`}
          >
            <div className="flex items-center justify-between w-full">
              <Link href={"/"}>
                <p
                  className={`${instrumentSerif.className} ${
                    pathName === "/arch" ? "text-white" : "text-black"
                  } text-2xl font-normal`}
                >
                  flawless <span className="italic">Design</span>
                </p>
              </Link>
              <div className="flex gap-8">
                <p
                  onClick={handleScrollService}
                  className={`${
                    geistSans.className
                  } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                    pathName === "/arch"
                      ? "bg-gradient-to-r from-white to-white"
                      : "bg-gradient-to-r from-black to-black"
                  } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                >
                  Services
                </p>

                <p
                  onClick={handleScrollCase}
                  className={`${
                    geistSans.className
                  } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                    pathName === "/arch"
                      ? "bg-gradient-to-r from-white to-white"
                      : "bg-gradient-to-r from-black to-black"
                  } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                >
                  Case Studies
                </p>
                <Link href="/work">
                  <p
                    // onClick={() => {
                    //   if (pathName !== "/work") {
                    //     animatePageOut("/work", router);
                    //   }
                    // }}
                    className={`${
                      geistSans.className
                    } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                      pathName === "/arch"
                        ? "bg-gradient-to-r from-white to-white"
                        : "bg-gradient-to-r from-black to-black"
                    } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                  >
                    Work
                  </p>
                </Link>
              </div>
              <div className="relative cursor-pointer w-fit flex items-center gap-2 sm:gap-3 border border-[#0070F3] px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-[#0070F3] overflow-hidden transition-transform duration-300 hover:scale-[1.03] group">
                {/* Moving blur on hover */}
                <div className="absolute z-0 cursor-pointer -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" />

                {/* Button Text */}
                <button
                  className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-white text-sm sm:text-base font-semibold`}
                >
                  Let's work together
                </button>

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
        </div>
      </div>
      <MobileHeader pathName={pathName} />
    </>
  );
}

function MobileHeader({ pathName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useGSAP(
    () => {
      if (menuOpen && dropdownRef.current) {
        gsap.fromTo(
          dropdownRef.current,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "all",
          }
        );
      }
    },
    { dependencies: [menuOpen], scope: dropdownRef }
  );
  return (
    <>
      <div className="sticky block min-[1000px]:hidden top-0 z-20 w-full max-w-[1640px] py-5 px-3 min-[900px]:px-20 h-14">
        <div className="relative h-14">
          {/* Blurred background layer */}
          <div
            className={`absolute inset-0 rounded-full ${
              pathName === "/arch"
                ? "bg-[#171717]/60 border border-[#0C0C0C]"
                : "bg-[#FAFAFB]/40 border border-white"
            }  backdrop-blur-md z-0`}
          />
          {/* Content layer */}
          <div className="relative z-10 flex items-center px-2 h-full text-black">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Link href={"/"}>
                  <p
                    className={`${instrumentSerif.className} ${
                      pathName === "/arch" ? "text-white" : "text-black"
                    } text-xl font-normal`}
                  >
                    flawless <span className="italic">Design</span>
                  </p>
                </Link>
              </div>
              <button
                className="cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <IoClose className="text-[#818181] text-4xl" />
                ) : (
                  <IoReorderThree className="text-[#818181] text-4xl" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <>
              <div className="sticky block min-[1000px]:hidden top-16 z-10 w-full max-w-[1640px] py-3 px-3 h-14">
                <div className="relative p-2">
                  {/* Blurred background layer */}
                  <div
                    className={`absolute inset-0 rounded-2xl ${
                      pathName === "/arch"
                        ? "bg-[#171717]/60 border border-[#0C0C0C]"
                        : "bg-[#FAFAFB]/40 border border-white"
                    } backdrop-blur-md z-0`}
                  />
                  <div
                    ref={dropdownRef}
                    className="relative z-10 flex flex-col gap-3 justify-center items-center p-2 h-full text-black"
                  >
                    <p
                      className={`${
                        geistSans.className
                      } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                        pathName === "/arch"
                          ? "bg-gradient-to-r from-white to-white"
                          : "bg-gradient-to-r from-black to-black"
                      } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                      onClick={() => {
                        setMenuOpen(false);
                        handleScrollService();
                      }}
                    >
                      Services
                    </p>
                    <div
                      className={`h-px w-10 ${
                        pathName === "/arch" ? "bg-[#F1F1F1]" : "bg-[#818181]"
                      }`}
                    />
                    <p
                      className={`${
                        geistSans.className
                      } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                        pathName === "/arch"
                          ? "bg-gradient-to-r from-white to-white"
                          : "bg-gradient-to-r from-black to-black"
                      } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                      onClick={() => {
                        setMenuOpen(false);
                        handleScrollCase();
                      }}
                    >
                      Case Studies
                    </p>
                    <div
                      className={`h-px w-10 ${
                        pathName === "/arch" ? "bg-[#F1F1F1]" : "bg-[#818181]"
                      }`}
                    />
                    <Link onClick={() => setMenuOpen(false)} href={"/work"}>
                      <p
                        // onClick={() => {
                        //   if (pathName !== "/work") {
                        //     animatePageOut("/work", router);
                        //   }
                        // }}
                        className={`${
                          geistSans.className
                        } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                          pathName === "/arch"
                            ? "bg-gradient-to-r from-white to-white"
                            : "bg-gradient-to-r from-black to-black"
                        } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                      >
                        Work
                      </p>
                    </Link>
                    <div className="relative cursor-pointer w-fit flex items-center gap-2 sm:gap-3 border border-[#0070F3] px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-[#0070F3] overflow-hidden transition-transform duration-300 hover:scale-[1.03] group">
                      {/* Moving blur on hover */}
                      <div className="absolute z-0 cursor-pointer -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" />

                      {/* Button Text */}
                      <button
                        className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-white text-sm sm:text-xl font-semibold`}
                      >
                        Let's work together
                      </button>

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
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
