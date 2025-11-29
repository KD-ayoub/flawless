"use client";

import { ReactNode, Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import LenisWrapper from "./LenisWrapper";
import ScrollReset from "./ScrollReset";
import Header from "./Header";
import BackgroundLayoutContent from "./BackgroundLayoutContent";
import useHideBottomBlur from "../hooks/useHideBottomBlur";

export default function ClientShell({ children }) {
  const pathName = usePathname();
  useHideBottomBlur();
  const [footerVisibility, setFooterVisibility] = useState(false);

  useEffect(() => {
    const heroRef = document.getElementById("heroRef");
    if (!heroRef) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setFooterVisibility(true);
      }
    });

    observer.observe(heroRef);
    return () => observer.unobserve(heroRef);
  }, []);

  const bodyBg =
    pathName === "/arch"
      ? "bg-[#0E0E0F]"
      : pathName === "/trustybite"
      ? "bg-trustybite bg-[#FAFAFB]"
      : "bg-[#FAFAFB]";

  return (
    <div className={`${bodyBg} antialiased relative min-h-screen`}>
      {pathName === "/trustybite" && (
        <div className="absolute inset-0">
          <CldImage
            className="w-full h-[20%]"
            src="https://res.cloudinary.com/dvaeb0mxy/image/upload/v1760005162/bg-trusty_bes5vv.png"
            width={400}
            height={240}
            alt="trusty pg"
            quality="auto"
            format="auto"
            draggable={false}
          />
        </div>
      )}

      <div id="heroRef">
        <BackgroundLayoutContent />
        <Suspense>
          <LenisWrapper>
            <ScrollReset />
            <div className="relative z-10 mx-auto max-w-[1840px] text-black">
              <Header />
              {children}
            </div>
          </LenisWrapper>
        </Suspense>
      </div>
    </div>
  );
}
