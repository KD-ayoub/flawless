"use client";
import VideoSection from "@/app/components/VideoSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CldImage } from "next-cloudinary";
import { IoClose } from "react-icons/io5";

export default function WorkPage() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);
  const lenisRef = useRef(null); // Add Lenis ref

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
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759343189/work15_vncvbc.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759343295/work16_cchsdk.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759343384/work17_ynqm4s.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759400454/work18_kkktkd.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759400603/work19_dl71l1.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759400739/work20_bs5ewj.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759400908/work21_s3ebdw.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759401856/work22_foytjj.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759402034/work23_fgxynn.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759402318/work24_snvjpz.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759402685/work25_kclwqb.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759402860/work26_thvf6f.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759403147/work27_bgqdbt.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759403528/work28_f2n8ex.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759403844/work29_ucglhm.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759403921/work30_krk7or.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759407251/work31_ylfpco.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759407654/work32_g9fp7k.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759407871/work33_p3ne8x.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759408081/work34_vaz3x6.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759408243/work35_si6zi9.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759409427/work36_j9c6b6.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759409681/work37_ximlna.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759410079/work38_bqiutt.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759410587/work39_m0g0w4.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759410805/work40_bg1mwf.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759411031/work41_zffgsu.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759411166/work42_qqcuxp.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759411325/work43_jpxcwz.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759411496/work44_dpppgm.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759411806/work45_dok2rk.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759412303/work46_x04rvq.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759412513/work47_lvoetn.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759412698/work48_d9uydn.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759412827/work49_bmaj8z.png",
  ];

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

  // const openModal = (img, index) => {
  //   setSelectedImage({ src: img, index });
  //   if (lenisRef.current) {
  //     lenisRef.current.stop();
  //   }
  //   containerRef.current.style.overflow = "hidden"; // Prevent background scroll
  //   document.documentElement.style.overflow = "hidden"; // Also set on html element
  // };

  // const closeModal = () => {
  //   if (modalRef.current) {
  //     gsap.to(modalRef.current, {
  //       opacity: 0,
  //       scale: 0.8,
  //       duration: 0.2,
  //       ease: "power2.in",
  //       onComplete: () => {
  //         setSelectedImage(null);
  //         if (lenisRef.current) {
  //           lenisRef.current.start();
  //         }
  //         containerRef.current.style.overflow = "unset"; // Prevent background scroll
  //         document.documentElement.style.overflow = "unset"; // Also set on html element
  //       },
  //     });
  //   }
  // };

  // // Close modal on escape key
  // useEffect(() => {
  //   const handleEsc = (e) => {
  //     if (e.key === "Escape" && selectedImage) {
  //       closeModal();
  //     }
  //   };
  //   window.addEventListener("keydown", handleEsc);
  //   return () => window.removeEventListener("keydown", handleEsc);
  // }, [selectedImage]);

  return (
    <>
      <div className="py-8 sm:py-12 lg:py-16">
        <div
          ref={containerRef}
          className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Responsive Image Container */}
          <div className="relative w-full  mx-auto">
            {/* Aspect ratio container */}
            {images.map((img, index) => {
              return (
                <div
                  key={Math.random() * 2}
                  ref={imageRef}
                  className="relative w-full rounded-[16px] md:rounded-[28px] lg:rounded-[32px] overflow-hidden mt-4"
                  // onClick={() => openModal(img, index)}
                >
                  <CldImage
                    src={img}
                    width={1440}
                    height={0}
                    alt="Work Background"
                    className=" h-full "
                    sizes=""
                    quality="auto"
                    format="auto"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Modal Popup
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center  justify-center p-4"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative max-w-[95vw] max-h-[90vh] overflow-auto w-full h-full flex flex-col rounded-2xl"
            // onClick={(e) => e.stopPropagation()}
          >
            <div className="">
              <Image
                className="object-contain rounded-2xl"
                src={selectedImage.src}
                fill
                alt={`clicked img ${selectedImage.index}`}
              />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
