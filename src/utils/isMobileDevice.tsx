"use client";

import { useEffect, useState } from "react";

export const isMobileDevice = () => {
  // Check if the window object is defined
  if (typeof window !== "undefined") {
    // Returns true if the viewport width is 768px or less
    return window.innerWidth <= 768;
  }
  // Default to false if the window object is not available
  return false;
};

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    // Call checkMobile immediately to update state
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}
