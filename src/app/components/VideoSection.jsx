"use client";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const videoUrl = `https://res.cloudinary.com/do4rm9mc4/video/upload/v1753193389/samples/Axel_mbmsdp.mp4`;

  useGSAP(
    () => {
      // Animate on scroll
      gsap.fromTo(
        containerRef.current,
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
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Video autoplay/pause on scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          setIsInView(true);
          if (videoRef.current) {
            videoRef.current.play().catch((error) => {
              console.log("Video autoplay failed:", error);
            });
          }
        },
        onLeave: () => {
          setIsInView(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        },
        onEnterBack: () => {
          setIsInView(true);
          if (videoRef.current) {
            videoRef.current.play().catch((error) => {
              console.log("Video autoplay failed:", error);
            });
          }
        },
        onLeaveBack: () => {
          setIsInView(false);
          if (videoRef.current) {
            videoRef.current.pause(); // Fixed: Should pause, not play
          }
        },
      });
    },
    { scope: containerRef }
  );

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div ref={containerRef} className="py-5 sm:py-7 lg:py-10">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted // Start muted for autoplay
            playsInline
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Mute/Unmute indicator - clickable */}
          <div
            onClick={toggleMute}
            className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm border border-white/20 cursor-pointer hover:bg-black/80 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              {isMuted ? (
                <HiVolumeOff className="w-4 h-4" />
              ) : (
                <HiVolumeUp className="w-4 h-4" />
              )}
              {/* <span>{isMuted ? "Click to unmute" : "Click to mute"}</span> */}
            </div>
          </div>

          {/* Video state indicator
          <div className="absolute top-4 right-4">
            <div
              className={`w-3 h-3 rounded-full ${
                isInView ? "bg-green-500" : "bg-red-500"
              } opacity-75`}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
