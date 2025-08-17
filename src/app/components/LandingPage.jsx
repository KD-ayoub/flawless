"use client";
import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import { geistSans } from "../layout";
import Image from "next/image";
import Trusted from "./Trusted";
import VideoSection from "./VideoSection";
import GreatIdeas from "./GreatIdeas";
import WhatWedoSection from "./WhatWedoSection";
import HowitWorksSection from "./HowitWorksSection";
import TestimonialSection from "./TestimonialSection";
import PricingSection from "./PricingSection";
import Lenis from "lenis";

export default function LandingPage() {
  useEffect(() => {
      const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      return () => {
        lenis.destroy()
      }

  }, [])
  return (
    <div>
      <HeroSection />
      <Trusted />
      {/* <VideoSection/> */}
      <GreatIdeas/>
      {/* <WhatWedoSection/> */}
      <HowitWorksSection/>
      {/* <TestimonialSection/> */}
      <PricingSection/>
    </div>
  );
}
