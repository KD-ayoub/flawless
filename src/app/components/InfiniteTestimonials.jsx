"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CldImage } from "next-cloudinary";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994346/testimonial1_uom0pp.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994347/testimonial2_bpckwf.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994347/testimonial3_pbdvtj.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994348/testimonial4_bsali9.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759240530/testimonial5_ovbhlo.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994351/testimonial6_gtgexp.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994354/testimonial7_hdgq5y.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994353/testimonial8_byupmv.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994352/testimonial9_swhwtv.png",
];

export default function TestimonialGrid() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(() => {
    // Animate images on scroll
    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
            delay: index * 0.1, // Stagger effect
          }
        );
      }
    });

    // Container entrance animation
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full my-8 lg:my-12 max-w-7xl mt- mx-auto mt- px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {testimonials.map((testimonial, index) => {
          let margin = "";
          switch (index) {
            case 1:
              margin = "lg:mt-10"
              break;
            case 2:
              margin = "sm:-mt-28 md:mt-0"
              break;
            case 3:
              margin = "lg:-mt-42"
              break;
            case 5:
              margin = "lg:-mt-32"
              break;
            case 6:
              margin = "lg:-mt-32"
              break;
            case 8:
              margin = "lg:-mt-32"
              break;
          }
          return (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className={`group cursor-pointer ${margin}`}
            >
              <div className="relative overflow-hidden rounded-[20px] shadow-lg ">
                <CldImage
                  width={400}
                  height={600}
                  src={testimonial}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-auto object-cover"
                  quality="auto"
                  format="auto"
                />

                {/* Hover overlay */}
                {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl lg:rounded-2xl" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
