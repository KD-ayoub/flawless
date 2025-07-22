import React from "react";
import HeroSection from "./HeroSection";
import { geistSans } from "../layout";
import Image from "next/image";
import Trusted from "./Trusted";
import VideoSection from "./VideoSection";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Trusted />
      <VideoSection/>
    </div>
  );
}
