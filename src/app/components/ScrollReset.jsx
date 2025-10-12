// app/ScrollReset.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollReset({ respectHash = true }) {
  // Disable browser’s native scroll restoration so we control it.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    // If navigating to a hash (/#case-studies), let the hash handler do its thing.
    if (respectHash && typeof window !== "undefined" && window.location.hash) return;

    const lenis = window.lenis;

    if (lenis) {
      // Immediate jump to top (do it twice to beat late layout shifts)
      lenis.scrollTo(0, { immediate: true });
      requestAnimationFrame(() => lenis.scrollTo(0, { immediate: true }));
    } else {
      // Fallback (no Lenis yet)
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [pathname, search?.toString(), respectHash]);

  return null;
}
