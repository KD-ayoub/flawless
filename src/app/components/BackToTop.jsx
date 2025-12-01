"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export default function BackToTop({ threshold = 300 }) {
  const [visible, setVisible] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    // simple smooth scroll (works even without lenis)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToTop();
        }
      }}
      className={`fixed right-4 bottom-6 z-50 cursor-pointer inline-flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-200 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }  ${pathName !== "/arch"? "bg-black text-white":"bg-white text-black"}`}
      title="Back to top"
    >
      {/* simple up arrow */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}