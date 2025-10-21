"use client";
import React, { useRef } from "react";
import { CldImage } from "next-cloudinary";
import { geistSans } from "../layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function WorkGallery() {
  const galleryRef = useRef(null);
  const titleRef = useRef(null);

  const images = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759339695/IkonShopdark_yh0mxx.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759340288/work0_dhy4ar.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759339794/IkonShop_rxm2ks.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759340437/work1_q2htdk.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759340561/work2_m9skgd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759340691/work3_et12gq.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759341604/work4_za2rfd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759341741/work5_vkxg5a.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759341859/work6_jurvtr.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759341957/work7_hdwkhf.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342062/work8_seaujv.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342164/work9_iswxmb.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342357/work10_b56isc.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342615/work11_r85pmd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342754/work12_b7ilhs.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342872/work13_f1myz6.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759343004/work14_wnxo8q.png",
  ];

  // Split images into two rows
  const firstRow = images.slice(0, Math.ceil(images.length / 2));
  const secondRow = images.slice(Math.ceil(images.length / 2));

  return (
    <section className="overflow-hidden">
      <div className="mx-auto">

        {/* Gallery Container */}
        <div ref={galleryRef} className="relative">
          {/* First Row */}
          <div className="flex gap-4 mb-4 overflow-x-hidden">
            <div className="flex gap-4 animate-marquee">
              {firstRow.map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="gallery-item relative flex-shrink-0 w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-[16px] md:rounded-[20px] overflow-hidden group cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, #9876EC, #6B46C1, #01B7E6)`,
                    padding: "2px",
                  }}
                >
                  <div className="w-full h-full rounded-[14px] md:rounded-[18px] overflow-hidden bg-white">
                    <CldImage
                      src={image}
                      width={260}
                      height={260}
                      alt={`Work ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      quality="auto"
                      format="auto"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-4 overflow-x-hidden">
            <div className="flex gap-4 animate-marquee-reverse">
              {secondRow.map((image, index) => (
                <div
                  key={`row2-${index}`}
                  className="gallery-item relative flex-shrink-0 w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[40%] lg:h-[260px] rounded-[16px] md:rounded-[20px] overflow-hidden group cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, #01B7E6, #9876EC, #6B46C1)`,
                    padding: "2px",
                  }}
                >
                  <div className="w-full h-full rounded-[14px] md:rounded-[18px] overflow-hidden bg-white">
                    <CldImage
                      src={image}
                      width={1000}
                      height={260}
                      alt={`Work ${index + 1}`}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                      quality="auto"
                      format="auto"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fade Overlays */}
          {/* <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-gradient-to-r from-[#F5F5FB] via-[#F5F5FB]/90 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none z-10"></div> */}
        </div>
      </div>
    </section>
  );
}