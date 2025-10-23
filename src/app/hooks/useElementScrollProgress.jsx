import { useEffect, useState } from "react";

/**
 * Returns progress in [0..1] for a target element:
 * 0 when element top == viewport bottom,
 * 1 when element bottom == viewport top.
 */
export function useElementScrollProgress(
  target
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = target.current;
    if (!el) return;

    let raf = 0;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;

      // distance to scrub across: from top hitting bottom to bottom hitting top
      const distance = vh + rect.height; // always > 0
      // how far we’ve traveled since the “start” (top at bottom)
      const traveled = vh - rect.top;

      // progress in [0..1]
      const p = Math.min(1, Math.max(0, traveled / distance));
      setProgress(p);
    };

    const onScroll = () => {
      // throttle with rAF for smoothness
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    // Lenis support (if present)
    const lenis = window?.lenis;
    if (lenis?.on) lenis.on("scroll", onScroll);

    // Fallback native listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onScroll); // resync when navigating back

    // First compute
    compute();

    // ResizeObserver for element size changes
    const ro = new ResizeObserver(onScroll);
    ro.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onScroll);
      if (lenis?.off) lenis.off("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [target]);

  return progress;
}
