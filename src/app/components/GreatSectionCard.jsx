"use client";

import Image from "next/image";
import React, { useRef } from "react";
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

gsap.registerPlugin(ScrollTrigger);

export default function GreatSectionCard() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const cards = [
    {
      icon: icon1,
      title: "ROI-Driven",
      span: "Design",
      description:
        "We aim to drive conversions and revenue, not just look pretty. Every pixel is optimized to turn visitors into customers.",
    },
    {
      icon: icon2,
      title: "Integrated",
      span: "Team",
      description:
        "We're not just another freelancer, and we act as an extension of your team—fully invested in your goals as if they were our own.",
    },
    {
      icon: icon3,
      title: "Tech-Savvy",
      span: "Expertise",
      description:
        "Years of working with Web3, AI, and other tech companies means we speak your language, and solve your toughest product challenges.",
    },
    {
      icon: icon4,
      title: "Rapid",
      span: "Delivery",
      description:
        "Fast turn-arounds without cutting corners, so you can iterate quickly and stay ahead in today's breakneck markets.",
    },
    {
      icon: icon5,
      title: "Beautiful & Intuitive",
      span: "Design",
      description:
        "Clean, on-brand interfaces backed by user-centered flows that guide and delight your audience at every step.",
    },
    {
      icon: icon6,
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
              className="w-full max-w-none mx-auto md:max-w-none relative rounded-[20px] overflow-hidden"
            >
              {/* Blur background - SEPARATE, always visible */}
              <div className="absolute inset-0 bg-[#FAFAFB]/20 rounded-[20px] backdrop-blur-md border-2 border-[#acacff] z-0 hover:border-[#7F7FFE] hover:shadow-2xl hover:shadow-[#7F7FFE]/20 transition-all duration-300" />
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#7F7FFE] -top-12 sm:-top-16 lg:-top-20 right-0 rounded-full blur-3xl z-0" />

              {/* Animated content - ONLY this gets animated */}
              <div
                ref={(el) => (cardsRef.current[idx] = el)}
                className="relative z-10 rounded-[20px] overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    className="rounded-[19px] xl:w-full h-auto opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    src={greatcardbg}
                    alt="greatcardbg"
                  />

                  {/* Text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 lg:p-6 rounded-2xl">
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
                        className={`${geistSans.className} mt-2 text-black tracking-[-0.04em] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-2`}
                      >
                        {value.title}{" "}
                        <span className={`${instrumentSerif.className} italic`}>
                          {value.span}
                        </span>
                      </h3>
                      <p
                        className={`${geistSans.className} leading-[120%] tracking-[-0.04em] text-black text-sm sm:text-base lg:text-base font-normal group-hover:text-gray-700 transition-colors duration-300`}
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
