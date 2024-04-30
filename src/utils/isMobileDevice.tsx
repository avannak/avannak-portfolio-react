"use client";

import { useEffect, useState } from "react";
import { throttle } from "lodash";

export const isMobileDevice = () => {
  if (typeof window === "undefined") return false; // Return false if the window object is not available

  const userAgent = window.navigator.userAgent;

  // Check for specific patterns in the userAgent string
  const isAndroid = /Android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isWindowsPhone = /Windows Phone/i.test(userAgent);
  const isBlackBerry = /BlackBerry/i.test(userAgent);
  const isOpera = /Opera Mini/i.test(userAgent);

  // Return true if any of the patterns match, indicating a mobile device
  return isAndroid || isIOS || isWindowsPhone || isBlackBerry || isOpera;
};

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(isMobileDevice());

  useEffect(() => {
    const handleResize = throttle(() => setIsMobile(isMobileDevice()), 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  return isMobile;
}
