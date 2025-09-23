"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function BackgroundLayoutContent() {
  const pathName = usePathname();
  return (
    <>
      {/* Background image */}
      {pathName !== "/arch" && (
        <>
          <div className="fixed inset-0 -z-10">
            <Image
              className="object-cover w-full h-full -scale-y-100"
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705258/fullbg_crrpgn.svg"
              }
              alt="Background"
              fill
              priority
            />
          </div>
          <div className="absolute w-[400px] h-[400px] -top-20 right-0 min-[2500px]:w-[2000px] min-[2500px]:top-0 min-[2500px]:right-20">
            <Image
              className=" w-full h-full  object-fill"
              fill
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705870/shape1_kkfg5l.svg"
              }
              alt="shape1"
              priority
            />
          </div>
          <div className=" absolute hidden min-[1000px]:block  w-[200px] h-[400px]  2xl:h-[600px]  md:top-60 xl:top-52  -left-5 min-[2500px]:hidden ">
            <Image
              className=" w-full h-full  object-fill"
              fill
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705937/shape2_kaovqp.svg"
              }
              alt="shape2"
              priority
            />
          </div>
        </>
      )}
    </>
  );
}
