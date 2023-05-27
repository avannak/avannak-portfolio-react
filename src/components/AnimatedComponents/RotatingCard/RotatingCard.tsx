import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

interface RotatingCardProps {
  children: ReactNode;
}

const RotationWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

const CardWrapper = styled(motion.div)`
  border-radius: 20px;
  backdrop-filter: blur(4px) brightness(120%);
`;

const RotatingCard: React.FC<RotatingCardProps> = ({ children }) => {
  // mouse position
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  // a reference for our animated card element
  const cardRef = useRef<HTMLDivElement>(null);

  // rotation
  const dampen = 60;
  const rotateX = useTransform<number, number>(mouseY, (newMouseY: number) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX: number) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  // sheen
  const diagonalMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position: number = newRotateX + newRotateY;
      return position;
    }
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(
    sheenPosition,
    [-250, 50, 250],
    [0, 0.05, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
        55deg,
        transparent,
        rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
        transparent)`;

  // handle mouse move on document
  useEffect(() => {
    let requestId: number;

    const handleMouseMove = (e: MouseEvent) => {
      requestId = requestAnimationFrame(() => {
        // animate mouse x and y
        animate(mouseX, e.clientX);
        animate(mouseY, e.clientY);
      });
    };

    if (typeof window === "undefined") return;

    // recalculate grid on resize
    window.addEventListener("mousemove", handleMouseMove);

    // cleanup
    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <CardWrapper
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 9000,
        backgroundImage: sheenGradient,
      }}
    >
      {children}
    </CardWrapper>
  );
};

export default RotatingCard;
