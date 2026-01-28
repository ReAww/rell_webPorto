import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiVite,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "hover:text-[#F7DF1E]",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "hover:text-[#06B6D4]",
    },
    { name: "PHP", icon: <SiPhp />, color: "hover:text-[#4F5B93]" },
    { name: "Vite", icon: <SiVite />, color: "hover:text-[#646CFF]" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-[#339933]" },
    { name: "HTML5", icon: <SiHtml5 />, color: "hover:text-[#E34F26]" },
    { name: "CSS3", icon: <SiCss3 />, color: "hover:text-[#1572B6]" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[#A6A6A6] font-mono tracking-[0.3em] uppercase text-xs mb-2 text-center md:text-left">
            01. Biography
          </h2>
          <h3 className="text-4xl font-bold text-white tracking-tighter text-center md:text-left">
            Who is Farell<span className="text-white/20">?</span>
          </h3>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* CARD 1: THE STORY */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-[#141414] border border-white/5 flex flex-col justify-center relative overflow-hidden group"
          >
            <h4 className="text-white/20 font-mono text-[10px] uppercase tracking-widest mb-6 italic">
              About Me
            </h4>
            <p className="text-[#E5E5E5] leading-relaxed text-base md:text-lg z-10">
              I’m{" "}
              <span className="text-white font-semibold">
                Farell Rhezky Alvianto
              </span>
              —a Computer System student at Gunadarma University. What started
              as a childhood of{" "}
              <span className="text-white italic">building robots</span> has
              evolved into a Tech Anthusiast. and Currently Becoming a <span className="text-white font-bold tracking-tight">
                Web Developer. </span>
              <br />
              <br />
              Currently, I am channeling my technical ambition into{" "}
              <span className="text-white underline decoration-white/20">
                Web Development
              </span>{" "}
              while simultaneously scaling my own New Startup Company,{" "}
              <span className="text-white font-bold tracking-tight">
                RezCode
              </span>
              . Currently still engaged in website development services.
            </p>
            {/* Dekorasi Background */}
            <div className="absolute -right-10 -bottom-10 text-[12rem] font-black text-white/[0.02] pointer-events-none group-hover:text-white/[0.04] transition-all">
              RE
            </div>
          </motion.div>

          {/* CARD 2: SKILLS WITH LABELS */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-[#141414] border border-white/5 flex flex-col justify-between"
          >
            <h4 className="text-white/20 font-mono text-[10px] uppercase tracking-widest mb-8 italic text-center">
              My Currently Skills on Web Development
            </h4>
            <div className="grid grid-cols-4 gap-y-6 gap-x-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`flex flex-col items-center justify-center gap-2 group cursor-pointer transition-all ${skill.color} text-white/20`}
                >
                  <div className="text-2xl transition-colors">{skill.icon}</div>
                  <span className="text-[7px] font-mono uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest italic">
                Always Learning More
              </span>
            </div>
          </motion.div>

          {/* CARD 3: REZCODE HIGHLIGHT (New Personal Business Info) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-center relative group"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-1 bg-green-500 rounded-full animate-ping" />
              <h4 className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
                Active Project
              </h4>
            </div>
            <p className="text-sm text-[#A6A6A6] leading-relaxed">
              Founder of <span className="text-white font-bold">RezCode</span>.
              Actively developing and growing my startup to provide cutting-edge
              coding solutions.
            </p>
          </motion.div>

          {/* CARD 4: QUOTE MOTIVASI */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-r from-[#141414] to-[#0D0D0D] border border-white/5 flex items-center justify-between"
          >
            <p className="text-xl md:text-2xl text-white font-medium italic leading-tight">
              "Give me Coffee and Money, then{" "}
              <span className="opacity-40">Your Web will be built.</span>"
            </p>
            <div className="hidden md:block h-3 w-3 rounded-full bg-white/20 animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
