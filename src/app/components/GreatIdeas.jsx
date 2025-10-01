"use client";
import React, { useRef } from "react";
import { geistSans } from "../layout";
import Image from "next/image";
import shape3 from "@/app/assets/svg/shape3.svg";
import shape4 from "@/app/assets/svg/shape4.svg";
import GreatSectionCard from "./GreatSectionCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CldImage } from "next-cloudinary";

gsap.registerPlugin(ScrollTrigger);

export default function GreatIdeas() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(
    () => {
      const subtitle = subtitleRef.current;
      const title = titleRef.current;
      const description = descriptionRef.current;

      if (!subtitle || !title || !description) return;

      // Set initial states
      gsap.set([subtitle, title, description], {
        opacity: 0,
        y: 30,
      });

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Animate elements in sequence
      tl.to(subtitle, {
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
        ) // Start 0.4s before previous animation ends
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
    },
    { scope: containerRef }
  );

  return (
    <>
      <div ref={containerRef} className="">
        <div ref={subtitleRef} className="flex justify-center items-center">
          <p
            className={`${geistSans.className} mt-3 lg:mt-6 uppercase font-normal text-xs sm:text-sm md:text-[18px] text-[#818181]`}
          >
            In a scroll-first world
          </p>
        </div>
        <div
          ref={titleRef}
          className="my-4 sm:my-6 mx-4 flex flex-col justify-center items-center text-center "
        >
          <p
            className={`${geistSans.className} leading-[100%] font-normal tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-black`}
          >
            Great ideas start the story.
          </p>
          <p
            className={`${geistSans.className} font-normal tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-black leading-tight`}
          >
            Results seal the deal.
          </p>
        </div>
        <div
          ref={descriptionRef}
          className="mx-4 sm:mx-6 lg:mx-8 flex justify-center items-center text-center "
        >
          <p
            className={`${geistSans.className} tracking-[-0.04em] text-[#585858] leading-[120%] text-lg sm:text-xl md:text-2xl  max-w-4xl`}
          >
            We craft fast-loading, conversion-ready experiences that turn
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="sm:hidden"> </span>
            instant impressions into measurable growth.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-16 lg:-top-20 -z-10">
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253926/shape3_xeyqj4.png"
              }
              width={300}
              height={300}
              alt="shape3"
              quality="auto"
              format="auto"
            />
          </div>
          <div>
            <GreatSectionCard />
          </div>
          <div className="absolute right-20 -bottom-10 -z-10">
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759254055/shape4_damo4c.png"
              }
              width={300}
              height={300}
              alt="shape4"
              quality="auto"
              format="auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
