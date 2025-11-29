"use client";
import React, { useRef } from "react";
import { geistSans, instrumentSerif } from "../layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

gsap.registerPlugin(ScrollTrigger);

export default function HowitWorksSection() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      // const subtitle = subtitleRef.current;
      // const title = titleRef.current;
      // const description = descriptionRef.current;
      // const cards = cardsRef.current?.children;

      // if (!subtitle || !title || !description || !cards) return;

      // // Set initial states for text elements
      // gsap.set([subtitle, title, description], {
      //   opacity: 0,
      //   y: 30,
      // });

      // // Set initial states for cards
      // gsap.set(cards, {
      //   opacity: 0,
      //   y: 60,
      //   scale: 0.9,
      // });

      // // Create animation timeline for text
      // const textTl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top 80%",
      //     end: "bottom 20%",
      //     toggleActions: "play none none none",
      //   },
      // });

      // // Animate text elements in sequence
      // textTl
      //   .to(subtitle, {
      //     opacity: 1,
      //     y: 0,
      //     duration: 0.6,
      //     ease: "power2.out",
      //   })
      //   .to(
      //     title,
      //     {
      //       opacity: 1,
      //       y: 0,
      //       duration: 0.6,
      //       ease: "power2.out",
      //     },
      //     "-=0.4"
      //   )
      //   .to(
      //     description,
      //     {
      //       opacity: 1,
      //       y: 0,
      //       duration: 0.6,
      //       ease: "power2.out",
      //     },
      //     "-=0.4"
      //   );

      // // Animate cards with stagger
      // gsap.to(cards, {
      //   opacity: 1,
      //   y: 0,
      //   scale: 1,
      //   duration: 1,
      //   ease: "power3.out",
      //   stagger: 0.2,
      //   scrollTrigger: {
      //     trigger: cardsRef.current,
      //     start: "top 85%",
      //     toggleActions: "play none none none",
      //   },
      // });
    },
    { scope: containerRef }
  );

  return (
    <>
      <div ref={containerRef}>
        <div ref={subtitleRef} className="flex justify-center items-center">
          <p
            className={`${geistSans.className} uppercase font-normal text-xs sm:text-sm md:text-[18px] text-[#6B6B6B]`}
          >
            How it works
          </p>
        </div>
        <div
          ref={titleRef}
          className="my-1 sm:my-3 mx-4 flex flex-col justify-center items-center text-center "
        >
          <p
            className={`${geistSans.className} tracking-[-0.04em] leading-[100%] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-black`}
          >
            Design that moves
          </p>
          <p
            className={`${geistSans.className} tracking-[-0.04em] leading-[100%] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-black `}
          >
            fast and feels easy.
          </p>
        </div>
        <div
          ref={descriptionRef}
          className="mx-4 sm:mx-6 lg:mx-8 flex justify-center items-center text-center "
        >
          <p
            className={`${geistSans.className} text-[#585858] tracking-[-0.04em] text-lg sm:text-xl md:text-2xl max-w-4xl leading-[120%]`}
          >
            A simple 3-step process that gets you from
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="sm:hidden"> </span>
            idea to impact without the back-and-forth.
          </p>
        </div>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14 my-10 max-w-7xl mx-auto px-4 sm:px-6"
        >
          {/* card 1 */}
          <div className="relative h-[430px] sm:h-[460px] lg:h-[510px] w-full rounded-[20px] overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl group">
            {/* Top image with drop shadow */}
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759338554/design11_tvujva.png"
              }
              alt="design11"
              width={1000}
              height={1000}
              quality="auto"
              format="auto"
              className="w-[290px] h-[230px] sm:w-[320px] sm:h-[240px] md:w-[350px] md:h-[260px] lg:w-[300px] lg:h-[240px] xl:w-[300px] xl:h-[250px] absolute z-10 top-2 sm:top-4 lg:top-[9%] left-1/2 -translate-x-1/2 brightness-100 drop-shadow-[0px_20px_30px_rgba(0,0,0,0.9)] object-cover rounded-2xl lg:rounded-3xl transition-transform duration-300 ease-out group-hover:scale-105"
              draggable={false}
            />

            {/* Background image */}
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705017/design1_yyo7a7.svg"
              }
              width={1000}
              height={1000}
              quality="auto"
              format="auto"
              alt="design1"
              className="object-cover brightness-125 h-full transition-transform duration-300 ease-out group-hover:scale-110"
              draggable={false}
            />

            {/* Text content with blurred backdrop */}
            <div className="absolute h-full w-full bottom-0 bg-black/20 blur-[15px]" />
            <div className="absolute h-1/2 w-full bottom-0 bg-gradient-to-t from-[#1C133A] via-[#1C133A] to-transparent" />
            <div className="absolute bottom-0 z-10 w-full p-3 sm:p-4 lg:p-6 max-w-md lg:max-w-lg">
              <p
                className={`${geistSans.className} font-normal tracking-[-0.04em] text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl text-white mb-1 sm:mb-2`}
              >
                Discovery{" "}
                <span
                  className={`${instrumentSerif.className} italic font-normal`}
                >
                  Call
                </span>
              </p>
              <p
                className={`${geistSans.className} tracking-[-0.04em] text-base sm:text-lg lg:text-base text-white leading-[120%]`}
              >
                We kick things off with a short intro call to understand your
                goals and what you need help with, no pressure, just clarity.
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative h-[430px] sm:h-[460px] lg:h-[510px] w-full rounded-[20px] overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl group">
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759338845/design22_q7ygff.png"
              }
              alt="design22"
              width={1000}
              height={1000}
              quality="auto"
              format="auto"
              className="w-[290px] h-[230px] sm:w-[320px] sm:h-[240px] md:w-[350px] md:h-[260px] lg:w-[300px] lg:h-[240px] xl:w-[300px] xl:h-[240px] absolute z-10 top-[6%] lg:top-[14%] left-1/2 -translate-x-1/2 brightness-100 drop-shadow-[0px_20px_30px_rgba(0,0,0,0.9)] bg-transparent rounded-4xl transition-transform duration-300 ease-out group-hover:scale-105"
              draggable={false}
            />
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755704982/design2_zpx3mf.svg"
              }
              width={1000}
              height={1000}
              quality="auto"
              format="auto"
              alt="design2"
              draggable={false}
              className="object-cover brightness-125 h-full transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <div className="absolute h-full w-full bottom-0 bg-black/20 blur-[15px]" />
            <div className="absolute h-1/2 w-full bottom-0 bg-gradient-to-t from-[#1B304B] via-[#1B304B] to-transparent" />
            <div className="absolute bottom-0 p-3 sm:p-4 lg:p-6 max-w-md lg:max-w-lg z-10">
              <p
                className={`${geistSans.className} tracking-[-0.04em] font-normal text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl text-white mb-1 sm:mb-2`}
              >
                Smooth{" "}
                <span
                  className={`${instrumentSerif.className} italic font-normal`}
                >
                  Onboarding
                </span>
              </p>
              <p
                className={`${geistSans.className} tracking-[-0.04em] text-base sm:text-lg lg:text-base text-white leading-[120%]`}
              >
                You get access to our shared workspace (Trello, Telegram, Slack,
                etc.). We align on timelines and tasks, all set in under 24h.
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="relative h-[430px] sm:h-[430px] lg:h-[510px] col-span-1 sm:col-span-2 lg:col-span-1 w-full rounded-[20px] overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl group">
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759339022/design33_kvoh1a.png"
              }
              alt="design33"
              width={1000}
              height={1000}
              quality="auto"
              format="auto"
              draggable={false}
              className="w-[290px] h-[280px] sm:w-[320px] sm:h-[290px] md:w-[350px] md:h-[300px] lg:w-[300px] lg:h-[290px] xl:w-[320px] xl:h-[300px] absolute z-10 top-[6%] lg:top-[8%] left-1/2 -translate-x-1/2 brightness-100 drop-shadow-[0px_20px_30px_rgba(0,0,0,0.9)] bg-transparent rounded-4xl transition-transform duration-300 ease-out group-hover:scale-105"
            />
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705005/design3_vulu99.svg"
              }
              width={1000}
              height={1000}
              quality="auto"
              format="auto"
              alt="design3"
              draggable={false}
              className="object-cover brightness-125 h-full transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <div className="absolute h-full w-full bottom-0 bg-black/20 blur-[15px]" />
            <div className="absolute h-1/2 w-full bottom-0 bg-gradient-to-t from-[#4C2450] via-[#4C2450] to-transparent" />
            <div className="absolute bottom-0 p-3 sm:p-4 lg:p-6 max-w-md lg:max-w-lg z-10">
              <p
                className={`${geistSans.className} tracking-[-0.04em] font-normal text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl text-white mb-1 sm:mb-2`}
              >
                We Start{" "}
                <span
                  className={`${instrumentSerif.className} italic font-normal`}
                >
                  Working
                </span>
              </p>
              <p
                className={`${geistSans.className} leading-[120%] tracking-[-0.04em] text-base sm:text-lg lg:text-base text-white`}
              >
                We design, build, or animate based on your needs. Fast
                turnarounds, real updates, and no back-and-forth headaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
