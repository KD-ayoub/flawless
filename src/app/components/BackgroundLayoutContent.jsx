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
            <CldImage
              className="object-cover w-full h-full -scale-y-100"
              width={1000}
              height={1000}
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705258/fullbg_crrpgn.svg"
              }
              alt="Background"
              quality="auto"
              format="auto"
            />
          </div>
          <div className="absolute w-[400px] h-[200px] min-[2500px]:w-[1000px]! min-[2500px]:h-[500px]! lg:w-[500px] lg:h-[300px]  right-0">
            <CldImage
              className=" w-full h-full object-cover"
              width={2000}
              height={200}
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759249445/shape1_gnjglp.png"
              }
              alt="shape1"
              quality="auto"
              format="auto"
            />
          </div>
          {/* <div className=" absolute hidden min-[1000px]:block  w-[200px] h-[400px]  2xl:h-[600px]  md:top-60 xl:top-52  -left-5 min-[2500px]:hidden ">
            <Image
              className=" w-full h-full  object-fill"
              fill
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705937/shape2_kaovqp.svg"
              }
              alt="shape2"
              priority
            />
          </div> */}
          <div className=" absolute hidden min-[1000px]:block  w-[150px] h-[400px]  2xl:h-[600px]  md:top-20 xl:top-28  -left-5 min-[2500px]:hidden ">
            <CldImage
              className=" w-full h-auto object-cover"
              width={1200}
              height={220}
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759249229/Rectangle_nimvst.png"
              }
              alt="shape2"
              quality="auto"
              format="auto"
            />
          </div>
        </>
      )}
    </>
  );
}
