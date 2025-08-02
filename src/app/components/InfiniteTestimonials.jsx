"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import testimonial1 from "@/app/assets/svg/testimonial1.svg";
import testimonial2 from "@/app/assets/svg/testimonial2.svg";
import testimonial3 from "@/app/assets/svg/testimonial3.svg";
import testimonial4 from "@/app/assets/svg/testimonial4.svg";
import testimonial5 from "@/app/assets/svg/testimonial5.svg";
import testimonial6 from "@/app/assets/svg/testimonial6.svg";
import testimonial7 from "@/app/assets/svg/testimonial7.svg";
import testimonial8 from "@/app/assets/svg/testimonial8.svg";
import testimonial9 from "@/app/assets/svg/testimonial9.svg";
import testimonial10 from "@/app/assets/svg/testimonial10.svg";
import testimonial11 from "@/app/assets/svg/testimonial11.svg";
import testimonial12 from "@/app/assets/svg/testimonial12.svg";

const columns1 = [
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147700/samples/testimonial8_ozqirf.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147689/samples/testimonial5_dr0plz.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147699/samples/testimonial6_d8qt21.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147692/samples/testimonial10_gfnsia.svg",
];
const columns2 = [
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147690/samples/testimonial4_j8heyg.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147690/samples/testimonial7_schxts.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147690/samples/testimonial9_onqcom.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147682/samples/testimonial11_lrcop2.svg",
];
const columns3 = [
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147681/samples/testimonial3_mjglgv.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147678/samples/testimonial2_obnsrh.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147678/samples/testimonial2_obnsrh.svg",
  "https://res.cloudinary.com/do4rm9mc4/image/upload/v1754147677/samples/testimonial12_ffjzc5.svg",
];

export default function InfiniteTestimonials() {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const tweenRefs = useRef([]);

  const startMarquee = (ref, duration, reverse = false, index) => {
    const container = ref.current;
    if (!container) return;

    const animate = () => {
      const first = reverse
        ? container.children[container.children.length - 1]
        : container.children[0];

      const height = first.offsetHeight + 16;

      if (reverse) {
        container.insertBefore(first, container.firstChild);
        gsap.set(container, { y: `-${height}px` });
        const tween = gsap.to(container, {
          y: 0,
          duration,
          ease: "none",
          onComplete: animate,
        });
        tweenRefs.current[index] = tween;
      } else {
        const tween = gsap.to(container, {
          y: `-=${height}`,
          duration,
          ease: "none",
          onComplete: () => {
            container.appendChild(first);
            gsap.set(container, { y: 0 });
            animate();
          },
        });
        tweenRefs.current[index] = tween;
      }
    };

    animate();
  };

  useGSAP(() => {
    startMarquee(col1Ref, 10, false, 0);
    startMarquee(col2Ref, 10, true, 1);
    startMarquee(col3Ref, 10, false, 2);
  }, []);

  const handleHover = (index, action) => {
    const tween = tweenRefs.current[index];
    if (tween) {
      action === "pause" ? tween.pause() : tween.resume();
    }
  };

  return (
    <div className="w-full my-2 lg:my-5 max-w-7xl mx-auto h-[400px] sm:h-[500px] lg:h-[700px] relative overflow-hidden">
      {/* Blured top  */}
      <div className="w-[94%] h-10 bg-gradient-to-b from-[#f7f6fc] to-transparent absolute blur-[10px] top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none" />
      <div className="w-[94%] h-10 bg-gradient-to-b from-[#f7f6fc] to-transparent absolute blur-[10px] bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none" />
      <div className="w-full h-full grid grid-cols-3 gap-3 px-4">
        {[columns1, columns2, columns3].map((col, i) => (
          <div key={i} className="h-full overflow-hidden">
            <div
              ref={i === 0 ? col1Ref : i === 1 ? col2Ref : col3Ref}
              onMouseEnter={() => handleHover(i, "pause")}
              onMouseLeave={() => handleHover(i, "resume")}
              className="flex flex-col gap-4"
            >
              {col.map((testimonial, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    width={100}
                    height={100}
                    src={testimonial}
                    alt={`Testimonial ${index + 1}`}
                    className="w-[90%] h-full object-cover rounded-xl lg:rounded-3xl shadow-lg opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
