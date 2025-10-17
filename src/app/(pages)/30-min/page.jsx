"use client";

import React from "react";

/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#9876EC" },
          dark: { "cal-brand": "#0070F3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className=" flex items-center justify-center px-4 pt-[70px]">
      <div className="w-full max-w-4xl mx-auto">
        <Cal
          namespace="30min"
          calLink="flawless/30min"
          style={{
            width: "100%",
            height: "100%", 
            // overflow: "scroll",
          }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </div>
  );
}
