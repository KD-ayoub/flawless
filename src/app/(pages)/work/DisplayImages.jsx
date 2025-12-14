"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

export default function DisplayImages() {
  const images = [
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759339695/IkonShopdark_yh0mxx.png",
    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1765658725/deh_jblvlk.png",
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

  return (
    <div className="relative w-full  mx-auto">
      {/* Aspect ratio container */}
      {images.map((img, index) => {
        const isMain = index === 1 || index === 0; // work0_dhy4ar: the one Lighthouse complains about

        return (
          <div
            key={img}
            className="relative rounded-[16px] md:rounded-[28px] lg:rounded-[32px] overflow-hidden mt-4"
          >
            <CldImage
              src={img}
              alt={`Work Background${img}`}
              // use a reasonable aspect ratio; for the main one we match the audit
              width={isMain ? 665 : 400}
              height={isMain ? 575 : 200}
              className="w-full h-auto" // 👈 IMPORTANT: no h-full
              sizes={
                isMain
                  ? // this tells the browser: "slot ≈ 600px on desktop"
                    "(min-width: 1024px) 600px, 100vw"
                  : // others can be smaller, they’re not LCP / critical
                    "(min-width: 1536px) 480px,(min-width: 1280px) 420px,(min-width: 1024px) 360px,100vw"
              }
              quality="auto:eco"
              format="auto"
              draggable={false}
              // only the main image is LCP candidate
              priority={isMain}
              fetchPriority={isMain ? "high" : "auto"}
            />
          </div>
        );
      })}
    </div>
  );
}
