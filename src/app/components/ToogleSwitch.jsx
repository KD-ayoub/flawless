"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ToogleSwitch({ card, isChecked, setIsChecked }) {
  if (card === "subscription") {
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
              isChecked
                ? "border-2 border-[#DA94EF]"
                : "border-2 border-[#d7d6e3]"
            } transition-all duration-500 bg-[#efeef6] overflow-hidden`}
          >
            <Image
              src={
                "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705017/design1_yyo7a7.svg"
              }
              alt="background"
              fill
              className={`absolute ${
                isChecked ? "opacity-100" : "opacity-0"
              } inset-0 object-cover rounded-xl`}
              draggable={false}
            />

            {/* Toggle Button with Icon */}
            <div
              className={`absolute top-[2px] left-[2px] bg-white rounded-xl h-8 w-8 flex items-center justify-center transition-all duration-500 shadow-sm ${
                isChecked ? "translate-x-10" : "translate-x-0"
              }`}
            >
              {isChecked ? (
                <Image
                  src={
                    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705052/devtoogle2_vmhsze.svg"
                  }
                  alt="brush icon"
                  width={20}
                  height={20}
                  className="object-contain"
                  draggable={false}
                />
              ) : (
                <Image
                  src={
                    "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755704943/brush2_vchraa.svg"
                  }
                  alt="brush icon"
                  width={20}
                  height={20}
                  className="object-contain"
                  draggable={false}
                />
              )}
            </div>
          </div>
        </label>
      </>
    );
  }

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
            isChecked
              ? "border-2 border-[#0254D2]"
              : "border-2 border-[#d7d6e3]"
          } transition-all duration-500 bg-[#efeef6] overflow-hidden`}
        >
          <Image
            src={
              "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705123/designblue_scnjef.svg"
            }
            alt="background"
            fill
            className={`absolute ${
              isChecked ? "opacity-100" : "opacity-0"
            } inset-0 object-cover rounded-xl`}
            draggable={false}
          />

          {/* Toggle Button with Icon */}
          <div
            className={`absolute top-[2px] left-[2px] bg-white rounded-xl h-8 w-8 flex items-center justify-center transition-all duration-500 shadow-sm ${
              isChecked ? "translate-x-10" : "translate-x-0"
            }`}
          >
            {isChecked ? (
              <Image
                src={
                  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755705031/devtoogle_rfdhs8.svg"
                }
                alt="brush icon"
                width={20}
                height={20}
                className="object-contain"
                draggable={false}
              />
            ) : (
              <Image
                src={
                  "https://res.cloudinary.com/dvaeb0mxy/image/upload/v1755704938/brush_snpuov.svg"
                }
                alt="brush icon"
                width={20}
                height={20}
                className="object-contain"
                draggable={false}
              />
            )}
          </div>
        </div>
      </label>
    </>
  );
}
