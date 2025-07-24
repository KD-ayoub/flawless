import Image from "next/image";
import React from "react";
import fullbg from "@/app/assets/svg/fullbg.svg";
import number1 from "@/app/assets/svg/number1.svg";
import number2 from "@/app/assets/svg/number2.svg";
import number3 from "@/app/assets/svg/number3.svg";
import number4 from "@/app/assets/svg/number4.svg";
import markicon from "@/app/assets/svg/markicon.svg";
import { geistSans, instrumentSerif } from "../layout";

export default function HorizontalCards() {
  const cards = [
    {
      icon: number1,
      title: "Branding",
      subtitle: "We build identities that stick and scale.",
      details: [
        "Logo design",
        "Visual identity & color system",
        "Brand guidelines & asset kit",
        "Pitch-deck / investor slides",
        "Social media brand assets",
        "Full rebrand & refresh",
      ],
    },
    {
      icon: number2,
      title: "Product & UX",
      subtitle: "UI people love and understand AT first SIGHT.",
      details: [
        "UX research & discovery",
        "User flows & wireframes",
        "High-fidelity UI design",
        "Design systems in Figma",
        "Dashboard & data-viz UX",
        "dApp / AI product patterns",
      ],
    },
    {
      icon: number3,
      title: "Web & Front-End",
      subtitle: "execution that stays fast, clean, and flexible.",
      details: [
        "React / Next.js front-end apps",
        "UI Implementation",
        "Modern Frameworks & Tools",
        "API Integration & State Logic",
        "Performance Optimization",
        "Animations & Interactions",
      ],
    },
    {
      icon: number4,
      title: "Motion",
      subtitle: "Movement with meaning, not just decoration.",
      details: [
        "Logo & brand animations",
        "Promo / explainer videos",
        "Social teaser reels",
        "Product Walkthroughs",
        "Animated Visual Identities",
        "Onboarding Animations",
      ],
    },
  ];
  return (
    <div>
      {cards.map((val, idx) => {
        return (
          <div
            key={val.title}
            className="bg-gradient-to-b from-[#d3a7d0af] to-[#7f7ffe58] rounded-[20px] p-1 w-[450px]"
          >
            <div className="relative bg-[#F9F9FB] rounded-[16px]">
              <Image
                className="w-full h-auto rounded-[16px] object-fill"
                src={fullbg}
                alt="full bg"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Image
                    src={val.icon}
                    width={60}
                    height={60}
                    alt="number1 logo"
                  />
                  <p
                    className={`${instrumentSerif.className} text-5xl font-normal text-black`}
                  >
                    {val.title}
                  </p>
                </div>
                <div>
                  <p
                    className={`${geistSans.className} uppercase font-normal text-base text-[#585858]`}
                  >
                    {val.subtitle}
                  </p>
                </div>
                {val.details.map((txt, idx) => {
                  return (
                    <div key={txt} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={markicon}
                          width={20}
                          height={20}
                          alt="markicon"
                        />
                        <p
                          className={`${geistSans.className} text-[#454545] tracking-[-0.01em] text-[20px] font-normal`}
                        >
                          {txt}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
