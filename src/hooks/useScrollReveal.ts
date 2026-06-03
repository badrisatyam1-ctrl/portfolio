"use client";

import { useRef } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

/**
 * Hook for scroll-triggered reveal animations using IntersectionObserver.
 */
export function useScrollReveal(once = true, margin: UseInViewOptions["margin"] = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin });
  return { ref, isInView };
}
