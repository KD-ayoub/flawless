import Image from "next/image";
import React from "react";
import { geistSans, instrumentSerif } from "../layout";
import { FaArrowRight } from "react-icons/fa6";
import { CldImage } from "next-cloudinary";

export default function CustomCard() {
  const values = [
    "Custom scope & timeline",
    "Optional development",
    "Unlimited revisions",
    "Branding or product design",
    "Dedicated team",
    "Milestone payments",
  ];
  return (
    <>
      <div className="relative hidden min-[1300px]:flex items-center justify-center mt-6  ">
        <div className="bg-[#F9F9FB] w-full h-[220px] rounded-3xl shadow-lg relative overflow-visible">
          <Image
            className="w-full h-full rounded-3xl object-cover"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705258/fullbg_crrpgn.svg"
            }
            alt="design 3w"
            fill
          />
          <div className="absolute inset-0 flex p-6  z-10">
            <div className="w-2/3">
              <div className="flex items-center justify-between ">
                <h3
                  className={`text-black ${geistSans.className} text-2xl font-normal`}
                >
                  Custom
                  <span
                    className={`${instrumentSerif.className} ml-1 text-black italic`}
                  >
                    Package
                  </span>
                </h3>
              </div>
              <div>
                <p
                  className={`${geistSans.className} font-normal text-sm text-[#737394]`}
                >
                  For projects and teams with specific goals, timelines, and
                  scope.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Details */}
                  <div className="space-y-3 grid grid-cols-3 sm:space-y-4 relative z-10">
                    {values.map((txt, detailIdx) => {
                      return (
                        <div
                          key={txt}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <Image
                            src={
                              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705925/markicon4_wokumj.svg"
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
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center items-center gap-5">
                <p
                  className={`${geistSans.className} text-base text-[#57576E] tracking-[-0.04em]`}
                >
                  Starting at <span className="text-black">$</span>
                </p>
                <span
                  className={`${instrumentSerif.className} tracking-[-0.04em] leading-[50px] text-black text-7xl`}
                >
                  {6999}
                </span>
                <p
                  className={`self-start ${geistSans.className}  text-[#57576E]`}
                >
                  /Month
                </p>
              </div>
              <div className="mt-12">
                {/* Gradient Border Container */}
                <div className="relative cursor-pointer w-full p-[1.5px] rounded-full bg-gradient-to-r from-[#FD65C5] to-[#FD65C5] transition-transform duration-300 hover:scale-[1.03] group shadow-[#FD65C5] shadow-md">
                  {/* Inner Button Container */}
                  <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3  px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0  rounded-full overflow-hidden z-0">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705005/design3_vulu99.svg"
                        }
                        alt="button background"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>

                    {/* Moving blur on hover
                                       <div className="absolute z-[1] cursor-pointer -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" /> */}

                    {/* Button Text */}
                    <button
                      className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-white text-sm sm:text-base font-semibold`}
                    >
                      Book a Call
                    </button>

                    {/* Arrow Bubble with hover nudge */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                      <FaArrowRight
                        color="#FD65C5"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="absolute w-full h-[200px] object-cover rounded-3xl -bottom-2 -z-1"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705005/design3_vulu99.svg"
            }
            width={380}
            height={100}
            alt="design4"
          />
        </div>
      </div>
      <div className="block min-[1300px]:hidden">
        <SmallVersion values={values} />
      </div>
    </>
  );
}

function SmallVersion({ values }) {
  return (
    <>
      <div className="relative flex items-center justify-center mt-6">
        <div
          className={`bg-[#F9F9FB] w-[350px] min-[400px]:w-[380px] h-[500px] md:h-[550px] rounded-3xl shadow-lg relative overflow-visible`}
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
                Custom
                <span
                  className={`${instrumentSerif.className} ml-1 text-black italic`}
                >
                  Package
                </span>
              </h3>
            </div>
            <div className="flex items-center gap-5">
              <p
                className={`${geistSans.className} text-base text-[#57576E] tracking-[-0.04em]`}
              >
                Starting at <span className="text-black">$</span>
              </p>
              <span
                className={`${instrumentSerif.className} tracking-[-0.04em] leading-[50px] text-black text-[53px]`}
              >
                {6999}
              </span>
              <p
                className={`self-start ${geistSans.className}  text-[#57576E]`}
              >
                /Month
              </p>
            </div>
            <div className="mt-4">
              {/* Details */}
              <div className="space-y-3 sm:space-y-4 relative z-10">
                {values.map((txt, detailIdx) => {
                  return (
                    <div key={txt} className="flex items-start gap-2 sm:gap-3">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705925/markicon4_wokumj.svg"
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
                  For projects and teams with specific goals, timelines, and
                  scope.
                </p>
              </div>
            </div>
            <div className="mt-3">
              {/* Gradient Border Container */}
              <div className="relative cursor-pointer w-full p-[1.5px] rounded-full bg-gradient-to-r from-[#FD65C5] to-[#FD65C5] transition-transform duration-300 hover:scale-[1.03] group shadow-[#FD65C5] shadow-md">
                {/* Inner Button Container */}
                <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3  px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0  rounded-full overflow-hidden z-0">
                    <Image
                      src={
                        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705005/design3_vulu99.svg"
                      }
                      alt="button background"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  {/* Moving blur on hover
                                 <div className="absolute z-[1] cursor-pointer -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" /> */}

                  {/* Button Text */}
                  <button
                    className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-white text-sm sm:text-base font-semibold`}
                  >
                    Book a Call
                  </button>

                  {/* Arrow Bubble with hover nudge */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                    <FaArrowRight
                      color="#FD65C5"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute object-cover rounded-3xl -bottom-2 -z-1"
          src={
            "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705005/design3_vulu99.svg"
          }
          width={380}
          height={90}
          alt="design4"
        />
      </div>
    </>
  );
}
