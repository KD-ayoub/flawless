"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { geistSans, instrumentSerif } from "../layout";
import { CldImage } from "next-cloudinary";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759328427/num1_plyj4m.png",
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
    icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759328430/num2_tth4en.png",
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
    icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759328435/num3_w4a0d5.png",
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
    icon: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759328439/num4_a7aadi.png",
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

export default function HorizontalCards() {
  const wrapperRef = useRef(null);
  const racesRef = useRef(null);

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
          cardWidth = 500;
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
        return -(totalWidth - screenWidth) * 0.6;
      }

      function getStartPosition() {
        const screenWidth = window.innerWidth;

        // if (screenWidth < 640) return "top 5%"; // Mobile
        // if (screenWidth < 768) return "top 10%"; // SM
        // if (screenWidth < 1024) return "top 10%"; // MD
        if (screenWidth > 1536) return "top 20%"; // LG
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
    <>
      <div className="overflow-x-hidden relative hidden xl:block">
        {" "}
        {/* //bg-[#f2f2fd]// */}
        {/* Races Wrapper */}
        <div ref={wrapperRef} className="racesWrapper overflow-hidden">
          <div className="w-8 h-[60%] top-1/2 -translate-y-1/2 -left-3 bg-[#f2f2fd] absolute blur-[10px] rounded-full z-10 pointer-events-none" />
          <div className="w-8 h-[60%] top-1/2 -translate-y-1/2 -right-3 bg-[#e9e8ff] absolute blur-[10px] rounded-full z-10 pointer-events-none" />
          <div
            ref={racesRef}
            className="races flex flex-nowrap h-[80vh] 2xl:h-[60vh] ml-[7%]"
          >
            {cards.map((val, idx) => {
              return (
                <div
                  key={val.title}
                  className="flex-shrink-0 h-full flex items-center justify-center p-4 sm:p-4"
                >
                  <div className="bg-gradient-to-b from-[#d3a7d0af] to-[#7f7ffe58] rounded-[16px] sm:rounded-[25px] p-0.5 w-[350px] md:w-[480px] shadow-lg">
                    <div className="relative bg-[#F9F9FB] rounded-[12px] sm:rounded-[24px] p-4 sm:p-6 overflow-hidden">
                      {/* Background image - now fully visible behind text */}
                      <CldImage
                        className="absolute inset-0 w-full h-full rounded-[12px] sm:rounded-[24px]  "
                        src={
                          "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759423971/bg-carousel_oyzp6u.png"
                        }
                        alt="background pattern"
                        width={1200}
                        height={1200}
                        quality="auto"
                        format="auto"
                        draggable={false}
                      />

                      {/* Header */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 relative z-10">
                        <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center">
                          <CldImage
                            src={val.icon}
                            width={1500}
                            height={1500}
                            alt={`${val.title} icon`}
                            className=""
                            quality="auto"
                            format="auto"
                            draggable={false}
                          />
                        </div>
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
                              <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]">
                                <CldImage
                                  src={
                                    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759329235/markicon_tsgm0j.png"
                                  }
                                  width={1600}
                                  height={1600}
                                  alt="check mark"
                                  className="flex-shrink-0 mt-1 "
                                  quality="auto"
                                  format="auto"
                                  draggable={false}
                                />
                              </div>
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
      <HorizontalCardsMobile />
    </>
  );
}

function HorizontalCardsMobile() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Smooth scroll behavior
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Add smooth scrolling with momentum
    scrollContainer.style.scrollBehavior = "smooth";

    // Optional: Add scroll snap for better UX
    scrollContainer.style.scrollSnapType = "x mandatory";

    // Add scroll indicators (optional)
    const cards = scrollContainer.children;
    Array.from(cards).forEach((card) => {
      card.style.scrollSnapAlign = "center";
    });
  }, []);

  // ScrollTrigger for in-view animation
  useGSAP(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    
    if (!scrollContainer || !container || hasAnimated) return;

    ScrollTrigger.create({
      trigger: container,
      start: "top 80%", // Trigger when component is 80% visible
      onEnter: () => {
        if (hasAnimated) return;
        
        const sneakPeekAnimation = () => {
          // Wait 1 second after entering view
          setTimeout(() => {
            if (!scrollContainer) return;

            // Calculate peek distance (show part of second card)
            const cardWidth = window.innerWidth < 640 ? 300 : window.innerWidth < 768 ? 350 : 400;
            const gap = window.innerWidth < 640 ? 16 : 24; // gap-4 sm:gap-6
            const peekDistance = cardWidth * 0.25; // Show 25% of next card

            // Temporarily disable scroll snap for smooth animation
            scrollContainer.style.scrollSnapType = "none";
            scrollContainer.style.scrollBehavior = "smooth";

            // Scroll to peek at second card
            scrollContainer.scrollTo({
              left: peekDistance,
              behavior: "smooth",
            });

            // Return to original position after 1.5 seconds
            setTimeout(() => {
              scrollContainer.scrollTo({
                left: 0,
                behavior: "smooth",
              });

              // Re-enable scroll snap after animation
              setTimeout(() => {
                if (scrollContainer) {
                  scrollContainer.style.scrollSnapType = "x mandatory";
                  setHasAnimated(true);
                }
              }, 500);
            }, 300);
          }, 900); // 1 second delay after entering view
        };

        sneakPeekAnimation();
      },
      once: true, // Only trigger once
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative py-8 lg:py-12 block xl:hidden">
      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 sm:px-6 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cards.map((val, idx) => (
            <div
              key={val.title}
              className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px]"
            >
              <div className="bg-gradient-to-b from-[#d3a7d0af] to-[#7f7ffe58] rounded-[16px] sm:rounded-[20px] p-0.5 h-full shadow-lg">
                <div className="relative bg-[#F9F9FB] rounded-[15px] sm:rounded-[18px] p-4 sm:p-6 h-full overflow-hidden">
                  {/* Background image */}
                  <CldImage
                    className="absolute inset-0 w-full h-full rounded-[12px] sm:rounded-[18px]"
                    src="https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759423971/bg-carousel_oyzp6u.png"
                    alt="background pattern"
                    width={1200}
                    height={1200}
                    quality="auto"
                    format="auto"
                    draggable={false}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6 relative z-10">
                    <CldImage
                      src={val.icon}
                      width={45}
                      height={45}
                      alt={`${val.title} icon`}
                      className="sm:w-[50px] sm:h-[50px]"
                      quality="auto"
                      format="auto"
                      draggable={false}
                    />
                    <h3
                      className={`${instrumentSerif.className} text-xl sm:text-2xl md:text-3xl font-normal text-black`}
                    >
                      {val.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <div className="mb-4 sm:mb-6 relative z-10">
                    <p
                      className={`${geistSans.className} uppercase font-normal text-xs sm:text-sm text-[#585858]`}
                    >
                      {val.subtitle}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 sm:space-y-3 relative z-10">
                    {val.details.map((txt, detailIdx) => (
                      <div
                        key={txt}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <CldImage
                          src="https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759329235/markicon_tsgm0j.png"
                          width={14}
                          height={14}
                          alt="check mark"
                          className="flex-shrink-0 mt-1 sm:w-[16px] sm:h-[16px]"
                          quality="auto"
                          format="auto"
                          draggable={false}
                        />
                        <p
                          className={`${geistSans.className} text-[#454545] tracking-[-0.01em] text-sm sm:text-base font-normal leading-relaxed`}
                        >
                          {txt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Scroll Indicators with animation hint */}
        <div className="flex justify-center mt-4 gap-2">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300`}
              data-indicator={idx}
            />
          ))}
        </div>

        <div className="flex justify-center mt-2 opacity-60">
          <p className={`${geistSans.className} text-xs text-gray-500`}>
            Swipe to explore more →
          </p>
        </div>
      </div>

      {/* Custom styles to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}