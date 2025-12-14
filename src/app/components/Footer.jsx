"use client";

import React, { useState } from "react";
import { geistSans } from "../fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CldImage } from "next-cloudinary";

export default function Footer() {
  const pathName = usePathname();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("contact@flawless.design");
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <>
      {/* Fixed footer image at bottom - only half visible */}
      <div className=" ">
        <div className=" mx-auto w-full max-w-7xl  px-4 pb-8 lg:pb-14 ">
          <div
            className={` relative overflow-hidden backdrop-blur-[28px] rounded-[20px] p-4 lg:p-8 ${
              pathName === "/arch"
                ? "bg-[#171717]/60 border border-[#0C0C0C]"
                : pathName === "/trustybite"
                ? "bg-white/6 border border-white/14 [box-shadow:0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_2px_1px_rgba(255,255,255,0.1)]"
                : "bg-[#FAFAFB]/20  border border-white"
            }`}
          >
            <div className="grid grid-cols-1 min-[1080px]:grid-cols-3">
              <div className="">
                <div className="w-32 h-10 flex items-center">
                  <CldImage
                    src={`${
                      pathName === "/arch"
                        ? "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761925285/logo-white_kksiem.png"
                        : pathName === "/trustybite"
                        ? `https://res.cloudinary.com/dvaeb0mxy/image/upload/v1764438866/logo_vpdwhr.png`
                        : "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1764438866/logo_vpdwhr.png"
                    }`}
                    width={1200}
                    height={1200}
                    alt="Flawless Design logo image"
                    format="auto"
                    quality="auto"
                  />
                </div>
                <div>
                  <p
                    className={`${
                      geistSans.className
                    } mt-2 md:whitespace-nowrap font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                      pathName === "/arch" ? "text-white/70" : "text-[#505050]"
                    }`}
                  >
                    Flawless Design. Relentless execution
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 my-10 min-[1080px]:my-0">
                <div className="flex flex-col justify-center items-start min-[1080px]:items-center ">
                  <div>
                    <Link
                      href={
                        "https://x.com/flawlessdesignX?t=aaRu5IUtRXhQruXcssY1Tg&s=09"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        } `}
                      >
                        X ( Twitter)
                      </p>
                    </Link>
                    <Link
                      href={
                        "https://www.instagram.com/flawless.design_?igsh=YW1samR5dXAwZmR6"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        }`}
                      >
                        Instagram
                      </p>
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/in/flawless-design-008b47397/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        }`}
                      >
                        Linkedin
                      </p>
                    </Link>
                    <Link
                      href={
                        "https://t.me/axeldesigns"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        }`}
                      >
                        Telegram
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start min-[1080px]:items-center">
                  <div>
                    <Link href={"/work"}>
                      <p
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        }`}
                      >
                        Latest Projects
                      </p>
                    </Link>
                    <Link
                      href={
                        "https://contra.com/flawless_design_96se3ree/work?r=flawless_design_96se3ree"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        }`}
                      >
                        Contra
                      </p>
                    </Link>
                    <Link
                      href={"https://dribbble.com/flawless_design"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        }`}
                      >
                        Dribbble
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start min-[1080px]:items-center">
                  <div>
                    <Link href={"/30-min"}>
                      <p
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        }`}
                      >
                        Book a call
                      </p>
                    </Link>
                    <div className="relative">
                      <p
                        onClick={copyToClipboard}
                        title="Click to copy email"
                        className={`${
                          geistSans.className
                        } mt-2 cursor-pointer font-normal text-[16px] md:text-[20px] tracking-[-0.04em] ${
                          pathName === "/arch" ? "text-white" : "text-black"
                        } `}
                      >
                        Contact Us
                      </p>

                      {/* Theme-aware tooltip */}
                      <div
                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 ${
                          pathName === "/arch"
                            ? "bg-white text-black"
                            : "bg-black text-white"
                        } text-sm px-3 py-2 rounded-lg whitespace-nowrap z-10 transition-all duration-300 ${
                          copied
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        Email copied!
                        <div
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                            pathName === "/arch"
                              ? "border-t-white"
                              : "border-t-black"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[1080px]:flex-row items-start gap-2 min-[1080px]:gap-8 mt-0 lg:mt-20">
              <div>
                <p
                  className={`${
                    geistSans.className
                  } mt-2 font-normal text-[14px] md:text-[18px] tracking-[-0.04em] ${
                    pathName === "/arch" ? "text-white" : "text-black/70"
                  }`}
                >
                  © 2025 Flawless Design. All rights reserved.
                </p>
              </div>
              <div className="ml-4 min-[1080px]:ml-0">
                <ul className="list-disc flex items-center gap-8">
                  <li
                    className={`${
                      geistSans.className
                    } mt-2 font-normal text-[14px] md:text-[18px] tracking-[-0.04em] ${
                      pathName === "/arch" ? "text-white" : "text-black/70"
                    }`}
                  >
                    contact@flawless.design
                  </li>
                  {/* <li
                    className={`${
                      geistSans.className
                    } mt-2 font-normal text-[14px] md:text-[18px] tracking-[-0.04em] ${
                      pathName === "/arch" ? "text-white" : "text-black/70"
                    }`}
                  >
                    Terms of Service
                  </li> */}
                </ul>
              </div>
            </div>
            <div className=" absolute w-[350px] h-[380px] -right-32 bottom-[420px] md:-bottom-[180px]">
              <CldImage
                className=" w-full h-full object-fill rotate-90 md:rotate-12"
                width={1200}
                height={1220}
                src={
                  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761129229/Rectangle_gfavsa.png"
                }
                alt="shape2"
                quality="auto:eco"
                format="auto"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden pointer-events-none">
          <footer className=" w-full -z-10  relative ">
            {/* <div className="absolute blur-md md:blur-md -top-[185vw] -left-[55vw] min-[2000px]:-top-[190vw] min-[2000px]:-left-[68vw] min-[768px]:-top-[185vw] min-[768px]:-left-[50vw]  w-[200vw] h-[200vw] footer-bg rounded-full rotate-180"></div> */}
            <div className="w-full ">
              <CldImage
                src={
                  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1762018400/footer-image_jjlcad.png"
                }
                className=" w-full h-full object-cover object-bottom "
                width={1200}
                height={1200}
                alt="footer image"
                sizes="100vw"
                format="auto"
                quality="auto:eco"
                priority
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
