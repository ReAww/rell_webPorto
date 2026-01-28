import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import profile from '../assets/profile.png';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Efek Tilt tetap dipertahankan
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    setMousePos({ x: mouseX, y: mouseY });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-28 pb-12 lg:py-20 overflow-hidden relative">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10 relative z-10">

        {/* --- KONTEN TEKS --- */}
        <div className="w-full lg:flex-1 text-center lg:text-left order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#A6A6A6] font-mono mb-4 tracking-[0.3em] uppercase text-[10px]"
          >
            Welcome to my Portfolio!
          </motion.div>

          <div className="h-[140px] sm:h-[180px] md:h-[220px] lg:h-[240px] flex items-center justify-center lg:justify-start overflow-hidden">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#E5E5E5] leading-[1] tracking-tighter">
              <Typewriter
                options={{
                  strings: [
                    'Farell<br/><span class="text-[#A6A6A6]">Rhezky.</span>',
                    'Frontend<br/><span class="text-[#A6A6A6]">Developer.</span>',
                    'Creative<br/><span class="text-[#A6A6A6]">Coder.</span>'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 80,
                }}
              />
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 lg:mt-4 text-[#A6A6A6] max-w-sm text-sm md:text-base border-l-2 lg:border-l border-white/10 pl-6 font-light leading-relaxed mx-auto lg:mx-0 text-center lg:text-left"
          >
            Focused on minimalist aesthetics and high-performance React applications.
            <span className="block mt-4 text-[10px] tracking-widest uppercase text-white/20 font-bold">
              Founder RezCode Agency
            </span>
          </motion.p>
        </div>

        {/* --- 3D PHOTO CARD (TILT ACTIVE) --- */}
        <div className="relative flex items-center justify-center w-full lg:w-auto lg:flex-1 order-1 lg:order-2 [perspective:1500px]">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }}
            // RE-APPLY TILT: Pastikan style ini ada
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
            className="relative w-64 sm:w-72 md:w-80 h-[380px] sm:h-[420px] md:h-[480px] bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            {/* Dynamic Glow */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[2.5rem] z-0"
              style={{
                background: isHovered 
                  ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 70%)`
                  : 'none',
              }}
            />

            {/* Foto Profil */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.img
                src={profile}
                alt="Farell Rhezky Alvianto"
                animate={{
                  z: isHovered ? 80 : 0, // Efek pop-out tetap aktif
                  y: isHovered ? -30 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="w-[110%] md:w-[120%] h-auto object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              />
            </div>

            {/* Floating Label */}
            <div 
              style={{ transform: "translateZ(50px)" }} // Membuat label melayang lebih jauh
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="bg-[#0D0D0D] border border-white/10 px-5 py-2 rounded-full shadow-2xl">
                <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-white uppercase">
                  Farell / Ayereell / ReAww
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}