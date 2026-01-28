import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  // Spring yang sangat snappy untuk kesan teknologi tinggi
  const cursorX = useSpring(0, { stiffness: 1000, damping: 45 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 45 });

  useEffect(() => {
    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target;
      const isPointer = 
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovered(!!isPointer);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [cursorX, cursorY]);

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
          // MENGECIL SAAT HOVER (dari 1 ke 0.4)
          scale: isHovered ? 0.4 : 1,
          borderWidth: isHovered ? "4px" : "1px", // Menebal saat mengecil
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
          // Berubah dari titik bulat kecil menjadi garis bidik vertikal
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