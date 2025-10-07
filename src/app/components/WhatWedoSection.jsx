"use client";
import React, { useEffect, useRef } from "react";
import { geistSans } from "../layout";
import HorizontalCards from "./HorizontalCards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenisScrollOnHash } from "./LandingPage";

gsap.registerPlugin(ScrollTrigger);






export default function WhatWedoSection() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  // useLenisScrollOnHash();
  useGSAP(() => {
    const subtitle = subtitleRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;

    if (!subtitle || !title || !description) return;

    // Set initial states
    gsap.set([subtitle, title, description], {
      opacity: 0,
      y: 30
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Animate elements in sequence
    tl.to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    })
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4") // Start 0.4s before previous animation ends
    .to(description, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <>
      <div id="services" ref={containerRef}>
        <div ref={subtitleRef} className="flex justify-center items-center">
          <p
            className={`${geistSans.className} uppercase font-normal text-xs sm:text-sm md:text-[18px] text-[#818181]`}
          >
            WHAT WE DO
          </p>
        </div>
        <div ref={titleRef} className="my-6 sm:my-4 mx-4  flex flex-col justify-center items-center text-center ">
          <p
            className={`${geistSans.className} font-normal leading-[100%] tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-black `}
          >
            Design & Code, delivered
          </p>
          <p
            className={`${geistSans.className} font-normal tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-black `}
          >
            flawless from 0 to 1
          </p>
        </div>
        <div ref={descriptionRef} className="mx-4 sm:mx-6 lg:mx-8 flex justify-center items-center text-center tracking-[-0.04em]">
          <p
            className={`${geistSans.className} text-[#585858] leading-[120%] text-lg sm:text-xl md:text-2xl max-w-4xl`}
          >
            One squad, four expert lanes. Pick the pieces you need or let
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="sm:hidden"> </span>
            us run the whole playbook from concept to launch.
          </p>
        </div>
        <div>
          <HorizontalCards/>
        </div>
      </div>
    </>
  );
}