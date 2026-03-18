import Image from "next/image";
import React from "react";
import { geistSans, instrumentSerif } from "../fonts";
import { FaArrowRight } from "react-icons/fa6";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function CustomCard() {
  const values = [
    "Multi-team coverage",
    "Strategy & consulting calls",
    "Design, dev & motion",
    "One flat monthly rate",
    "Cross-project flexibility",
    "Direct team access",
  ];
  return (
    <>
      <div className="relative items-center justify-center mt-6 min-[830px]:col-span-2 w-full">
        <div className="bg-[#F9F9FB] w-full h-[475px] sm:h-[455px] md:h-[220px] rounded-3xl shadow-lg relative overflow-visible">
          <Image
            className="w-full h-full rounded-3xl object-cover object-bottom pointer-events-none"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705258/fullbg_crrpgn.svg"
            }
            alt="design 3w"
            fill
            draggable={false}
          />
          <div>
            <div className="absolute inset-0 flex flex-col md:flex-row p-6  ">
              <div className="w-full md:w-2/3">
                <div className="flex items-center justify-between ">
                  <p
                    className={`text-black ${geistSans.className} tracking-[-0.04em] text-2xl lg:text-[36px] font-normal`}
                  >
                    Ecosystem
                    <span
                      className={`${instrumentSerif.className} ml-1 text-black italic`}
                    >
                      Unlimited
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    className={`${geistSans.className} font-normal text-sm text-[#737394]`}
                  >
                    One subscription. Every team in your ecosystem gets access
                    to design and dev,
                    <br className="hidden lg:inline-block"/> no separate contracts, no bottlenecks.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 hidden md:block z-10">
                <Link href={"/30-min"} className="flex justify-end">
                  <div className="w-full mt-3 md:w-[80%] ">
                    {/* Gradient Border Container */}
                    <div className="relative w-full p-[1.5px] rounded-full bg-[#FAFAFA] transition-transform duration-300 group [box-shadow:rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
                      {/* Inner Button Container */}
                      <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3  px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                        {/* Background Image */}

                        {/* Moving blur on hover
                                       <div className="absolute z-[1] -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" /> */}

                        {/* Button Text */}
                        <span
                          className={`tracking-[-0.02em] relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-sm sm:text-base font-semibold bg-gradient-to-r from-[#007038] to-[#00BB5E] bg-clip-text text-transparent`}
                        >
                          Get in touch
                        </span>

                        {/* Arrow Bubble with hover nudge */}
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                          <FaArrowRight
                            color="#04BD60"
                            className="w-3 h-3 sm:w-4 sm:h-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-6  w-full ">
              <div className="mt-10">
                {/* Details */}
                <div className=" md:flex xl:justify-between  flex-wrap px-5 relative z-10">
                  {values.map((txt, detailIdx) => {
                    return (
                      <div
                        key={txt}
                        className="lg:flex lg:items-start gap-2 text-center"
                      >
                        <p
                          className={`${geistSans.className} text-[#555555] bg-[#F5F5F7] py-1.5 lg:py-1 px-4 mx-0.5 my-2 lg:my-1 rounded-full tracking-[-0.01em] text-[15px] font-normal leading-relaxed`}
                        >
                          {txt}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full md:w-1/3 block px-5 md:hidden z-10">
                <Link href={"/30-min"} className="flex justify-end ">
                  <div className="w-full mt-3 md:w-[80%]">
                    {/* Gradient Border Container */}
                    <div className="relative w-full p-[1.5px] rounded-full bg-[#FAFAFA] transition-transform duration-300  [box-shadow:rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
                      {/* Inner Button Container */}
                      <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3  px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                        {/* Background Image */}

                        {/* Moving blur on hover
                                       <div className="absolute z-[1] -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-8 bg-[#A6CFFF] blur-lg rounded-full transition-all duration-500 group-hover:bottom-0 group-hover:blur-[32px]" /> */}

                        {/* Button Text */}
                        <span
                          className={`tracking-[-0.02em] relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-sm sm:text-base font-semibold bg-gradient-to-r from-[#007038] to-[#00BB5E] bg-clip-text text-transparent`}
                        >
                          Get in touch
                        </span>

                        {/* Arrow Bubble with hover nudge */}
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                          <FaArrowRight
                            color="#04BD60"
                            className="w-3 h-3 sm:w-4 sm:h-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
          </div>
          <Image
            className="absolute w-full h-[200px] object-cover rounded-3xl -bottom-2 -z-1 pointer-events-none"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755704992/design4_tad1ma.svg"
            }
            width={380}
            height={100}
            alt="design4"
            draggable={false}
          />
        </div>
      </div>
      {/* <div className="block md:hidden">
        <SmallVersion values={values} />
      </div> */}
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
            draggable={false}
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex justify-between flex-col p-6 text-center z-10">
            <div className="flex items-center justify-between mb-4">
              <p
                className={`text-black ${geistSans.className} text-2xl font-normal`}
              >
                Ecosystem
                <span
                  className={`${instrumentSerif.className} ml-1 text-black italic`}
                >
                  Unlimited
                </span>
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
                        draggable={false}
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
            {/* <div className="mt-6">
              <div className="bg-[#F4F6FE] p-2 rounded-xl border border-[#E9E9FF]">
                <p
                  className={`${geistSans.className} font-normal text-[10px] text-[#737394]`}
                >
                  For projects and teams with specific goals, timelines, and
                  scope.
                </p>
              </div>
            </div> */}
            <Link href={"/30-min"}>
              <div className="mt-3">
                {/* Gradient Border Container */}
                <div className="relative cursor-pointer w-full p-[1.5px] rounded-full bg-[#FAFAFA] transition-transform duration-300 hover:scale-[1.03] group [box-shadow:rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
                  {/* Inner Button Container */}
                  <div className="relative w-full flex justify-center items-center gap-2 sm:gap-3  px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full bg-transparent overflow-hidden">
                    {/* Background Image */}
                    {/* <div className="absolute inset-0  rounded-full overflow-hidden z-0">
                      <Image
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705123/designblue_scnjef.svg"
                        }
                        alt="button background"
                        fill
                        className="object-cover rounded-full"
                        draggable={false}
                      />
                    </div> */}

                    {/* Button Text */}
                    <span
                      className={`tracking-[-0.02em] cursor-pointer relative z-10 ml-1.5 sm:ml-2 ${geistSans.className} text-sm sm:text-base font-semibold bg-gradient-to-r from-[#005BD4] to-[#1AC4F5] bg-clip-text text-transparent`}
                    >
                      Book a Call
                    </span>

                    {/* Arrow Bubble with hover nudge */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white cursor-pointer relative z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 [box-shadow:_rgba(255,255,255,0.1)_0px_1px_1px_0px_inset,_rgba(50,50,93,0.25)_0px_2px_3px_2px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
                      <FaArrowRight
                        color="#0FA9EE"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
          draggable={false}
        />
      </div>
    </>
  );
}
