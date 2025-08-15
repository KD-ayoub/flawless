import VideoSection from "@/app/components/VideoSection";
import Image from "next/image";
import React from "react";

export default function WorkPage() {
  const url =
    "https://framerusercontent.com/images/Yy3ar0iteoa8i0nppzmM4eVrCOE.jpg?lossless=1";

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Image Container */}
        <div className="relative w-full  mx-auto">
          {/* Aspect ratio container */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden mt-4">
            <Image
              src={url}
              fill
              alt="Work Background"
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
