import React, { useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import profile from '../assets/profile.png';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiVite,
  SiNodedotjs,
  SiHtml5,
  SiCss3
} from "react-icons/si";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    setMousePos({ x: mouseX, y: mouseY });
  }, [x, y]);

  const skills = [
    { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
    { name: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E]" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:text-[#06B6D4]" },
    { name: "Vite", icon: <SiVite />, color: "hover:text-[#646CFF]" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-[#339933]" },
    { name: "PHP", icon: <SiPhp />, color: "hover:text-[#4F5B93]" },
    { name: "HTML5", icon: <SiHtml5 />, color: "hover:text-[#E34F26]" },
    { name: "CSS3", icon: <SiCss3 />, color: "hover:text-[#1572B6]" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-transparent pt-28 pb-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 relative z-10">

        {/* --- KONTEN BIOGRAFI & BIO --- */}
        <div className="w-full lg:flex-[1.2] text-left order-2 lg:order-1 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#A6A6A6] font-mono mb-3 tracking-[0.3em] uppercase text-[10px]"
          >
            HELLO, I AM
          </motion.div>

          <div className="h-[90px] sm:h-[110px] md:h-[130px] flex items-center overflow-hidden mb-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#E5E5E5] leading-[1] tracking-tighter">
              <Typewriter
                options={{
                  strings: [
                    'Farell Rhezky.',
                    'Web Developer.',
                    'Creative Coder.'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 85,
                }}
              />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4 text-sm md:text-base text-[#A6A6A6] font-light leading-relaxed border-l border-white/10 pl-6 mb-8"
          >
            <p>
              I’m <span className="text-white font-medium">Farell Rhezky Alvianto</span>, a Computer System student at Gunadarma University. I have a deep passion for technology, from hardware to software.
            </p>
            <p>
              Currently, my focus is on <span className="text-white font-bold">Internet of Things (IoT)</span>, <span className="text-white font-bold">Artificial Intelligence (AI)</span>, and crafting minimalist, high-performance <span className="text-white font-bold">Web experiences</span>. I love building integrated systems that connect the physical and digital worlds.
            </p>
          </motion.div>

          {/* SKILLS CHIPS */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8"
          >
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 mb-3 font-semibold">TECH STACK</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-white/60 transition-all duration-300 cursor-default ${skill.color} hover:bg-white/[0.08] hover:border-white/20`}
                >
                  <span className="text-sm">{skill.icon}</span>
                  <span className="text-xs font-mono">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SIGNATURE QUOTE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 inline-flex items-center gap-4 max-w-md"
          >
            <div className="h-2 w-2 rounded-full bg-white/40 animate-pulse" />
            <p className="text-xs md:text-sm text-[#E5E5E5] italic font-light leading-snug">
              "Give me Coffee and Money, then <span className="text-white/40">Your Web will be built.</span>"
            </p>
          </motion.div>
        </div>

        {/* --- 3D PHOTO CARD (TILT ACTIVE) --- */}
        <div className="relative flex items-center justify-center w-full lg:w-auto lg:flex-[0.8] order-1 lg:order-2 [perspective:1500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }}
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
            className="relative w-64 sm:w-72 md:w-80 h-[380px] sm:h-[420px] md:h-[480px] bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing group"
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

            {/* Specular Highlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[2.5rem] z-10" />

            {/* Profile Photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <motion.img
                src={profile}
                alt="Farell Rhezky Alvianto"
                loading="eager"
                fetchpriority="high"
                animate={{
                  z: isHovered ? 80 : 0,
                  y: isHovered ? -20 : 0,
                  scale: isHovered ? 1.08 : 1,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="w-[110%] md:w-[120%] h-auto object-cover drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              />
            </div>

            {/* Floating Badge */}
            <div 
              style={{ transform: "translateZ(60px)" }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-30"
            >
              <div className="bg-[#0D0D0D] border border-white/10 px-5 py-2.5 rounded-full shadow-2xl hover:border-white/30 transition-colors">
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