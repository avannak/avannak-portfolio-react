import React, { useEffect, useRef } from "react";

type WithSmoothScrollProps = {
  className?: string;
};

const WithSmoothScroll = (WrappedComponent: React.ComponentType<any>) => {
  const SmoothScrollWrapper: React.FC<WithSmoothScrollProps> = ({
    className,
    ...props
  }) => {
    const bodyRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      let scrollY = 0;
      let lastScrollY = window.scrollY;
      let ticking = false;

      const updateScroll = () => {
        if (bodyRef.current) {
          bodyRef.current.style.top = `-${scrollY}px`;
        }
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };

      const onScroll = () => {
        lastScrollY = window.scrollY;
        scrollY += (lastScrollY - scrollY) * 0.1;
        requestTick();
      };

      if (bodyRef.current) {
        bodyRef.current.style.position = "fixed";
        bodyRef.current.style.top = "0px";
      }

      window.addEventListener("scroll", onScroll);

      return () => {
        if (bodyRef.current) {
          bodyRef.current.style.position = "";
          bodyRef.current.style.top = "";
        }
        window.removeEventListener("scroll", onScroll);
      };
    }, []);

    return (
      <div ref={bodyRef} className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return SmoothScrollWrapper;
};

export default WithSmoothScroll;
