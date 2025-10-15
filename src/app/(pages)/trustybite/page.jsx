"use client";

import { geistSans } from "@/app/layout";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck, FaCopy } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { CldImage } from "next-cloudinary";
import { FirstSnippet, SecondSnippet, ThirdSnippet } from "@/app/components/SnippetComponent";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  const lenisRef = useRef(null);
  const heroRef = useRef(null);
  const imageRefs = useRef([]);
  const checklistRef = useRef(null);
  const checklistRef1 = useRef(null);
  const checklistRef2 = useRef(null);
  const checklistRef3 = useRef(null);

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   lenisRef.current = lenis;
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  //   lenis.on("scroll", ScrollTrigger.update);
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
        duration: 0.5,
        ease: "power2.out",
      }
    );

    // Create a function to handle checklist animations
    const animateChecklist = (ref) => {
      if (ref.current) {
        const checkItems = ref.current.children;
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
              trigger: ref.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };
    // Apply animations to all checklist sections
    animateChecklist(checklistRef); // Tech Stack

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
            duration: 0.4,
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
            Blockchain-powered Hygiene Ratings for Safer Dining: How our team
            put TrustyBite among winners in a{" "}
            <span className="text-[#01B7E6]"> $1M</span> prize pool
          </p>
          <p
            className={`${geistSans.className} mt-8 font-normal text-white leading-[120%] tracking-[-0.04em] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            TrustyBite is a food safety platform that uses real-time IoT sensors
            and NEAR blockchain to ensure restaurants meet hygiene standards. It
            helps diners identify clean, safe places to eat, backed by immutable
            on-chain data.
          </p>
        </div>
        {/* First Image */}
        <div id="hero-image" className="my-10">
          <CldImage
            ref={(el) => (imageRefs.current[0] = el)}
            className="w-full h-1/3 rounded-[16px] md:rounded-[20px]"
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1760007777/trusty1_wlmlws.png"
            }
            width={1000}
            height={600}
            alt="trusty p1"
            quality="auto"
            format="auto"
            draggable={false}
          />
        </div>
        {/* Challenge Section */}
        <div>
          <h1
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px]`}
          >
            Tech Stack
          </h1>
          <div ref={checklistRef} className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Framework: React (Next.js)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Styling: Tailwind CSS, custom variables
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Animation: Framer Motion
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Backend: Node js
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Blockchain: NEAR Protocol (wallet + smart contract integration)
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
          >
            Key Frontend Features
          </h1>
          <h2
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px]`}
          >
            1- Restaurant Discovery UI
          </h2>
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            Users can browse restaurants via card view or explore on a dynamic
            map. Each card showcases real-time ratings and freshness indicators.
          </p>
          <div className="mt-4">
            <CldImage
              className="w-full h-1/2 rounded-[16px] md:rounded-[20px]"
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1760032435/trusty2_focefm.png"
              }
              width={1000}
              height={600}
              alt="trusty p2"
              quality="auto"
              format="auto"
              draggable={false}
            />
          </div>
          <div className="mt-4">
            <FirstSnippet/>
          </div>
        </div>
        <div>
          <h2
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px]`}
          >
            2- Geolocation-Based Search
          </h2>
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            Explore nearby blockchain-verified restaurants on an interactive map
            with filters for rating, date, time, and party size.
          </p>
          <div className="mt-4">
            <CldImage
              className="w-full h-1/2 rounded-[16px] md:rounded-[20px]"
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1760033169/trusty3_avz9zf.png"
              }
              width={1000}
              height={600}
              alt="trusty p3"
              quality="auto"
              format="auto"
              draggable={false}
            />
          </div>
          <div className="mt-4">
            <SecondSnippet/>
          </div>
        </div>
        <div className="my-10">
          <h2
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px]`}
          >
            3- Verified Reviews Section
          </h2>
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            Every review is tied to a wallet and stored immutably on-chain.
            TrustyBite makes it impossible to fake feedback or manipulate
            ratings.
          </p>
          <div className="mt-4">
            <CldImage
              className="w-full h-1/2 rounded-[16px] md:rounded-[20px]"
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1760033411/trusty4_dl4ttx.png"
              }
              width={1000}
              height={600}
              alt="trusty p3"
              quality="auto"
              format="auto"
              draggable={false}
            />
          </div>
          <div className="mt-4">
            <ThirdSnippet/>
          </div>
        </div>
        <div>
          <h2
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px]`}
          >
            4- Restaurant Details + Ratings Dashboard
          </h2>
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            Visitors can explore each restaurant's hygiene score, freshness
            rating, and blockchain-backed review count — all within a responsive
            UI that invites trust.
          </p>
          <div className="mt-4">
            <CldImage
              className="w-full h-1/2 rounded-[16px] md:rounded-[20px]"
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1760033629/trusty5_bc5my0.png"
              }
              width={1000}
              height={600}
              alt="trusty p3"
              quality="auto"
              format="auto"
              draggable={false}
            />
          </div>
        </div>
        <div className="my-10">
          <h1
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
          >
            Design System
          </h1>
          <div ref={checklistRef1} className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                <span className="text-[#000000]/50 leading-[120%] font-semibold tracking-[-0.04em]">
                  Primary Color:
                </span>{" "}
                <span className="text-[#EB5757] leading-[120%] tracking-[-0.04em]">
                  --primary-color
                </span>{" "}
                in cyan-blue used for buttons, tags, and status indicators
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                <span className="text-[#000000]/50 leading-[120%] font-semibold tracking-[-0.04em]">
                  Layout:{" "}
                </span>{" "}
                Grid-based system optimized for restaurant browsing, map
                exploration, and mobile UX
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                <span className="text-[#000000]/50 leading-[120%] font-semibold tracking-[-0.04em]">
                  Visual Style:{" "}
                </span>{" "}
                Clean, accessible design with NEAR blockchain trust indicators
                and real food photography
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                <span className="text-[#000000]/50 leading-[120%] font-semibold tracking-[-0.04em]">
                  Component Library:
                </span>{" "}
                Built with reusable components for listings, modals, reviews,
                and booking forms
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
          >
            Challenges
          </h1>
          <div ref={checklistRef2} className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Designing around real-time freshness/cleanliness data without
                cluttering the UI
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Mapping IoT data and blockchain status into readable,
                non-technical UI elements
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Preventing UI lag when fetching verified reviews from NEAR smart
                contracts
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Balancing transparency with privacy in blockchain-based user
                reviews
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
          >
            Use Case Highlights
          </h1>
          <div ref={checklistRef3} className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Health Compliance: Proof of hygiene compliance stored on-chain
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Consumer Trust: Real-time, tamper-proof cleanliness ratings
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Incentivization: Rewards for restaurants that maintain top
                hygiene scores
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck
                color="#0E0E0F"
                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
              <p
                className={`${geistSans.className} font-normal text-[16px] md:text-[30px] text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em]`}
              >
                Review Transparency: No fake reviews — all user feedback is
                wallet-verified
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1
            className={`${geistSans.className} font-semibold text-black tracking-[-0.04em] text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
          >
            The Results
          </h1>
          <p
            className={`${geistSans.className} font-normal text-[#0E0E0F]/50 leading-[120%] tracking-[-0.04em] text-[18px] md:text-[22px] lg:text-[32px]`}
          >
            TrustyBite quickly stood out in the food safety space, pairing
            real-time IoT verification and NEAR-backed transparency with a
            clean, credible product experience — the kind of brand and interface
            that signals reliability at a glance.
          </p>
        </div>
        <div className="my-10">
          <div className="grid  md:grid-cols-2 gap-10">
            <div className="bg-[#F0F0F0] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <p
                  className={`${geistSans.className} text-[85px] lg:text-[102px] leading-[110%] tracking-[-0.04em] font-medium`}
                  style={{
                    background:
                      "linear-gradient(90deg, #2928C0, #1570D3, #01B7E6 40%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Top 3
                </p>
              </div>
              <div className="mt-8">
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#353535]`}
                >
                  Winning 3rd place in a 1M$ prize pool hackathon where only the
                  best compete.
                </p>
              </div>
            </div>
            <div className="bg-[#F0F0F0] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <p
                  className={`${geistSans.className} text-[85px] lg:text-[102px] leading-[110%] tracking-[-0.04em] font-medium`}
                  style={{
                    background:
                      "linear-gradient(90deg, #2928C0, #1570D3, #01B7E6 40%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {">1500+"}
                </p>
              </div>
              <div className="mt-8">
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#353535]`}
                >
                  Beating more than 1500 teams from all around the world.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 my-10">
            <div className="bg-[#F0F0F0] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <MarkIcon />
              </div>
              <div className="mt-3">
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#353535]`}
                >
                  Getting a ready to launch product in less than 1 month.
                </p>
              </div>
            </div>
            <div className="bg-[#F0F0F0] rounded-[16px] md:rounded-[20px] p-6">
              <div>
                <MarkIcon />
              </div>
              <div className="mt-3">
                <p
                  className={`${geistSans.className} font-light leading-[120%] text-[25px] tracking-[-0.04em] text-[#353535]`}
                >
                  Created a robust Product design and front-end code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MarkIcon() {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1406 34.0791C26.316 34.0791 33.7539 26.6411 33.7539 17.4658C33.7539 8.29046 26.316 0.852539 17.1406 0.852539C7.9653 0.852539 0.527344 8.29046 0.527344 17.4658C0.527344 26.6411 7.9653 34.0791 17.1406 34.0791ZM13.4488 20.393L23.2189 10.623C23.9399 9.90194 25.1087 9.90194 25.8297 10.623C26.5504 11.3436 26.5504 12.5124 25.8297 13.2335L14.7542 24.309C14.0332 25.0296 12.8644 25.0296 12.1434 24.309L8.45151 20.6171C7.73087 19.8961 7.73087 18.7273 8.45151 18.0066C9.17253 17.2856 10.3414 17.2856 11.0624 18.0066L13.4488 20.393Z"
        fill="#2928C0"
      />
      <path
        d="M17.1406 34.0791C26.316 34.0791 33.7539 26.6411 33.7539 17.4658C33.7539 8.29046 26.316 0.852539 17.1406 0.852539C7.9653 0.852539 0.527344 8.29046 0.527344 17.4658C0.527344 26.6411 7.9653 34.0791 17.1406 34.0791ZM13.4488 20.393L23.2189 10.623C23.9399 9.90194 25.1087 9.90194 25.8297 10.623C26.5504 11.3436 26.5504 12.5124 25.8297 13.2335L14.7542 24.309C14.0332 25.0296 12.8644 25.0296 12.1434 24.309L8.45151 20.6171C7.73087 19.8961 7.73087 18.7273 8.45151 18.0066C9.17253 17.2856 10.3414 17.2856 11.0624 18.0066L13.4488 20.393Z"
        fill="url(#paint0_linear_1695_855)"
      />
      <path
        d="M17.1406 34.0791C26.316 34.0791 33.7539 26.6411 33.7539 17.4658C33.7539 8.29046 26.316 0.852539 17.1406 0.852539C7.9653 0.852539 0.527344 8.29046 0.527344 17.4658C0.527344 26.6411 7.9653 34.0791 17.1406 34.0791ZM13.4488 20.393L23.2189 10.623C23.9399 9.90194 25.1087 9.90194 25.8297 10.623C26.5504 11.3436 26.5504 12.5124 25.8297 13.2335L14.7542 24.309C14.0332 25.0296 12.8644 25.0296 12.1434 24.309L8.45151 20.6171C7.73087 19.8961 7.73087 18.7273 8.45151 18.0066C9.17253 17.2856 10.3414 17.2856 11.0624 18.0066L13.4488 20.393Z"
        fill="url(#paint1_linear_1695_855)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1695_855"
          x1="0.527344"
          y1="17.4658"
          x2="33.7539"
          y2="17.4658"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2928C0" />
          <stop offset="0.504808" stopColor="#1570D3" />
          <stop offset="1" stopColor="#01B7E6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1695_855"
          x1="0.527344"
          y1="17.4658"
          x2="33.7539"
          y2="17.4658"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0618991" stopColor="#2928C0" />
          <stop offset="0.302885" stopColor="#2B2AC5" />
          <stop offset="0.490385" stopColor="#1570D3" />
          <stop offset="0.75" stopColor="#01A6DA" />
          <stop offset="1" stopColor="#01B7E6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
