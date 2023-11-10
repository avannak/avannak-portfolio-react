"use client";

import { useEffect, useState } from "react";
import { throttle } from "lodash";

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
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const throttledCheckMobile = throttle(() =>
      setIsMobile(window.innerWidth <= 768)
    );
    window.addEventListener("resize", throttledCheckMobile);

    return () => {
      window.removeEventListener("resize", throttledCheckMobile);
      throttledCheckMobile.cancel();
    };
  }, []);

  return isMobile;
}
