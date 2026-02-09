"use client";

import { useEffect, useState } from "react";

const GLOW_SIZE = 238; // width & height

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${position.x - GLOW_SIZE / 2}px, ${
          position.y - GLOW_SIZE / 2
        }px, 0)`,
        willChange: "transform",
      }}
    >
      <div
        className="rounded-full blur-[100px] bg-blue-600/15"
        style={{
          width: `${GLOW_SIZE}px`,
          height: `${GLOW_SIZE}px`,
        }}
      />
    </div>
  );
};

export default MouseGlow;
