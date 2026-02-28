import React, { useEffect, useRef, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const isHoveredRef = useRef(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const cursorX = useSpring(0, { stiffness: 1000, damping: 45 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 45 });

  // Throttle with rAF — getComputedStyle is expensive on every mousemove
  const rafId = useRef(null);
  const lastEvent = useRef(null);

  const processMove = useCallback(() => {
    if (!lastEvent.current) return;
    const e = lastEvent.current;

    cursorX.set(e.clientX);
    cursorY.set(e.clientY);

    const target = e.target;
    const isPointer =
      target.closest('a') ||
      target.closest('button') ||
      window.getComputedStyle(target).cursor === 'pointer';

    const hovered = !!isPointer;
    if (hovered !== isHoveredRef.current) {
      isHoveredRef.current = hovered;
      setIsHovered(hovered);
    }

    rafId.current = null;
  }, [cursorX, cursorY]);

  useEffect(() => {
    const moveMouse = (e) => {
      lastEvent.current = e;
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(processMove);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [processMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] hidden md:block">
      {/* 1. Lingkaran Luar (The Ring) */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 border border-white rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          borderWidth: isHovered ? "4px" : "1px",
          opacity: isHovered ? 1 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* 2. Titik Bidik (The Focus Point) */}
      <motion.div
        className="absolute top-0 left-0 bg-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          width: isHovered ? "1px" : "3px",
          height: isHovered ? "20px" : "3px",
          borderRadius: isHovered ? "0%" : "50%",
          opacity: isHovered ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* 3. Garis Bidik Horizontal (Hanya Muncul saat Hover) */}
      <motion.div
        className="absolute top-0 left-0 bg-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        initial={{ width: 0, height: 0 }}
        animate={{
          width: isHovered ? "20px" : "0px",
          height: isHovered ? "1px" : "0px",
          opacity: isHovered ? 0.8 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
}