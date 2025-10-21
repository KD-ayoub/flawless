"use client";
import React, { useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import { geistSans } from "../layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function WorkGallery() {
  const images1 = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759339695/IkonShopdark_yh0mxx.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759340288/work0_dhy4ar.png",
  ];
  const images2 = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759339794/IkonShop_rxm2ks.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759340437/work1_q2htdk.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759340561/work2_m9skgd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759340691/work3_et12gq.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759341604/work4_za2rfd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759341741/work5_vkxg5a.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759341859/work6_jurvtr.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759341957/work7_hdwkhf.png",
  ];
  const images3 = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342062/work8_seaujv.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342164/work9_iswxmb.png",
  ];
  const images4 = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342357/work10_b56isc.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342615/work11_r85pmd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342754/work12_b7ilhs.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759342872/work13_f1myz6.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759343004/work14_wnxo8q.png",
  ];

  // Split images into two rows

  const galleryRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  useGSAP(
    () => {
      // keep ST in sync with Lenis (only add once if you haven’t globally)
      // @ts-ignore
      window?.lenis?.on?.("scroll", ScrollTrigger.update);
      gsap.set(row1Ref.current, { x: "-20vw", willChange: "transform" });
      gsap.set(row2Ref.current, { x: "0vw", willChange: "transform" });

      // Row 1 → drifts RIGHT on scroll (-25vw -> +6vw) and fades to 1 quickly
      gsap.to(row1Ref.current, {
        x: "2vw",
        ease: "none",
        scrollTrigger: {
          id: "row1",
          trigger: galleryRef.current,
          start: "top bottom", // start when gallery enters viewport
          end: "bottom top", // end when it leaves
          scrub: true,
          invalidateOnRefresh: true,
        },
        // quick fade-in near the start of the scroll (independent of scrub)
        overwrite: "auto",
      });

      // Row 2 → drifts LEFT on scroll (+25vw -> -12vw) and fades to 1 quickly
      gsap.to(row2Ref.current, {
        x: "-36vw",
        ease: "none",
        scrollTrigger: {
          id: "row2",
          trigger: galleryRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
        overwrite: "auto",
      });

      // Make sure the container actually hides edges

      // Refresh after images load (CldImage loads async)
      const imgs = Array.from(
        galleryRef.current?.querySelectorAll("img") ?? []
      );
      const onLoad = () => ScrollTrigger.refresh();
      imgs.forEach((img) => {
        if (!img.complete) img.addEventListener("load", onLoad, { once: true });
      });

      // Extra safety refresh on next frame and after fonts/layout settle
      requestAnimationFrame(() => ScrollTrigger.refresh());
      const ro = new ResizeObserver(() => ScrollTrigger.refresh());
      if (galleryRef.current) ro.observe(galleryRef.current);

      return () => {
        imgs.forEach((img) => img.removeEventListener("load", onLoad));
        ro.disconnect();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: galleryRef }
  );

  return (
    <section className="overflow-hidden">
      <div className="mx-auto">
        {/* Gallery Container */}
        <div ref={galleryRef} className="relative">
          {/* First Row */}
          <div className="flex gap-4 mb-4 overflow-x-hidden">
            <div ref={row1Ref} className="flex gap-4 ">
              <div className="flex gap-4">
                {images1.map((image, index) => {
                  return (
                    <div
                      key={`row1-${index * Math.random()}`}
                      className="gallery-item relative flex-shrink-0 h-[180px] w-[250px] md:h-[220px] md:w-[300px] rounded-[16px] md:rounded-[20px] overflow-hidden"
                      style={{
                        padding: "2px",
                      }}
                    >
                      <div className="w-full h-full rounded-[14px] md:rounded-[18px] overflow-hidden bg-white">
                        <CldImage
                          src={image}
                          width={260}
                          height={260}
                          alt={`Work ${index + 1}`}
                          className="w-full h-full"
                          quality="auto"
                          format="auto"
                          draggable={false}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4">
                {images2.map((image, index) => (
                  <div
                    key={`row1-${index * Math.random()}`}
                    className="gallery-item relative flex-shrink-0 h-[180px] w-[250px] md:h-[220px] md:w-[300px] rounded-[16px] md:rounded-[20px] overflow-hidden"
                    style={{
                      padding: "2px",
                    }}
                  >
                    <div className="w-full h-full rounded-[14px] md:rounded-[18px] overflow-hidden bg-white">
                      <CldImage
                        src={image}
                        width={260}
                        height={260}
                        alt={`Work ${index + 1}`}
                        className="w-full h-full"
                        quality="auto"
                        format="auto"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-4 mb-4 overflow-x-hidden">
            <div ref={row2Ref} className="flex gap-4 ">
              <div className="flex gap-4">
                {images3.map((image, index) => {
                  return (
                    <div
                      key={`row1-${index * Math.random()}`}
                      className="gallery-item relative flex-shrink-0 h-[180px] w-[250px] md:h-[220px] md:w-[300px] rounded-[16px] md:rounded-[20px] overflow-hidden"
                      style={{
                        padding: "2px",
                      }}
                    >
                      <div className="w-full h-full rounded-[14px] md:rounded-[18px] overflow-hidden bg-white">
                        <CldImage
                          src={image}
                          width={260}
                          height={260}
                          alt={`Work ${index + 1}`}
                          className="w-full h-full"
                          quality="auto"
                          format="auto"
                          draggable={false}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4">
                {images4.map((image, index) => (
                  <div
                    key={`row1-${index * Math.random()}`}
                    className="gallery-item relative flex-shrink-0 h-[180px] w-[250px] md:h-[220px] md:w-[300px] rounded-[16px] md:rounded-[20px] overflow-hidden"
                    style={{
                      padding: "2px",
                    }}
                  >
                    <div className="w-full h-full rounded-[14px] md:rounded-[18px] overflow-hidden bg-white">
                      <CldImage
                        src={image}
                        width={260}
                        height={260}
                        alt={`Work ${index + 1}`}
                        className="w-full h-full"
                        quality="auto"
                        format="auto"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
