import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";

const projects = [
  {
    title: 'RezCode Agency',
    desc: 'Official landing page for my startup — built for high-performance web development services with a minimalist tech aesthetic.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer'],
    demo: 'https://rezcode.agency',
    repo: 'https://github.com/ReAww',
  },
  {
    title: 'Link Tracker Dashboard',
    desc: 'Full-stack link analytics platform with visitor maps, real-time tracking, and geo-location data visualization.',
    tags: ['Flask', 'Python', 'Leaflet.js', 'API'],
    demo: '#',
    repo: 'https://github.com/ReAww',
  },
  {
    title: 'Web Portfolio v2',
    desc: 'This very portfolio — a high-performance React app featuring 3D tilt effects, Framer Motion animations, and a bespoke dark aesthetic.',
    tags: ['React', 'Tailwind', 'Framer', 'Vite'],
    demo: '#',
    repo: 'https://github.com/ReAww/rell_webPorto',
  },
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
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Latest Projects<span className="text-white/20">.</span></h3>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, index) => (
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
                {/* Specular Highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Background Icon */}
                <div className="absolute -right-4 -top-4 text-8xl text-white/[0.02] group-hover:text-white/[0.07] group-hover:-rotate-12 transition-all duration-700">
                  <FiLayers />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
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
                    <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-white group/link">
                      VIEW PROJECT <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a href={p.repo} target="_blank" rel="noreferrer" className="ml-auto p-2 rounded-xl bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all">
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.article>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
}