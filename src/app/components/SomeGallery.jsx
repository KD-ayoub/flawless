"use client";
import React, { useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function WorkGallery() {
  const images1 = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761320873/gal1_gxqiun.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761320987/gal2_lskvj2.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321120/gal3_dse7eb.png",
  ];
  const images2 = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321213/gal4_zo81tr.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321269/gal5_ohj1ey.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321367/gal6_ps2rxo.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321408/gal7_uu5ldc.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321462/gal8_zejhwo.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321534/gal9_eixx8i.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321665/gal10_uz5wqm.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761321844/gal11_gmmlto.png",
  ];
  const images3 = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761322019/gal12_ilcxt2.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761322155/gal13_bdp1os.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761322281/gal14_w4oag8.png",
  ];
  const images4 = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761322436/gal15_ujxyp6.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761322610/gal16_mglhuh.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761322689/gal17_l8gjll.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1761322861/gal18_k6xhih.png",
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
    <section className="overflow-hidden mb-10">
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
                      className="gallery-item relative flex-shrink-0 h-[200px] w-[280px] md:h-[240px] md:w-[360px] rounded-[16px] md:rounded-[20px] overflow-hidden"
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
                    className="gallery-item relative flex-shrink-0 h-[200px] w-[280px] md:h-[240px] md:w-[360px] rounded-[16px] md:rounded-[20px] overflow-hidden"
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
                      className="gallery-item relative flex-shrink-0 h-[200px] w-[280px] md:h-[240px] md:w-[360px] rounded-[16px] md:rounded-[20px] overflow-hidden"
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
                    className="gallery-item relative flex-shrink-0 h-[200px] w-[280px] md:h-[240px] md:w-[360px] rounded-[16px] md:rounded-[20px] overflow-hidden"
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
