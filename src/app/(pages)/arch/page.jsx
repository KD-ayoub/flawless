"use client";

import { geistSans } from "@/app/layout";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { CldImage } from "next-cloudinary";
import ArchVideoSection from "@/app/components/ArchVideoSection";
import Footer from "@/app/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  const heroRef = useRef(null);
  const challengeRef = useRef(null);
  const approachRef = useRef(null);
  const resultsRef = useRef(null);
  const imageRefs = useRef([]);
  const checklistRef = useRef(null);
  const lenisRef = useRef(null);

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   lenisRef.current = lenis;
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  //   lenis.on('scroll', ScrollTrigger.update);
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  useGSAP(() => {
    // Hero section animation
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Challenge section animation
    gsap.fromTo(
      challengeRef.current,
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
          trigger: challengeRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Approach section animation
    gsap.fromTo(
      approachRef.current,
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
          trigger: approachRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Checklist items staggered animation
    if (checklistRef.current) {
      const checkItems = checklistRef.current.children;
      gsap.fromTo(
        checkItems,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: checklistRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Results section animation
    gsap.fromTo(
      resultsRef.current,
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
          trigger: resultsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Images staggered animation
    imageRefs.current.forEach((image, index) => {
      if (image) {
        gsap.fromTo(
          image,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  });

  return (
    <>
      <div className="text-white mt-10 lg:mt-16 mx-3 md:mx-10 xl:mx-20">
        {/* Hero Section */}
        <div ref={heroRef}>
          <p
            className={`${geistSans.className} font-semibold text-white leading-[100%] tracking-[-0.04em] text-[30px] sm:text-[40px] md:text-[55px] lg:text-[63px]`}
          >
            Designing the Future of Bitcoin: How Arch Raised{" "}
            <span className="text-[#FF9900]">$20M+</span> and Grew to{" "}
            <span className="text-[#FF9900]">500K+ </span>
            Followers with Design People Believe In
          </p>
          <p
            className={`${geistSans.className} mt-8 font-normal text-[#A7A7A7] leading-[120%] tracking-[-0.04em] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            Arch Network is building the permissionless financial rails for a
            Bitcoin-denominated world. By enabling bridge-free programmability
            directly on Bitcoin, they're solving the "Bitcoin Builder's Dilemma"
            and unlocking new opportunities for developers and users.
          </p>
        </div>

        {/* First Image */}
        <div className="my-10">
          <CldImage
            ref={(el) => (imageRefs.current[0] = el)}
            className="w-full h-1/3 rounded-[16px] md:rounded-[20px]"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759241664/case1_fc0ahk.png"
            }
            width={1000}
            height={600}
            alt="case p1"
            quality="auto"
            format="auto"
            draggable={false}
          />
        </div>

        {/* Challenge Section */}
        <div ref={challengeRef}>
          <h1
            className={`${geistSans.className} font-normal text-white tracking-[-0.04em] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
          >
            The Challenge
          </h1>
          <p
            className={`${geistSans.className} font-normal leading-[120%] tracking-[-0.04em] text-[#A7A7A7] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            When the Arch team reached out, they already had a strong
            infrastructure and a big vision for the future of Bitcoin. What they
            needed was a design presence that could match that ambition.
            Together, we set out to build a brand and user experience that not
            only looked the part but also gave developers, partners, and
            investors the confidence to get involved.
          </p>
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <CldImage
            ref={(el) => (imageRefs.current[1] = el)}
            className="w-full h-full rounded-[16px] md:rounded-[20px]"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759242091/case2_xbcxpf.png"
            }
            width={1000}
            height={200}
            alt="case p2"
            quality="auto"
            format="auto"
            draggable={false}
          />
          <CldImage
            ref={(el) => (imageRefs.current[2] = el)}
            className="w-full h-full rounded-[16px] md:rounded-[20px]"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759242230/case3_pqicn7.png"
            }
            width={1000}
            height={200}
            alt="case p3"
            quality="auto"
            format="auto"
            draggable={false}
          />
        </div>

        {/* Full Width Image */}
        <div className="">
          <CldImage
            ref={(el) => (imageRefs.current[3] = el)}
            className="w-full h-1/3 rounded-[16px] md:rounded-[20px]"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759242450/case4_suke5i.png"
            }
            width={1200}
            height={200}
            alt="case p4"
            quality="auto"
            format="auto"
            draggable={false}
          />
        </div>

        {/* Approach Section */}
        <div className="my-10" ref={approachRef}>
          <h1
            className={`${geistSans.className} font-normal text-white tracking-[-0.04em] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
          >
            Our Approach
          </h1>
          <p
            className={`${geistSans.className} font-normal leading-[120%] tracking-[-0.04em] text-[#A7A7A7] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            We embedded ourselves into Arch's team, making design accessible
            24/7. Starting with a branding exploration process, we defined a
            design language that reflected their technical depth and bold
            vision. From there, we delivered across every touchpoint:
          </p>
        </div>

        {/* Checklist Section */}
        <div ref={checklistRef}>
          <div className="flex flex-col min-[1384px]:flex-row min-[1384px]:items-center min-[1384px]:gap-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#FF9900"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <p
                className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
              >
                Branding
              </p>
            </div>
            <span
              className={`${geistSans.className} ml-6 min-[1384px]:ml-0 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Established Arch's visual identity and brand system
            </span>
          </div>
          <div className="flex flex-col min-[1384px]:flex-row min-[1384px]:items-center min-[1384px]:gap-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#FF9900"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <p
                className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
              >
                Web Design
              </p>
            </div>
            <span
              className={`${geistSans.className} ml-6 min-[1384px]:ml-0 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Created their first website, then revamped it to reflect growth
              and ecosystem expansion
            </span>
          </div>
          <div className="flex flex-col min-[1384px]:flex-row min-[1384px]:items-center min-[1384px]:gap-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#FF9900"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <p
                className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
              >
                Product Design
              </p>
            </div>
            <span
              className={`${geistSans.className} ml-6 min-[1384px]:ml-0 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Designed a dashboard to onboard and engage users
            </span>
          </div>
          <div className="flex flex-col min-[1384px]:flex-row min-[1384px]:items-center min-[1384px]:gap-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#FF9900"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <p
                className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
              >
                Motion Design
              </p>
            </div>
            <span
              className={`${geistSans.className} ml-6 min-[1384px]:ml-0 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Animations and visuals to explain complex concepts simply
            </span>
          </div>
          <div className="flex flex-col min-[1384px]:flex-row min-[1384px]:items-center min-[1384px]:gap-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#FF9900"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <p
                className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
              >
                Marketing Graphics
              </p>
            </div>
            <span
              className={`${geistSans.className} ml-6 min-[1384px]:ml-0 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Scalable assets for campaigns, social media, and community growth
            </span>
          </div>
        </div>

        {/* More Images */}
        <div className="my-10">
          <CldImage
            ref={(el) => (imageRefs.current[4] = el)}
            className="w-full h-1/3 rounded-[16px] md:rounded-[20px]"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759242651/case5_taimn8.png"
            }
            width={1200}
            height={200}
            alt="case p5"
            quality="auto"
            format="auto"
            draggable={false}
          />
        </div>
        <div className="my-10">
          <CldImage
            ref={(el) => (imageRefs.current[5] = el)}
            className="w-full h-1/3 rounded-[16px] md:rounded-[20px]"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759242795/case6_av26v4.png"
            }
            width={1200}
            height={200}
            alt="case p6"
            quality="auto"
            format="auto"
            draggable={false}
          />
        </div>

        <ArchVideoSection />

        {/* Results Section */}
        <div className="my-10" ref={resultsRef}>
          <h1
            className={`${geistSans.className} font-normal text-white tracking-[-0.04em] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
          >
            The Results
          </h1>
          <p
            className={`${geistSans.className} font-normal leading-[120%] tracking-[-0.04em] text-[#A7A7A7] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            Arch has quickly become one of the most recognized names in the
            Bitcoin ecosystem, combining groundbreaking infrastructure with a
            brand and design presence that reflects their ambition.
          </p>
        </div>
        <div>
          <div className="grid  md:grid-cols-2 gap-10">
            <div className="bg-[#141415] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <p
                  className={`${geistSans.className} text-[85px] lg:text-[102px] leading-[110%] tracking-[-0.04em] font-medium`}
                  style={{
                    background:
                      "linear-gradient(90deg, #FFA500, #FFCC70, #FF7E00 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $20M+
                </p>
              </div>
              <div>
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#A7A7A7]`}
                >
                  Raised during their growth phase, supported by strong brand
                  and design presence
                </p>
              </div>
            </div>
            <div className="bg-[#141415] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <p
                  className={`${geistSans.className} text-[85px] lg:text-[102px] leading-[110%] tracking-[-0.04em] font-medium`}
                  style={{
                    background:
                      "linear-gradient(90deg, #FFA500, #FFCC70, #FF7E00 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  500K+
                </p>
              </div>
              <div>
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#A7A7A7]`}
                >
                  Raised during their growth phase, supported by strong brand
                  and design presence
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10 my-10">
            <div className="bg-[#141415] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <MarkIcon />
              </div>
              <div className="mt-3">
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#A7A7A7]`}
                >
                  Grew from 0 users to a live ecosystem with active adoption.
                </p>
              </div>
            </div>
            <div className="bg-[#141415] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <MarkIcon />
              </div>
              <div className="mt-3">
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#A7A7A7]`}
                >
                  Helped launch and grow ecosystem projects like Chaching and
                  Saturn.
                </p>
              </div>
            </div>
            <div className="bg-[#141415] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <MarkIcon />
              </div>
              <div className="mt-3">
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#A7A7A7]`}
                >
                  Created a brand presence that attracted both top-tier
                  developers and investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function MarkIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6367 33.5927C25.8121 33.5927 33.25 26.1548 33.25 16.9795C33.25 7.80413 25.8121 0.366211 16.6367 0.366211C7.46139 0.366211 0.0234375 7.80413 0.0234375 16.9795C0.0234375 26.1548 7.46139 33.5927 16.6367 33.5927ZM12.9449 19.9067L22.715 10.1366C23.436 9.41561 24.6048 9.41561 25.3258 10.1366C26.0465 10.8573 26.0465 12.0261 25.3258 12.7471L14.2503 23.8227C13.5293 24.5433 12.3605 24.5433 11.6394 23.8227L7.94761 20.1308C7.22696 19.4098 7.22696 18.241 7.94761 17.5203C8.66862 16.7993 9.83745 16.7993 10.5585 17.5203L12.9449 19.9067Z"
        fill="white"
      />
      <path
        d="M16.6367 33.5927C25.8121 33.5927 33.25 26.1548 33.25 16.9795C33.25 7.80413 25.8121 0.366211 16.6367 0.366211C7.46139 0.366211 0.0234375 7.80413 0.0234375 16.9795C0.0234375 26.1548 7.46139 33.5927 16.6367 33.5927ZM12.9449 19.9067L22.715 10.1366C23.436 9.41561 24.6048 9.41561 25.3258 10.1366C26.0465 10.8573 26.0465 12.0261 25.3258 12.7471L14.2503 23.8227C13.5293 24.5433 12.3605 24.5433 11.6394 23.8227L7.94761 20.1308C7.22696 19.4098 7.22696 18.241 7.94761 17.5203C8.66862 16.7993 9.83745 16.7993 10.5585 17.5203L12.9449 19.9067Z"
        fill="url(#paint0_linear_1281_513)"
      />
      <path
        d="M16.6367 33.5927C25.8121 33.5927 33.25 26.1548 33.25 16.9795C33.25 7.80413 25.8121 0.366211 16.6367 0.366211C7.46139 0.366211 0.0234375 7.80413 0.0234375 16.9795C0.0234375 26.1548 7.46139 33.5927 16.6367 33.5927ZM12.9449 19.9067L22.715 10.1366C23.436 9.41561 24.6048 9.41561 25.3258 10.1366C26.0465 10.8573 26.0465 12.0261 25.3258 12.7471L14.2503 23.8227C13.5293 24.5433 12.3605 24.5433 11.6394 23.8227L7.94761 20.1308C7.22696 19.4098 7.22696 18.241 7.94761 17.5203C8.66862 16.7993 9.83745 16.7993 10.5585 17.5203L12.9449 19.9067Z"
        fill="url(#paint1_linear_1281_513)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1281_513"
          x1="0.0234375"
          y1="16.9795"
          x2="33.25"
          y2="16.9795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9900" />
          <stop offset="1" stopColor="#FF9B03" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1281_513"
          x1="-6.1289"
          y1="-6.87516"
          x2="42.8825"
          y2="-5.23017"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA500" />
          <stop offset="0.5" stopColor="#FFCC70" />
          <stop offset="1" stopColor="#FF7E00" />
        </linearGradient>
      </defs>
    </svg>
  );
}
