import React from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

interface CircleProps {
  children?: React.ReactNode;
  size?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  zIndex?: number;
}

const Circle: React.FC<CircleProps> = ({
  children,
  size = 200,
  top,
  left,
  right,
  bottom,
  zIndex = 0,
}) => {
  const { x, y } = useMousePosition();
  const sizeMask = 40;
  return (
    <motion.div
      style={{
        position: "absolute",
        color: "black",
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        zIndex,
      }}
      animate={{
        WebkitMaskPosition: `${x - sizeMask / 2}px ${y}py`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill="#ec4e39" />
      </svg>
      {children && <>{children}</>}
    </motion.div>
  );
};

export default Circle;
