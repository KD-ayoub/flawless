import Image from "next/image";
import React from "react";
import WebsiteCard from "./WebsiteCard";
import SubscriptionCard from "./SubscriptionCard";
import EcosystemCard from "./EcosystemCard";
import CustomCard from "./CustomCard";

export default function PricingCards() {
  return (
    <div className=" grid grid-cols-1 min-[830px]:grid-cols-2  place-items-center gap-5 mt-8 mx-2">
      <SubscriptionCard />
      <WebsiteCard />
      {/* <EcosystemCard /> */}

        <CustomCard/>

    </div>
  );
}
