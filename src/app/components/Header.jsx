"use client";

import React, { useEffect, useRef, useState } from "react";
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
import useOutsideClick from "../hooks/useOutsideClick";
import GlassEffect from "./GlassEffect";
import { CldImage } from "next-cloudinary";

gsap.registerPlugin(useGSAP);

const handleScrollService = (e, pathName, router) => {
  e.preventDefault();

  // const onHome = pathName === "/";
  let hash = "#services";
  setTimeout(() => {
    console.log("pushed");
    router.push(`/${hash}`);
    setTimeout(() => {
      console.log("pushed");
      router.push(`/${hash}`);
      setTimeout(() => {
        console.log("pushed");
        router.push(`/${hash}`);
      }, 500);
    }, 490);
  }, 10);
};

const handleScrollCase = (e, pathName, router) => {
  e.preventDefault();

  // const onHome = pathName === "/";
  let hash = "#case-studies";
  setTimeout(() => {
    console.log("pushed");
    router.push(`/${hash}`);
    setTimeout(() => {
      console.log("pushed");
      router.push(`/${hash}`);
      setTimeout(() => {
        console.log("pushed");
        router.push(`/${hash}`);
      }, 500);
    }, 490);
  }, 10);
  // }
};

function getMarginForBP() {
  if (window.matchMedia("(min-width: 1000px)").matches)
    return "-80px 0px 0px 0px"; // desktop header height
  if (window.matchMedia("(min-width: 640px)").matches)
    return "-104px 0px 0px 0px"; // tablet
  return "-120px 0px 0px 0px"; // mobile
}

export default function Header() {
  const router = useRouter();
  const pathName = usePathname();

  const [observerColor, setObserverColor] = useState({
    simple: "text-white",
    long: "bg-gradient-to-r from-white to-white",
    logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763823479/logo-white_mspzr6.png",
  });
  useEffect(() => {
    const heroImage = document.getElementById("hero-image");
    if (heroImage) {
      const rootMargin = getMarginForBP();
      const observer = new IntersectionObserver(
        (entries) => {
          console.log("entries: ", entries);
          const entry = entries[0];
          if (!entry.isIntersecting) {
            const obj = {
              simple: "text-black",
              long: "bg-gradient-to-r from-black to-black",
              logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763747187/logo-f_avzipb.png",
            };
            setObserverColor(obj);
          } else {
            const obj = {
              simple: "text-white",
              long: "bg-gradient-to-r from-white to-white",
              logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763823479/logo-white_mspzr6.png",
            };
            setObserverColor(obj);
          }
        },
        {
          threshold: 0,
          rootMargin: rootMargin,
        }
      );
      observer.observe(heroImage);
      return () => observer.disconnect();
    }
  }, [pathName]);

  return (
    <>
      <div className="sticky  hidden min-[1000px]:block top-0 z-20 py-5 px-[60px] h-20">
        <div className="relative h-20">
          {/* Blurred background layer */}
          {/* <div
            className={`absolute inset-0  rounded-full ${
              pathName === "/arch"
                ? "bg-[#171717]/60 border border-[#0C0C0C]"
                : pathName === "/trustybite"
                ? "bg-white/6 border border-white/14 [box-shadow:0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_2px_1px_rgba(255,255,255,0.1)]"
                : "bg-[#FAFAFB]/40 border border-white"
            }  backdrop-blur-[10px] z-0`}
          /> */}
          <GlassEffect />
          {/* Content layer */}
          <div
            className={`relative z-10 flex items-center p-5 h-full text-white`}
          >
            <div className="flex items-center justify-between w-full">
              <Link href={"/"}>
                <div className="w-32 h-10 flex items-center">
                  <CldImage
                    src={`${
                      pathName === "/arch"
                        ? "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763823479/logo-white_mspzr6.png"
                        : pathName === "/trustybite"
                        ? `${observerColor.logo}`
                        : "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1764438866/logo_vpdwhr.png"
                    }`}
                    width={1200}
                    height={1200}
                    alt="Flawless Design logo image"
                    format="auto"
                    quality="auto"
                  />
                </div>
                {/* <p
                  className={`${instrumentSerif.className} ${
                    pathName === "/arch"
                      ? "text-white"
                      : pathName === "/trustybite"
                      ? `${observerColor.simple}`
                      : "text-black"
                  } text-2xl font-normal`}
                >
                  flawless <span className="italic">Design</span>
                </p> */}
              </Link>
              <div className="flex gap-8 ml-16">
                <a
                  href="/#services"
                  onClick={(e) => {
                    handleScrollService(e, pathName, router);
                  }}
                  className={`${
                    geistSans.className
                  } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                    pathName === "/arch"
                      ? "bg-gradient-to-r from-white to-white"
                      : pathName === "/trustybite"
                      ? `${observerColor.long}`
                      : "bg-gradient-to-r from-black to-black"
                  } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                >
                  Services
                </a>

                <Link
                  href="/#case-studies"
                  onClick={(e) => {
                    handleScrollCase(e, pathName, router);
                  }}
                  className={`${
                    geistSans.className
                  } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                    pathName === "/arch"
                      ? "bg-gradient-to-r from-white to-white"
                      : pathName === "/trustybite"
                      ? `${observerColor.long}`
                      : "bg-gradient-to-r from-black to-black"
                  } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                >
                  Case Studies
                </Link>
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
                        : pathName === "/trustybite"
                        ? `${observerColor.long}`
                        : "bg-gradient-to-r from-black to-black"
                    } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                  >
                    Work
                  </p>
                </Link>
              </div>
              <Link href={"/30-min"}>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MobileHeader pathName={pathName} observerColor={observerColor} />
    </>
  );
}

function MobileHeader({ pathName, observerColor }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const menuRef = useRef();

  useOutsideClick(menuRef, setMenuOpen);

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
          {/* Blurred background layer
          <div
            className={`absolute inset-0 rounded-full ${
              pathName === "/arch"
                ? "bg-[#171717]/60 border border-[#0C0C0C]"
                : pathName === "/trustybite"
                ? "bg-white/6 border border-white/14 [box-shadow:0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_2px_1px_rgba(255,255,255,0.1)]"
                : "bg-[#FAFAFB]/40 border border-white"
            }  backdrop-blur-md z-0`}
          /> */}
          <GlassEffect border="rounded-full" />
          {/* Content layer */}
          <div className="relative z-10 flex items-center px-3 h-full text-black">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Link href={"/"}>
                  <div className="w-32 h-10 ml-2 flex items-center">
                    <CldImage
                      src={`${
                        pathName === "/arch"
                          ? "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763823479/logo-white_mspzr6.png"
                          : pathName === "/trustybite"
                          ? `${observerColor.logo}`
                          : "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1764438866/logo_vpdwhr.png"
                      }`}
                      width={1200}
                      height={1200}
                      alt="Flawless Design logo image"
                      format="auto"
                      quality="auto"
                    />
                  </div>
                </Link>
              </div>
              <button
                className="cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open navigation menu"
                type="button"
              >
                {menuOpen ? (
                  <IoClose
                    className={`${
                      pathName === "/arch"
                        ? "text-white"
                        : pathName === "/trustybite"
                        ? `${observerColor.simple}`
                        : "text-black"
                    } text-3xl`}
                  />
                ) : (
                  <IoReorderThree
                    className={`${
                      pathName === "/arch"
                        ? "text-white"
                        : pathName === "/trustybite"
                        ? `${observerColor.simple}`
                        : "text-black"
                    } text-3xl`}
                  />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <>
              <div
                ref={menuRef}
                className="sticky block min-[1000px]:hidden top-16 z-10 w-full max-w-[1640px] py-3 px-3 h-14"
              >
                <div className="relative p-2 ">
                  {/* Blurred background layer
                  <div
                    className={`absolute inset-0 rounded-2xl ${
                      pathName === "/arch"
                        ? "bg-[#171717]/60 border border-[#0C0C0C]"
                        : pathName === "/trustybite"
                        ? "bg-white/6 border border-white/14 [box-shadow:0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_2px_1px_rgba(255,255,255,0.1)]"
                        : "bg-[#FAFAFB]/40 border border-white"
                    } backdrop-blur-md z-0`}
                  /> */}
                  <GlassEffect border="rounded-2xl" />
                  <div
                    ref={dropdownRef}
                    className="relative z-10 flex flex-col gap-3 justify-center items-center p-2 h-full text-black"
                  >
                    <a
                      href="/#services"
                      className={`${
                        geistSans.className
                      } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                        pathName === "/arch"
                          ? "bg-gradient-to-r from-white to-white"
                          : pathName === "/trustybite"
                          ? `${observerColor.long}`
                          : "bg-gradient-to-r from-black to-black"
                      } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                      onClick={(e) => {
                        setMenuOpen(false);
                        handleScrollService(e, pathName, router);
                      }}
                    >
                      Services
                    </a>
                    <div
                      className={`h-px w-10 ${
                        pathName === "/arch"
                          ? "bg-[#F1F1F1]"
                          : pathName === "/trustybite" &&
                            observerColor.simple === "text-white"
                          ? "bg-[#F1F1F1]"
                          : "bg-[#818181]"
                      }`}
                    />
                    <a
                      href="/#case-studies"
                      className={`${
                        geistSans.className
                      } text-xl cursor-pointer tracking-[-0.04em] text-transparent bg-clip-text ${
                        pathName === "/arch"
                          ? "bg-gradient-to-r from-white to-white"
                          : pathName === "/trustybite"
                          ? `${observerColor.long}`
                          : "bg-gradient-to-r from-black to-black"
                      } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                      onClick={(e) => {
                        setMenuOpen(false);
                        handleScrollCase(e, pathName, router);
                      }}
                    >
                      Case Studies
                    </a>
                    <div
                      className={`h-px w-10 ${
                        pathName === "/arch"
                          ? "bg-[#F1F1F1]"
                          : pathName === "/trustybite" &&
                            observerColor.simple === "text-white"
                          ? "bg-[#F1F1F1]"
                          : "bg-[#818181]"
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
                            : pathName === "/trustybite"
                            ? `${observerColor.long}`
                            : "bg-gradient-to-r from-black to-black"
                        } hover:from-[#B1C8FF] hover:to-[#0070F3] transition-colors duration-300`}
                      >
                        Work
                      </p>
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} href={"/30-min"}>
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
                    </Link>
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
