"use client";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);
  const thumbnailRef = useRef(null);
  const videoRef = useRef(null);

  const videoUrl = `https://res.cloudinary.com/do4rm9mc4/video/upload/v1753193389/Axel_mbmsdp.mp4`;
  const thumbnailUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipRDluP4bSopICtRitqYrNfM8kJYHbuMGRg&s`;

  useGSAP(() => {
    // Animate on scroll
    gsap.fromTo(containerRef.current, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Video play/pause on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        if (hasStarted && videoRef.current) {
          videoRef.current.play();
        }
      },
      onLeave: () => {
        if (hasStarted && videoRef.current) {
          videoRef.current.pause();
        }
      },
      onEnterBack: () => {
        if (hasStarted && videoRef.current) {
          videoRef.current.play();
        }
      },
      onLeaveBack: () => {
        if (hasStarted && videoRef.current) {
          videoRef.current.pause();
        }
      }
    });
  }, { scope: containerRef, dependencies: [hasStarted] });

  const handlePlayVideo = () => {
    setIsPlaying(true);
    setHasStarted(true);
    
    // Animate thumbnail out and video in
    gsap.to(thumbnailRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }
    });
  };

  return (
    <div ref={containerRef} className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
          {/* Thumbnail */}
          {!isPlaying && (
            <div 
              ref={thumbnailRef}
              className="absolute inset-0 cursor-pointer"
              onClick={handlePlayVideo}
            >
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaPlay className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1" />
                </div>
              </div>
              
              {/* Pulse animation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-white/50 rounded-full animate-ping" />
              </div>
            </div>
          )}

          {/* Video */}
          <video
            ref={videoRef}
            className={`w-full h-full object-cover ${isPlaying ? 'block' : 'hidden'}`}
            controls={isPlaying}
            preload="metadata"
            playsInline
            muted // Add muted for autoplay compatibility
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}