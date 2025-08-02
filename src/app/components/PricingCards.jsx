import Image from "next/image";
import React from "react";
import fullbg from "@/app/assets/svg/fullbg.svg";
import designblue from "@/app/assets/svg/designblue.svg";
import { geistSans, instrumentSerif } from "../layout";
import WebsiteCard from "./WebsiteCard";
import SubscriptionCard from "./SubscriptionCard";
import EcosystemCard from "./EcosystemCard";
import CustomCard from "./CustomCard";

export default function PricingCards() {
  return (
    <div className=" grid grid-cols-1 min-[900px]:grid-cols-2 min-[1200px]:grid-cols-3 place-items-center gap-3 mt-8 mx-2">
      <WebsiteCard />
      <SubscriptionCard />
      <EcosystemCard />
      <div className="min-[1200px]:col-span-full min-[1200px]:w-full">
        <CustomCard/>
      </div>
    </div>
  );
}
