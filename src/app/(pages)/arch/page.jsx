"use client";

import { geistSans } from "@/app/layout";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import casep1 from "@/app/assets/svg/case-p1.svg";
import casep2 from "@/app/assets/svg/case-p2.svg";
import casep3 from "@/app/assets/svg/case-p3.svg";
import casep4 from "@/app/assets/svg/case-p4.svg";
import casep5 from "@/app/assets/svg/case-p5.svg";
import casep6 from "@/app/assets/svg/case-p6.svg";
import { FaCircleCheck } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const challengeRef = useRef(null);
  const approachRef = useRef(null);
  const resultsRef = useRef(null);
  const imageRefs = useRef([]);
  const checklistRef = useRef(null);
  const lenisRef = useRef(null);

  const videoUrl =
    "https://res.cloudinary.com/dvaeb0mxy/video/upload/v1758660791/arch-video_u6meh3.mp4";



  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    // Hero section animation
    gsap.fromTo(heroRef.current,
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
    gsap.fromTo(challengeRef.current,
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
    gsap.fromTo(approachRef.current,
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
      gsap.fromTo(checkItems,
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
    gsap.fromTo(resultsRef.current,
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
        gsap.fromTo(image,
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

    // Video container animation and play/pause logic
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        // Animate video container
        gsap.fromTo(containerRef.current,
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
          }
        );
        
        // Play video
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log("Video autoplay failed:", error);
          });
        }
      },
      onLeave: () => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      onEnterBack: () => {
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log("Video autoplay failed:", error);
          });
        }
      },
      onLeaveBack: () => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      },
    });
  });

  return (
    <div className="text-white mt-10 lg:mt-16 mx-3 md:mx-10 2xl:mx-20">
      {/* Hero Section */}
      <div ref={heroRef}>
        <p
          className={`${geistSans.className} font-semibold text-white leading-[100%] tracking-[-0.04em] text-[30px] sm:text-[40px] md:text-[55px] lg:text-[63px]`}
        >
          Designing the Future of Bitcoin: How Arch<br className="hidden lg:block"/> Raised{" "}
          <span className="text-[#FF9900]">$20M+</span> and Grew to{" "}
          <span className="text-[#FF9900]">500K+</span><br className="hidden lg:block"/> Followers with Design
          People Believe In
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
        <Image
          ref={(el) => (imageRefs.current[0] = el)}
          className="w-full h-1/3 rounded-[20px]"
          src={casep1}
          width={undefined}
          height={200}
          alt="case p1"
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
          needed was a design presence that could match that ambition. Together,
          we set out to build a brand and user experience that not only looked
          the part but also gave developers, partners, and investors the
          confidence to get involved.
        </p>
      </div>

      {/* Grid Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        <Image
          ref={(el) => (imageRefs.current[1] = el)}
          className="w-full h-full rounded-[20px]"
          src={casep2}
          width={undefined}
          height={200}
          alt="case p2"
        />
        <Image
          ref={(el) => (imageRefs.current[2] = el)}
          className="w-full h-full rounded-[20px]"
          src={casep3}
          width={undefined}
          height={200}
          alt="case p3"
        />
      </div>

      {/* Full Width Image */}
      <div className="">
        <Image
          ref={(el) => (imageRefs.current[3] = el)}
          className="w-full h-1/3 rounded-[20px]"
          src={casep4}
          width={undefined}
          height={200}
          alt="case p4"
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
          We embedded ourselves into Arch's team, making design accessible 24/7.
          Starting with a branding exploration process, we defined a design
          language that reflected their technical depth and bold vision. From
          there, we delivered across every touchpoint:
        </p>
      </div>

      {/* Checklist Section */}
      <div ref={checklistRef}>
        <div className="flex items-center gap-2">
          <FaCircleCheck color="#FF9900" className="w-4 h-4 md:w-6 md:h-6" />
          <p
            className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
          >
            Branding
            <span
              className={`${geistSans.className} ml-2 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Established Arch's visual identity and brand system
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaCircleCheck color="#FF9900" className="w-4 h-4 md:w-6 md:h-6" />
          <p
            className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
          >
            Web Design
            <span
              className={`${geistSans.className} ml-2 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Created their first website, then revamped it to reflect growth
              and ecosystem expansion
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaCircleCheck color="#FF9900" className="w-4 h-4 md:w-6 md:h-6" />
          <p
            className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
          >
            Product Design
            <span
              className={`${geistSans.className} ml-2 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Designed a dashboard to onboard and engage users
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaCircleCheck color="#FF9900" className="w-4 h-4 md:w-6 md:h-6" />
          <p
            className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
          >
            Motion Design
            <span
              className={`${geistSans.className} ml-2 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Animations and visuals to explain complex concepts simply
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaCircleCheck color="#FF9900" className="w-4 h-4 md:w-6 md:h-6" />
          <p
            className={`${geistSans.className} font-normal text-[20px] md:text-[32px] tracking-[-0.04em]`}
          >
            Marketing Graphics
            <span
              className={`${geistSans.className} ml-2 font-normal text-[#A7A7A7] text-[18px] md:text-[26px] tracking-[-0.01em]`}
            >
              Scalable assets for campaigns, social media, and community
              growth
            </span>
          </p>
        </div>
      </div>

      {/* More Images */}
      <div className="my-10">
        <Image
          ref={(el) => (imageRefs.current[4] = el)}
          className="w-full h-1/3 rounded-[20px]"
          src={casep5}
          width={undefined}
          height={200}
          alt="case p5"
        />
      </div>
      <div className="my-10">
        <Image
          ref={(el) => (imageRefs.current[5] = el)}
          className="w-full h-1/3 rounded-[20px]"
          src={casep6}
          width={undefined}
          height={200}
          alt="case p6"
        />
      </div>

      {/* Video Section */}
      <div ref={containerRef} className="">
        <div className="mx-auto">
          <div className="relative aspect-[20/9] rounded-2xl overflow-hidden shadow-2xl bg-black group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="my-10 mb-30" ref={resultsRef}>
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
    </div>
  );
}