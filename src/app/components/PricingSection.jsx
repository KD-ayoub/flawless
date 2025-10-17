"use client";
import React, { useRef } from "react";
import { geistSans } from "../layout";
import PricingCards from "./PricingCards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // const elements = containerRef.current.children;
    
    // // Set initial state
    // gsap.set(elements, {
    //   opacity: 0,
    //   y: 50,
    // });

    // // Create staggered animation
    // gsap.to(elements, {
    //   opacity: 1,
    //   y: 0,
    //   duration: 0.3,
    //   stagger: 0.2,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top 80%",
    //     end: "bottom 20%",
    //     toggleActions: "play none none none",
    //   },
    // });
  }, []);

  return (
    <div>
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 py-10"
      >
        <h1 className={`${geistSans.className} font-normal tracking-[-0.04em] text-3xl md:text-4xl lg:text-5xl text-left`}>
          High-impact work.
        </h1>
        <h1 className={`${geistSans.className} font-normal tracking-[-0.04em] text-3xl md:text-4xl lg:text-5xl text-left`}>
          Clear, transparent pricing.
        </h1>
        <p className={`${geistSans.className} text-[#585858] mt-2 tracking-[-0.04em] text-lg sm:text-xl leading-[120%]`}>
          You tell us what you need. We'll handle the rest, no overthinking, no
          overbilling.
        </p>
        <PricingCards/>
      </div>
    </div>
  );
}