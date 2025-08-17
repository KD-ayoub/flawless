"use client";
import VideoSection from "@/app/components/VideoSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

export default function WorkPage() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const url =
    "https://framerusercontent.com/images/Yy3ar0iteoa8i0nppzmM4eVrCOE.jpg?lossless=1";

  useGSAP(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([containerRef.current, imageRef.current], {
      opacity: 0,
      y: 50,
    });

    // Animate in sequence
    tl.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }).to(
      imageRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    ); // Start 0.4s before previous animation ends
  }, []);

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div
        ref={containerRef}
        className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Responsive Image Container */}
        <div className="relative w-full  mx-auto">
          {/* Aspect ratio container */}
          <div
            ref={imageRef}
            className="relative aspect-video w-full rounded-xl overflow-hidden mt-4"
          >
            <Image
              src={url}
              fill
              alt="Work Background"
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
