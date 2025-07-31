"use client";
import React, { useState } from "react";
import Image from "next/image";
import designblue from "@/app/assets/svg/designblue.svg";
import brush from "@/app/assets/svg/brush.svg";
import devtoogle from "@/app/assets/svg/devtoogle.svg";

export default function ToogleSwitch({ isChecked, setIsChecked }) {
  
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          className="sr-only peer"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div
          className={`w-20 h-10 relative rounded-2xl ${
            isChecked ? "border-2 border-[#0254D2]" : "border-2 border-[#129DE8]"
          } transition-all duration-500 overflow-hidden`}
        >
          <Image
            src={designblue}
            alt="background"
            fill
            className={`absolute ${
              isChecked ? "opacity-100" : "opacity-60"
            } inset-0 object-cover rounded-xl`}
          />

          {/* Toggle Button with Icon */}
          <div
            className={`absolute top-[2px] left-[2px] bg-white rounded-xl h-8 w-8 flex items-center justify-center transition-all duration-500 shadow-sm ${
              isChecked ? "translate-x-10" : "translate-x-0"
            }`}
          >
            {isChecked ? (
              <Image
                src={devtoogle}
                alt="brush icon"
                width={20}
                height={20}
                className="object-contain"
              />
            ) : (
              <Image
                src={brush}
                alt="brush icon"
                width={20}
                height={20}
                className="object-contain"
              />
            )}
          </div>
        </div>
      </label>
    </>
  );
}
