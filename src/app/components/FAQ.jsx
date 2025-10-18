import { CldImage } from "next-cloudinary";
import React from "react";
import FaqContent from "./FaqContent";

export default function FAQ() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 my-20">
        <div className="testing-bg relative overflow-hidden">
          <div className=" absolute w-[150px] h-[400px] left-0 -bottom-[180px]">
            <CldImage
              className=" w-full h-full object-fill"
              width={1200}
              height={220}
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759249229/Rectangle_nimvst.png"
              }
              alt="shape2"
              quality="auto"
              format="auto"
              draggable={false}
            />
          </div>
          <div className="absolute -right-[8%] -top-[130px] hidden md:block">
            <CldImage
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1759254055/shape4_damo4c.png"
              }
              className="rotate-180"
              width={300}
              height={300}
              alt="shape4"
              quality="auto"
              format="auto"
              draggable={false}
            />
          </div>
          <div className="p-5 md:p-10 h-full">
            <FaqContent />
          </div>
        </div>
      </div>
    </>
  );
}
