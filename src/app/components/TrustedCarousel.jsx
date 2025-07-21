"use client";
import Image from "next/image";
import React, { useRef, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo1 from "@/app/assets/svg/logo1.svg";
import logo2 from "@/app/assets/svg/logo2.svg";
import logo3 from "@/app/assets/svg/logo3.svg";
import logo4 from "@/app/assets/svg/logo4.svg";
import logo5 from "@/app/assets/svg/logo5.svg";
import logo6 from "@/app/assets/svg/logo6.svg";
import logo7 from "@/app/assets/svg/logo7.svg";
import logo8 from "@/app/assets/svg/logo8.svg";
import logo9 from "@/app/assets/svg/logo9.svg";
import logo10 from "@/app/assets/svg/logo10.svg";
import logo11 from "@/app/assets/svg/logo11.svg";
import logo12 from "@/app/assets/svg/logo12.svg";
import { geistSans } from "../layout";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./embla.css";

gsap.registerPlugin(ScrollTrigger);

export default function TrustedCarousel() {
  const allLogos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
  ];
  const firstRowLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const secondRowLogos = [logo7, logo8, logo9, logo10, logo11, logo12];

  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      // Animate title on scroll
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className=" overflow-hidden">
      <div className="flex justify-center items-center">
        <p
          ref={titleRef}
          className={`${geistSans.className} font-normal mb-8 text-sm md:text-base text-[#818181] opacity-0`}
        >
          Trusted by industry leaders
        </p>
      </div>

      {/* Desktop Layout: Two rows with opposite directions */}
      <div className="hidden sm:block space-y-6">
        <EmblaCarousel logos={firstRowLogos} direction="rtl" />
        <EmblaCarousel logos={secondRowLogos} direction="ltr" />
      </div>

      {/* Mobile Layout: Single vertical carousel */}
      <div className="block sm:hidden">
        <EmblaCarousel logos={allLogos} direction="vertical" />
      </div>
    </div>
  );
}

const EmblaCarousel = ({ logos, direction }) => {
  const options = {
    loop: true,
    align: "start",
    skipSnaps: true,
    axis: direction === "vertical" ? "y" : "x",
  };

  const autoScrollOptions = {
    playOnInit: true,
    delay: 0,
    speed: direction === "vertical" ? 0.5 : direction === "ltr" ? -1 : 1,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnFocusIn: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll(autoScrollOptions),
  ]);

  useEffect(() => {
    if (emblaApi) {
      const autoScroll = emblaApi.plugins()?.autoScroll;
      if (autoScroll) {
        autoScroll.play();
      }
    }
  }, [emblaApi]);

  return (
    <div
      className={`embla ${direction === "vertical" ? "embla--vertical" : ""}`}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* Duplicate logos for seamless infinite scroll */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div className="embla__slide" key={index}>
              <div
                className={`
                flex items-center justify-center
                ${
                  direction === "vertical"
                    ? "w-20 h-12"
                    : "w-24 h-12 md:w-28 md:h-14"
                }
              `}
              >
                <Image
                  src={logo}
                  alt={`Logo ${(index % logos.length) + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  width={direction === "vertical" ? 80 : 112}
                  height={direction === "vertical" ? 48 : 56}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
