"use client";
import React, { useRef } from "react";
import { geistSans, instrumentSerif } from "../layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import design1 from "@/app/assets/svg/design1.svg";
import design11 from "@/app/assets/svg/design11.svg";
import design2 from "@/app/assets/svg/design2.svg";
import design22 from "@/app/assets/svg/design22.svg";
import design3 from "@/app/assets/svg/design3.svg";
import design33 from "@/app/assets/svg/design33.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HowitWorksSection() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const subtitle = subtitleRef.current;
      const title = titleRef.current;
      const description = descriptionRef.current;
      const cards = cardsRef.current?.children;

      if (!subtitle || !title || !description || !cards) return;

      // Set initial states for text elements
      gsap.set([subtitle, title, description], {
        opacity: 0,
        y: 30,
      });

      // Set initial states for cards
      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.9,
      });

      // Create animation timeline for text
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate text elements in sequence
      textTl
        .to(subtitle, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );

      // Animate cards with stagger
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <div ref={containerRef}>
        <div ref={subtitleRef} className="flex justify-center items-center">
          <p
            className={`${geistSans.className} mt-3 lg:mt-6 uppercase font-normal text-xs sm:text-sm md:text-[18px] text-[#818181]`}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 max-w-7xl mx-auto px-4 sm:px-6"
        >
          {/* card 1 */}
          <div className="relative h-[380px] sm:h-[430px] lg:h-[500px] w-full rounded-2xl lg:rounded-4xl overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            {/* Top image with drop shadow */}
            <Image
              src={design11}
              alt="design11"
              className="absolute z-10 top-[10%] left-1/2 -translate-x-1/2 brightness-[89.5%] drop-shadow-[0_100px_50px_rgba(0,0,0,0.5)] bg-transparent rounded-4xl transition-transform duration-300 ease-out group-hover:scale-105"
            />

            {/* Background image */}
            <Image
              src={design1}
              fill
              alt="design1"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />

            {/* Text content with blurred backdrop */}
            <div className="absolute h-full w-full bottom-0 bg-black/20 blur-[15px]" />
            <div className="absolute h-1/3 w-full bottom-0 bg-gradient-to-t from-[#1C133A] to-transparent" />
            <div className="absolute bottom-0 z-10 w-full p-3 sm:p-4 lg:p-6 max-w-md lg:max-w-lg">
              <p
                className={`${geistSans.className} font-normal text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl text-white mb-1 sm:mb-2`}
              >
                Discovery{" "}
                <span
                  className={`${instrumentSerif.className} italic font-normal`}
                >
                  Call
                </span>
              </p>
              <p
                className={`${geistSans.className} text-base sm:text-lg lg:text-base text-white leading-relaxed`}
              >
                We kick things off with a short intro call to understand your
                goals and what you need help with, no pressure, just clarity.
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative h-[380px] sm:h-[430px] lg:h-[500px] w-full rounded-2xl lg:rounded-4xl overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            <Image
              src={design22}
              alt="design22"
              className="absolute z-10 top-[10%] left-1/2 -translate-x-1/2 brightness-[89.5%] drop-shadow-[0_100px_50px_rgba(0,0,0,0.5)] bg-transparent rounded-4xl transition-transform duration-300 ease-out group-hover:scale-105"
            />
            <Image
              src={design2}
              fill
              alt="design2"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <div className="absolute h-full w-full bottom-0 bg-black/20 blur-[15px]" />
            <div className="absolute h-1/3 w-full bottom-0 bg-gradient-to-t from-[#1B304B] to-transparent" />
            <div className="absolute bottom-0 p-3 sm:p-4 lg:p-6 max-w-md lg:max-w-lg z-10">
              <p
                className={`${geistSans.className} font-normal text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl text-white mb-1 sm:mb-2`}
              >
                Smooth{" "}
                <span
                  className={`${instrumentSerif.className} italic font-normal`}
                >
                  Onboarding
                </span>
              </p>
              <p
                className={`${geistSans.className} text-base sm:text-lg lg:text-base text-white leading-relaxed`}
              >
                You get access to our shared workspace (Trello, Telegram, Slack,
                etc.). We align on timelines and tasks, all set in under 24h.
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="relative h-[380px] sm:h-[430px] lg:h-[500px] col-span-1 sm:col-span-2 lg:col-span-1 w-full rounded-2xl lg:rounded-4xl overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            <Image
              src={design33}
              alt="design33"
              className="absolute z-10 top-[10%] left-1/2 -translate-x-1/2 brightness-[89.5%] drop-shadow-[0_100px_50px_rgba(0,0,0,0.5)] bg-transparent rounded-4xl transition-transform duration-300 ease-out group-hover:scale-105"
            />
            <Image
              src={design3}
              fill
              alt="design3"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <div className="absolute h-full w-full bottom-0 bg-black/20 blur-[15px]" />
            <div className="absolute h-1/3 w-full bottom-0 bg-gradient-to-t from-[#4C2450] to-transparent" />
            <div className="absolute bottom-0 p-3 sm:p-4 lg:p-6 max-w-md lg:max-w-lg z-10">
              <p
                className={`${geistSans.className} font-normal text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl text-white mb-1 sm:mb-2`}
              >
                We Start{" "}
                <span
                  className={`${instrumentSerif.className} italic font-normal`}
                >
                  Working
                </span>
              </p>
              <p
                className={`${geistSans.className} text-base sm:text-lg lg:text-base text-white leading-relaxed`}
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
