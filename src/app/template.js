"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/animations";
import Image from "next/image";
import fullbg from "@/app/assets/svg/fullbg.svg";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen z-100 fixed top-0 left-0"
      ></div>
      {children}
    </div>
  );
}
