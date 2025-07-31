import React from "react";
import { geistSans } from "../layout";
import PricingCards from "./PricingCards";

export default function PricingSection() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className={`${geistSans.className} font-normal tracking-[-0.04em] text-3xl md:text-4xl lg:text-5xl text-left`}>
          High-impact work.
        </h1>
        <h1 className={`${geistSans.className} font-normal tracking-[-0.04em] text-3xl md:text-4xl lg:text-5xl text-left`}>
          Clear, transparent pricing.
        </h1>
        <p className={`${geistSans.className} text-[#585858] mt-2 tracking-[-0.04em] text-lg sm:text-xl leading-relaxed`}>
          You tell us what you need. We'll handle the rest, no overthinking, no
          overbilling.
        </p>
        <PricingCards/>
      </div>
      
    </div>
  );
}
