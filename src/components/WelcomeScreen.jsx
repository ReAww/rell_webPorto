import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function WelcomeScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center z-[9999] cursor-none overflow-hidden px-6"
    >
      {/* Scanning Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] pointer-events-none" />

      <div className="relative w-full max-w-lg mx-auto">
        {/* Glow behind text */}
        <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Top Divider */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mb-6"
          />

          {/* Judul Utama - Responsive Flex */}
          <h1 className="text-white font-light text-base sm:text-lg md:text-2xl tracking-[0.4em] sm:tracking-[0.6em] uppercase flex flex-wrap items-center justify-center gap-y-2 overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "circOut", delay: 0.3 }}
              className="whitespace-nowrap"
            >
              Farell Rhezky
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 0.2, delay: 0.8 }}
              className="mx-3 font-black italic text-white/20 hidden sm:inline"
            >
              //
            </motion.span>

            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "circOut", delay: 0.5 }}
              className="whitespace-nowrap"
            >
              Portfolio
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-[8px] sm:text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase leading-relaxed"
          >
            Digital Experience Crafted by RezCode Agency
          </motion.p>

          {/* Bottom Divider */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6"
          />
        </motion.div>
      </div>

      {/* Footer Status */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.6 }}
          className="flex items-center gap-3"
        >
          <span className="text-[7px] font-mono text-white uppercase tracking-[0.3em]">System Initialized</span>
          <div className="w-8 h-[1px] bg-white/20" />
          <span className="text-[7px] font-mono text-white uppercase tracking-[0.3em]">v2.0.26</span>
        </motion.div>
      </div>
    </motion.div>
  );
}