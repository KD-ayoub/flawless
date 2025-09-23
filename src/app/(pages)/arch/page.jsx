import { geistSans } from "@/app/layout";
import Image from "next/image";
import React from "react";
import casep1 from "@/app/assets/svg/case-p1.svg";

export default function page() {
  return (
    <div className="text-white mt-10 lg:mt-16 mx-3 md:mx-10 2xl:mx-20">
      <div>
        <p
          className={`${geistSans.className} font-semibold text-white leading-[100%] tracking-[-0.04em] text-[30px] sm:text-[40px] md:text-[55px] lg:text-[63px]`}
        >
          Designing the Future of Bitcoin: How Arch Raised{" "}
          <span className="text-[#FF9900]">$20M+</span> and Grew to{" "}
          <span className="text-[#FF9900]">500K+</span> Followers with Design
          People Believe In
        </p>
        <p
          className={`${geistSans.className} mt-8 font-normal text-[#A7A7A7] leading-[120%] tracking-[-0.04em] text-[18px] md:text-[22px] lg:text-[32px]`}
        >
          Arch Network is building the permissionless financial rails for a
          Bitcoin-denominated world. By enabling bridge-free programmability
          directly on Bitcoin, they’re solving the “Bitcoin Builder’s Dilemma”
          and unlocking new opportunities for developers and users.
        </p>
      </div>
      <div className="my-10">
        <Image
          className="w-full h-1/3 rounded-[20px]"
          src={casep1}
          width={undefined}
          height={200}
          alt="case p1"
        />
      </div>
      <div>
        <h1
          className={`${geistSans.className} font-normal text-white tracking-[-0.04em] sm:text-[30px] md:text-[40px] lg:text-[50px]`}
        >
          The Challenge
        </h1>
        <p className={`${geistSans.className} font-normal leading-[120%] tracking-[-0.04em] text-[#A7A7A7] text-[18px] md:text-[22px] lg:text-[32px]`}>
          When the Arch team reached out, they already had a strong
          infrastructure and a big vision for the future of Bitcoin. What they
          needed was a design presence that could match that ambition. Together,
          we set out to build a brand and user experience that not only looked
          the part but also gave developers, partners, and investors the
          confidence to get involved.
        </p>
      </div>
    </div>
  );
}
