"use client";

import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import React, { useEffect } from "react";

export default function LenisWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    window.lenis = lenis;
    // requestAnimationFrame(() => requestAnimationFrame(() => scrollHash(80)));
    return () => {
      lenis.destroy();
    };
  }, []);
  return <div>{children}</div>;
}
