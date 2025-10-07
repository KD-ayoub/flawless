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
import CaseStudies from "./CaseStudies";


function scrollHash(offset = 80) {
  const id = decodeURIComponent(window.location.hash.replace("#", ""));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  window.lenis?.scrollTo(target, {
    offset: -offset,
    duration: 2.5,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
}

export function useLenisScrollOnHash(offset = 80) {
  useEffect(() => {
    // on first mount (after route push)
    requestAnimationFrame(() => scrollHash(offset));

    // if user clicks another hash link while on the page
    const onHashChange = () => scrollHash(offset);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [offset]);
}


export default function LandingPage() {

  useEffect(() => {
      const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      window.lenis = lenis;
      requestAnimationFrame(() => requestAnimationFrame(() => scrollHash(80)));
      return () => {
        lenis.destroy()
      }

  }, [])
  useLenisScrollOnHash();
  return (
    <div>
      <HeroSection />
      <Trusted />
      <VideoSection/>
      <GreatIdeas/>
      <WhatWedoSection/>
      <HowitWorksSection/>
      <TestimonialSection/>
      <PricingSection/>
      <CaseStudies/>
    </div>
  );
}
