"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ArchVideoSection() {
  const videoRef = useRef(null);
  const containerRef1 = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const videoUrl =
    "https://res.cloudinary.com/dvaeb0mxy/video/upload/c_limit,w_1920/f_auto/q_auto/v1758660791/arch-video_u6meh3.mp4";

  useGSAP(() => {
    // Video container animation and play/pause logic
    gsap.fromTo(
      containerRef1.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef1.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    ScrollTrigger.create({
      trigger: containerRef1.current,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        // Play video
        setIsInView(true);
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log("Video autoplay failed:", error);
          });
        }
      },
      // onLeave: () => {
      //   setIsInView(false);
      //   if (videoRef.current) {
      //     videoRef.current.pause();
      //   }
      // },
      // onEnterBack: () => {
      //   setIsInView(true);
      //   if (videoRef.current) {
      //     videoRef.current.play().catch((error) => {
      //       console.log("Video autoplay failed:", error);
      //     });
      //   }
      // },
      // onLeaveBack: () => {
      //   setIsInView(false);
      //   if (videoRef.current) {
      //     videoRef.current.pause();
      //   }
      // },
    });
  }, { scope: containerRef1 });
  return (
    <>
      {/* Video Section */}
      <div ref={containerRef1} className="">
        <div className="mx-auto">
          <div className="relative aspect-[20/9] rounded-2xl overflow-hidden shadow-2xl bg-black group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
