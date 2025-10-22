"use client";

import { useEffect } from "react";

export default function useHideBottomBlur() {
  useEffect(() => {
    const fade = document.getElementById("bottom-fade");
    const sentinel = document.getElementById("bottom-fade-sentinel");
    if (!fade || !sentinel) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // If the sentinel is visible, we’re near the bottom → hide blur
        if (entry.isIntersecting) {
          fade.classList.add("opacity-0");
        } else {
          fade.classList.remove("opacity-0");
        }
      },
      {
        root: null,
        threshold: 0,
        // start hiding a bit before the sentinel fully enters
        rootMargin: "0px 0px 0px 0px",
      }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);
}