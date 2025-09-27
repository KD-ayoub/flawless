"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import greatcardbg from "@/app/assets/svg/greatcardbg.svg";
import icon1 from "@/app/assets/svg/icon1.svg";
import icon2 from "@/app/assets/svg/icon2.svg";
import icon3 from "@/app/assets/svg/icon3.svg";
import icon4 from "@/app/assets/svg/icon4.svg";
import icon5 from "@/app/assets/svg/icon5.svg";
import icon6 from "@/app/assets/svg/icon6.svg";
import { geistSans, instrumentSerif } from "../layout";
import { CldImage } from "next-cloudinary";

gsap.registerPlugin(ScrollTrigger);

export default function GreatSectionCard() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const cards = [
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705218/icon1_xdgdox.svg",
      title: "ROI-Driven",
      span: "Design",
      description:
        "We aim to drive conversions and revenue, not just look pretty. Every pixel is optimized to turn visitors into customers.",
    },
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705247/icon2_nbupqh.svg",
      title: "Integrated",
      span: "Team",
      description:
        "We're not just another freelancer, and we act as an extension of your team—fully invested in your goals as if they were our own.",
    },
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705198/icon3_ot3nzk.svg",
      title: "Tech-Savvy",
      span: "Expertise",
      description:
        "Years of working with Web3, AI, and other tech companies means we speak your language, and solve your toughest product challenges.",
    },
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705333/icon4_b3wf74.svg",
      title: "Rapid",
      span: "Delivery",
      description:
        "Fast turn-arounds without cutting corners, so you can iterate quickly and stay ahead in today's breakneck markets.",
    },
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705328/icon5_cr5fr0.svg",
      title: "Beautiful & Intuitive",
      span: "Design",
      description:
        "Clean, on-brand interfaces backed by user-centered flows that guide and delight your audience at every step.",
    },
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705332/icon6_qcvml8.svg",
      title: "Daily",
      span: "Collaboration",
      description:
        "No more waiting days for feedback, we sync up every business day to keep projects moving at top speed.",
    },
  ];

  useGSAP(
    () => {
      // Set initial state for all cards
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotation: 5,
      });

      // Animate cards into view with stagger
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          amount: 0.6,
          from: "start",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Individual card hover animations (override CSS transitions)
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const icon = card.querySelector(".card-icon");
          const content = card.querySelector(".card-content");
          const blurCircle = card.querySelector(".blur-circle");

          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });

            if (icon) {
              gsap.to(icon, {
                rotation: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
              });
            }

            if (content) {
              gsap.to(content, {
                y: -4,
                duration: 0.3,
                ease: "power2.out",
              });
            }

            if (blurCircle) {
              gsap.to(blurCircle, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });

            if (icon) {
              gsap.to(icon, {
                rotation: index % 2 === 0 ? 12 : -12,
                duration: 0.5,
                ease: "power2.out",
              });
            }

            if (content) {
              gsap.to(content, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }

            if (blurCircle) {
              gsap.to(blurCircle, {
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="py-8 sm:py-12 lg:py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {cards.map((value, idx) => {
          return (
            <div
              key={idx}
              className="w-full max-w-none mx-auto md:max-w-none relative rounded-[20px] overflow-hidden "
            >
              {/* Blur background - SEPARATE, always visible */}

              <div className="absolute inset-0 bg-[#FAFAFB]/20 rounded-[20px] backdrop-blur-md border-2 border-[#E6E3FB] z-0 hover:border-[#E6E3FB] hover:shadow-2xl hover:shadow-[#7F7FFE]/20 transition-all duration-300" />

              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#7F7FFE] -top-12 sm:-top-16 lg:-top-20 right-0 rounded-full blur-3xl z-0" />

              {/* Animated content - ONLY this gets animated */}
              <div
                ref={(el) => (cardsRef.current[idx] = el)}
                className="relative z-10 rounded-[20px] overflow-hidden group"
              >
                <div className="relative max-[376px]:h-[240px] h-[225px] md:h-[250px] lg:h-[230px]">
                  <Image
                    className="rounded-[19px] w-[90%] xl:w-full h-auto opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    src={
                      "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705178/greatcardbg_ze4zwy.svg"
                    }
                    alt="greatcardbg"
                    width={100}
                    height={100}
                    // fill
                  />

                  {/* Text overlay */}
                  <div className="absolute inset-0 flex flex-col gap-2 p-4 sm:p-5 lg:p-6 rounded-2xl">
                    <div>
                      <Image
                        className={`card-icon shadow-lg rounded-xl ${
                          idx % 2 === 0 ? "rotate-12" : "-rotate-12"
                        }`}
                        src={value.icon}
                        width={60}
                        height={60}
                        alt={`${value.title} icon`}
                      />
                    </div>
                    <div className="card-content">
                      <h3
                        className={`${geistSans.className} mt-2 text-black tracking-[-0.04em] text-3xl font-medium mb-2`}
                      >
                        {value.title}{" "}
                        <span className={`${instrumentSerif.className} italic`}>
                          {value.span}
                        </span>
                      </h3>
                      <p
                        className={`${geistSans.className} leading-[120%] tracking-[-0.04em] text-black text-base font-normal group-hover:text-gray-700 transition-colors duration-300`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
