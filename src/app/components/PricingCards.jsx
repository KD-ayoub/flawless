import Image from "next/image";
import React from "react";
import fullbg from "@/app/assets/svg/fullbg.svg";
import designblue from "@/app/assets/svg/designblue.svg";
import { geistSans, instrumentSerif } from "../layout";
import WebsiteCard from "./WebsiteCard";
import SubscriptionCard from "./SubscriptionCard";
import EcosystemCard from "./EcosystemCard";

export default function PricingCards() {
  return (
    <div className=" grid grid-cols-1 min-[800px]:grid-cols-2 min-[1120px]:grid-cols-3 place-items-center gap-3 mt-8">
      <WebsiteCard/>
      <SubscriptionCard/>
      <EcosystemCard/>
    </div>
  );
}
