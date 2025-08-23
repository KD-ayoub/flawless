"use client";
import VideoSection from "@/app/components/VideoSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";

export default function WorkPage() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const images = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533448/work1_bt5jmc.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533644/work2_zgyuzk.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533610/work3_qeuj5c.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533406/work4_mqbpgp.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533738/work5_jass8i.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533823/work6_zggqgu.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533463/work7_oggbgp.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755534013/work8_dgqcpm.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533754/work9_fbhauk.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533857/work10_fonygf.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755534003/work11_ggese4.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755534004/work12_rnvozh.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755533946/work13_zrrjav.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625448/work14_xc6azk.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625194/work15_tmvqxj.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625174/work16_obu3so.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625425/work17_w9nmds.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625326/work18_kgar9h.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625335/work19_h1cjo1.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625373/work20_l7nglb.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625435/work21_iplenz.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625224/work22_fwf9wl.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755625338/work23_ulgm3l.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629380/work24_iehft5.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755628824/work25_qy92px.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755628876/work26_cj8bcm.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755628769/work27_ssb0nl.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755628746/work28_ynnmwl.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755628852/work29_ucq5bz.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629295/work30_ujdd6u.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629311/work31_hp6qei.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755628943/work32_lrdixu.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755628956/work33_xizwz3.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629269/work34_poetur.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629228/work35_mhmugo.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629153/work36_zzuuau.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629349/work37_v2mkzn.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629424/work38_xwz8xv.svg",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755629577/work39_fueut4.svg",
  ];

  useEffect(() => {
    const lenis = new Lenis();
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
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([containerRef.current, imageRef.current], {
      opacity: 0,
      y: 50,
    });

    // Animate in sequence
    tl.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }).to(
      imageRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    ); // Start 0.4s before previous animation ends
  }, []);

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div
        ref={containerRef}
        className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Responsive Image Container */}
        <div className="relative w-full  mx-auto">
          {/* Aspect ratio container */}
          {images.map((img) => {
            return (
              <div
                key={Math.random() * 2}
                ref={imageRef}
                className="relative aspect-video w-full rounded-xl overflow-hidden mt-4"
              >
                <Image
                  src={img}
                  fill
                  alt="Work Background"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
