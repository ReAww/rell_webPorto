import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";

const sample = [
  { title: 'RezCode Official', desc: 'Startup landing page with focus on minimalist tech solutions.', tags: ['React', 'Tailwind', 'Framer'], demo: '#', repo: '#' },
  { title: 'AI Interface', desc: 'Experimenting with neural network visualizations and web tools.', tags: ['JS', 'AI', 'API'], demo: '#', repo: '#' },
  { title: 'System OS', desc: 'A personal dashboard for managing server status and system logs.', tags: ['React', 'Node.js'], demo: '#', repo: '#' }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#0D0D0D]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[#A6A6A6] font-mono tracking-[0.3em] uppercase text-xs mb-2">02. Repositories</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Lastest Project<span className="text-white/20">.</span></h3>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sample.map((p, index) => (
            <Tilt
              key={p.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
              gyroscope={true}
              className="parallax-effect"
            >
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 h-full rounded-[2.5rem] bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden shadow-2xl"
              >
                {/* Specular Highlight (Cahaya Bergerak) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Background Icon */}
                <div className="absolute -right-4 -top-4 text-8xl text-white/[0.02] group-hover:text-white/[0.07] group-hover:-rotate-12 transition-all duration-700">
                  <FiLayers />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex gap-2 mb-6">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {p.title}
                  </h4>
                  <p className="text-[#A6A6A6] text-sm leading-relaxed mb-10 font-light">
                    {p.desc}
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <a href={p.demo} className="flex items-center gap-2 text-xs font-bold text-white group/link">
                      VIEW PROJECT <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a href={p.repo} className="ml-auto p-2 rounded-xl bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all">
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>

                {/* Decorative Line (Blueprint Style) */}
                <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.article>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
}