"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CldImage } from "next-cloudinary";
import { geistSans, instrumentSerif } from "../layout";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994346/testimonial1_uom0pp.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994347/testimonial2_bpckwf.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994347/testimonial3_pbdvtj.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994348/testimonial4_bsali9.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759240530/testimonial5_ovbhlo.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994351/testimonial6_gtgexp.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763749115/testimonial77_u5ayrl.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763749155/testimonial88_vwv30n.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1758994352/testimonial9_swhwtv.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763749515/testimonial10_r6ne56.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763749546/testimonial11_mpemv1.png",
  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763749585/testimonial12_evrepm.png",
];

export default function TestimonialGrid() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(() => {
    // gsap.fromTo(
    //   containerRef.current,
    //   {
    //     opacity: 0,
    //     y: 30,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.8,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "top 90%",
    //       end: "bottom 20%",
    //       toggleActions: "play none none none",
    //     },
    //   }
    // );
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="hidden sm:block w-full my-8 lg:my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4 lg:gap-6">
          {testimonials.map((testimonial, index) => {
            let margin = "";
            switch (index) {
              case 1:
                margin = "lg:mt-10";
                break;
              case 2:
                margin = "sm:-mt-16 md:mt-0 lg:mt-10";
                break;
              case 3:
                margin = "lg:-mt-34";
                break;
              case 5:
                margin = "lg:-mt-24";
                break;
              case 6:
                margin = "lg:-mt-12";
                break;
              case 7:
                margin = "lg:-mt-32";
                break;
              case 8:
                margin = "lg:-mt-12";
                break;
              case 10:
                margin = "lg:-mt-[20rem]";
                break;
            }
            return (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className={`group ${margin}`}
              >
                <div className="relative w-[280px] sm:w-full overflow-hidden rounded-[16px] md:rounded-[16px] lg:rounded-[20px] shadow-lg ">
                  <CldImage
                    width={400}
                    height={600}
                    src={testimonial}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-auto object-cover"
                    quality="auto"
                    format="auto"
                    draggable={false}
                  />

                  {/* Hover overlay */}
                  {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl lg:rounded-2xl" /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MobileTestimonials />
    </>
  );
}

function MobileTestimonials() {
  const mobileTestimo = [
    {
      name: "Ryan Wilkinson",
      work: "Co-Founder, Blockasset",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759597985/testimo1_r2xhhu.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252772/logo5_mcjlb2.png",
      text: "The Blockasset branding project was a smooth and rewarding experience. Clear direction and trust in the creative process made it possible to deliver cohesive identities for both the main brand and its sub-products. Highly recommended for anyone looking to bring their vision to life.",
    },
    {
      name: "Nick Fouriezos",
      work: "CMO, arch Network",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759602427/testimo2_hyiq1p.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252551/logo1_w1ruxk.png",
      text: "We worked together from Seed through Series A, and it was always a pleasure. They were consummate professionals highly responsive to our design requests and consistently delivered exceptional value and quality. They played a key role in our growth, from crafting the initial pitch deck to helping us amass over 500,000 followers across social channels. Highly recommended.",
    },
    {
      name: "Ariel Givner",
      work: "Founder, Givner Law",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759602674/testimo3_zo8rc0.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252720/logo4_hgzecc.png",
      text: "We've partnered on everything from law-firm branding to startup launches, and they never miss. Professional yet lightning-fast, top-tier work project after project. Collaborating feels effortless, and the creative vision nails the perfect look every time. Starting here is the smartest move you can make.",
    },
    {
      name: "Ashen",
      work: "Founder, Kamai Finance",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759602810/testimo4_jswpqm.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252897/logo7_mhiujo.png",
      text: "We've partnered on various branding projects for over two and a half years. Their work is outstanding, their pricing is fair, and they're always receptive to feedback.",
    },
    {
      name: "Youness Kasmi",
      work: "Founder, DnRater",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759602948/testimo5_yjzgsi.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759253212/logo13_tz8me6.png",
      text: "The service was smooth. They delivered exactly what I needed. The support was really helpful during he whole process.",
    },
    {
      name: "Jake Gallen",
      work: "CEO, Emblem Vault",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759603112/testimo6_nt0lou.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759252611/logo2_laaa1g.png",
      text: "We've collaborated on several projects, and they consistently exceeded all our expectations. We highly recommend them for any design needs.",
    },
    {
      name: "KidPaddle",
      work: "Cofounder, SolutioFi",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763749915/image7_clg4la.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750996/logo9_pxtbfv.png",
      text: "They delivered outstanding work for SolutioFi. I wasn't familiar with the branding process beforehand, and I was pleasantly surprised by how thorough and thoughtful their analysis and approach were. I’m now thrilled to use the branding they created across all aspects of our project. Every dollar spent on branding with them was more than worth it.",
    },
    {
      name: "Mike Kruz",
      work: "Founder, IkonShop",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750095/image8_bjv53u.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750943/logo8_l4nqbb.png",
      text: "Design—creative was nailed, responsive, and great to work with. The process felt smooth from start to finish, and every request was handled with care and precision. The final result exceeded our expectations.",
    },
    {
      name: "Tim Samoylov",
      work: "founder, Banx",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759603692/testimo9_pe7v3h.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759603815/logo14_uxosoh.png",
      text: "We partnered on a full branding overhaul, and the outcome was spot-on. They took the time to understand our goals, introduced fresh creative ideas, and delivered a unified identity that truly stands out. Communication was clear throughout, and every milestone was met on time.",
    },
    {
      name: "Stefano Cavalieri",
      work: "founder, Caw Studio",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750291/image10_kwd7zb.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750856/logo10_pby9qj.png",
      text: "We collaborated on the SILICONS website and revamped our brand identity. They were a breeze to work with, offering insightful ideas that took our brand up a notch. Their attention to detail and design sensibility are rare finds. We enthusiastically endorse their work.",
    },
    {
      name: "Birdm0n",
      work: "founder, Caw Studio",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750402/image11_a5fvng.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750856/logo10_pby9qj.png",
      text: "I’ve worked with many designers in the Solana ecosystem, but they were the first to truly blow me away with their professionalism and expertise. I’d recommend teaming up with them for any branding needs :)",
    },
    {
      name: "Bridget de' Medici",
      work: "Marketing Lead, AIE Labs",
      image:
        "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750722/image12_jvxnvk.png",
      logo: "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1763750729/logo12_o6s5n2.png",
      text: "We approached with a rough rebrand idea, and they guided us through the entire process, shaping our vision into a clear visual identity. From logo to landing page, they brought everything to life with patience and expert direction. The result captured our vision perfectly. Highly recommended!",
    },
  ];
  return (
    <>
      <div className="px-4 my-8 lg:my-12 max-w-7xl mx-auto sm:hidden">
        <div className="grid grid-cols-1 min-[580px]:grid-cols-2 gap-2 items-start">
          {mobileTestimo.map((value, idx) => {
            return (
              <div
                key={value.name}
                className="relative overflow-hidden table bg-[radial-gradient(circle_at_top,#D3A7D080_60%,#7F7FFE60)] p-0.5 rounded-[20px] sm:hidden w-full "
              >
                <div className=" p-6 float-left table-cell testing-bg">
                  <div className="flex items-center gap-3">
                    <div className=" w-20 h-20 rounded-full ">
                      <CldImage
                        src={value.image}
                        className="rounded-full"
                        width={1000}
                        height={1000}
                        alt="testimo image1"
                        quality="auto"
                        format="auto"
                        draggable={false}
                      />
                    </div>
                    <div className="">
                      <p
                        className={`${instrumentSerif.className} font-normal text-3xl leading-[100%] tracking-[-0.04em] text-black`}
                      >
                        {value.name}
                      </p>
                      <span
                        className={`${geistSans.className} font-normal text-base leading-[100%] tracking-[-0.02em] text-[#57576E]`}
                      >
                        {value.work}
                      </span>
                    </div>
                  </div>
                  <div className="my-10">
                    <div className="w-10 h-8">
                      <CldImage
                        src="https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759598559/quotes_yy86rt.png"
                        className=""
                        width={1000}
                        height={1000}
                        alt="quotes"
                        quality="auto"
                        format="auto"
                        draggable={false}
                      />
                    </div>
                    <div className="mt-2">
                      <p
                        className={`${geistSans.className} font-normal leading-[140%] tracking-[-0.04em] text-lg text-[#585858]`}
                      >
                        {value.text}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-1/3 h-auto">
                      <CldImage
                        src={value.logo}
                        className="opacity-60"
                        width={1000}
                        height={1000}
                        alt="quotes"
                        quality="auto"
                        format="auto"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
