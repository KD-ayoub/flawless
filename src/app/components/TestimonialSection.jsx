"use client";
import React, { useRef } from "react";
import { geistSans } from "../layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfiniteTestimonials from "./InfiniteTestimonials";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

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
      duration: 0.8,
      ease: "power2.out"
    })
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4") // Start 0.4s before previous animation ends
    .to(description, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <>
      <div ref={containerRef}>
        <div ref={subtitleRef} className="flex justify-center items-center">
          <p
            className={`${geistSans.className} mt-3 lg:mt-6 uppercase font-normal text-xs sm:text-sm md:text-[18px] text-[#818181]`}
          >
            Proof &#62; Promises
          </p>
        </div>
        <div ref={titleRef} className="my-1 sm:my-3 mx-4 flex flex-col justify-center items-center text-center ]">
          <p
            className={`${geistSans.className} tracking-[-0.04em] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[100%]`}
          >
            What it's like working with us
          </p>
        </div>
        <div ref={descriptionRef} className="mx-4 sm:mx-6 lg:mx-8 flex justify-center items-center text-center ">
          <p
            className={`${geistSans.className} text-[#585858] tracking-[-0.04em] text-lg sm:text-xl md:text-2xl max-w-4xl leading-[120%]`}
          >
            Unfiltered thoughts from clients who've seen the process and the
            results.
          </p>
        </div>
        <div className="mt-10 md:mt-14">
          <InfiniteTestimonials />
        </div>
      </div>
    </>
  );
}