"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fullbg from "@/app/assets/svg/fullbg.svg";
import bgofcarousel from "@/app/assets/svg/bgofcarousel.svg";
import number1 from "@/app/assets/svg/number1.svg";
import number2 from "@/app/assets/svg/number2.svg";
import number3 from "@/app/assets/svg/number3.svg";
import number4 from "@/app/assets/svg/number4.svg";
import markicon from "@/app/assets/svg/markicon.svg";
import { geistSans, instrumentSerif } from "../layout";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalCards() {
  const wrapperRef = useRef(null);
  const racesRef = useRef(null);

  const cards = [
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705872/number1_itbgnn.svg",
      title: "Branding",
      subtitle: "We build identities that stick and scale.",
      details: [
        "Logo design",
        "Visual identity & color system",
        "Brand guidelines & asset kit",
        "Pitch-deck / investor slides",
        "Social media brand assets",
        "Full rebrand & refresh",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705868/number2_oulx1l.svg",
      title: "Product & UX",
      subtitle: "UI people love and understand AT first SIGHT.",
      details: [
        "UX research & discovery",
        "User flows & wireframes",
        "High-fidelity UI design",
        "Design systems in Figma",
        "Dashboard & data-viz UX",
        "dApp / AI product patterns",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705849/number3_hxcn5g.svg",
      title: "Web & Front-End",
      subtitle: "execution that stays fast, clean, and flexible.",
      details: [
        "React / Next.js front-end apps",
        "UI Implementation",
        "Modern Frameworks & Tools",
        "API Integration & State Logic",
        "Performance Optimization",
        "Animations & Interactions",
      ],
    },
    {
      icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705844/number4_jg2fb0.svg",
      title: "Motion",
      subtitle: "Movement with meaning, not just decoration.",
      details: [
        "Logo & brand animations",
        "Promo / explainer videos",
        "Social teaser reels",
        "Product Walkthroughs",
        "Animated Visual Identities",
        "Onboarding Animations",
      ],
    },
  ];

  useGSAP(
    () => {
      const races = racesRef.current;
      const wrapper = wrapperRef.current;

      if (!races || !wrapper) return;

      function getScrollAmount() {
        const screenWidth = window.innerWidth;
        let cardWidth, padding;

        // Define responsive values
        if (screenWidth < 640) {
          // Mobile
          cardWidth = 350; // w-[350px]
          padding = 32; // p-4 = 16px each side = 32px total
        } else if (screenWidth < 768) {
          // Small tablets
          cardWidth = 400;
          padding = 64; // p-8 = 32px each side = 64px total
        } else if (screenWidth < 1024) {
          // Tablets
          cardWidth = 450; // md:w-[450px]
          padding = 64;
        } else if (screenWidth < 1280) {
          // Small desktop
          cardWidth = 500;
          padding = 64;
        } else if (screenWidth < 2280) {
          // Large desktop
          cardWidth = 630;
          padding = 64;
        } else {
          // Larger desktop
          cardWidth = 950;
          padding = 64;
        }

        const totalWidth = (cardWidth + padding) * cards.length;
        return -(totalWidth - screenWidth);
      }

      function getStartPosition() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 640) return "top 5%"; // Mobile
        if (screenWidth < 768) return "top 10%"; // SM
        if (screenWidth < 1024) return "top 10%"; // MD
        if (screenWidth < 1280) return "top 15%"; // LG
        return "top 10%"; // XL+
      }

      const tween = gsap.to(races, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: wrapper,
        start: getStartPosition(),
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true // Enable for debugging
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div className="overflow-x-hidden">
      {/* Races Wrapper */}
      <div ref={wrapperRef} className="racesWrapper overflow-hidden">
        <div
          ref={racesRef}
          className="races flex flex-nowrap h-[90vh] lg:h-[85vh] ml-[7%]"
        >
          {cards.map((val, idx) => {
            return (
              <div
                key={val.title}
                className="flex-shrink-0 h-full flex items-center justify-center p-4 sm:p-4"
              >
                <div className="bg-gradient-to-b from-[#d3a7d0af] to-[#7f7ffe58] rounded-[16px] sm:rounded-[25px] p-0.5 w-[350px] md:w-[500px] shadow-lg">
                  <div className="relative bg-[#F9F9FB] rounded-[12px] sm:rounded-[24px] p-4 sm:p-6 overflow-hidden">
                    {/* Background image - now fully visible behind text */}
                    <Image
                      className="absolute inset-0 w-full h-full rounded-[12px] sm:rounded-[24px] object-cover "
                      src={"https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755704936/bgofcarousel_o6y2t8.svg"}
                      alt="background pattern"
                      fill
                    />

                    {/* Header */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 relative z-10">
                      <Image
                        src={val.icon}
                        width={50}
                        height={50}
                        alt={`${val.title} icon`}
                        className="sm:w-[60px] sm:h-[60px]"
                      />
                      <h3
                        className={`${instrumentSerif.className} text-2xl sm:text-3xl lg:text-[54px] font-normal text-black`}
                      >
                        {val.title}
                      </h3>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-4 sm:mb-8 relative z-10">
                      <p
                        className={`${geistSans.className} uppercase font-normal text-sm md:text-[17px] text-[#585858]`}
                      >
                        {val.subtitle}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 sm:space-y-4 relative z-10">
                      {val.details.map((txt, detailIdx) => {
                        return (
                          <div
                            key={txt}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <Image
                              src={"https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705830/markicon_g7w5fi.svg"}
                              width={16}
                              height={16}
                              alt="check mark"
                              className="flex-shrink-0 mt-1 sm:w-[20px] sm:h-[20px]"
                            />
                            <p
                              className={`${geistSans.className} text-[#454545] tracking-[-0.01em] text-sm sm:text-base lg:text-lg font-normal leading-relaxed`}
                            >
                              {txt}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
