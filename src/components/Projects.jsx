import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { FiGithub, FiArrowRight } from "react-icons/fi";
import { projects, categoryConfig } from "../data/projects";

const FILTERS = ["All", "IoT", "AI", "Web"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0D0D0D] border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-[#A6A6A6] font-mono tracking-[0.3em] uppercase text-xs mb-2">
            02. SELECTED WORKS
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            My Projects<span className="text-white/20">.</span>
          </h3>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-12 flex-wrap"
        >
          {FILTERS.map((filter) => {
            const cat = categoryConfig[filter];
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border transition-all duration-300 ${
                  isActive
                    ? filter === "All"
                      ? "bg-white text-black border-white"
                      : `${cat.bg} ${cat.color} ${cat.border}`
                    : "bg-transparent text-white/40 border-white/10 hover:text-white/70 hover:border-white/20"
                }`}
              >
                {filter === "All" ? "All Projects" : cat.label}
                {isActive && filter !== "All" && (
                  <span className="ml-1.5 text-[8px] opacity-60">
                    ({projects.filter((p) => p.category === filter).length})
                  </span>
                )}
                {isActive && filter === "All" && (
                  <span className="ml-1.5 text-[8px] opacity-60">
                    ({projects.length})
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filtered.map((p, index) => {
              const cat = categoryConfig[p.category];
              return (
                <Tilt
                  key={p.id}
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  perspective={1000}
                  transitionSpeed={1200}
                  scale={1.01}
                  gyroscope={true}
                  className="parallax-effect"
                >
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative p-8 h-full rounded-[2rem] bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between"
                  >
                    {/* Specular overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Background glow icon */}
                    <div className="absolute -right-6 -top-6 text-7xl text-white/[0.02] group-hover:text-white/[0.06] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                      {p.icon}
                    </div>

                    {/* Content */}
                    <div>
                      {/* Badges */}
                      <div className="flex items-center gap-2 mb-5 flex-wrap">
                        {/* Category badge */}
                        {cat && (
                          <span className={`text-[8px] font-mono font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${cat.bg} ${cat.color} ${cat.border}`}>
                            {cat.label}
                          </span>
                        )}
                        {/* Status badge */}
                        {p.status && (
                          <span className={`text-[8px] font-mono font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${
                            p.status === "Live"
                              ? "bg-green-500/10 text-green-400 border-green-500/20"
                              : p.status === "In Development"
                              ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                              : "bg-white/5 text-white/30 border-white/10"
                          }`}>
                            ● {p.status}
                          </span>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {p.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono uppercase tracking-widest text-white/40 border border-white/5 bg-white/[0.01] px-2 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {p.tags.length > 4 && (
                          <span className="text-[9px] font-mono text-white/20 px-2 py-1">
                            +{p.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl text-white/60 group-hover:text-white transition-colors">
                          {p.icon}
                        </span>
                        <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                          {p.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-[#A6A6A6] text-sm leading-relaxed mb-8 font-light">
                        {p.desc}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-4 pt-5 border-t border-white/5 mt-auto">
                      {/* VIEW PROJECT → full page */}
                      <Link
                        to={`/projects/${p.id}`}
                        className="group/link flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white transition-colors"
                      >
                        VIEW PROJECT
                        <FiArrowRight
                          size={13}
                          className="group-hover/link:translate-x-1 transition-transform duration-200"
                        />
                      </Link>

                      {/* GitHub — external */}
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto p-2 rounded-xl bg-white/5 text-white/40 hover:bg-white/10 hover:text-white hover:scale-105 transition-all"
                      >
                        <FiGithub size={18} />
                      </a>
                    </div>

                    {/* Top line deco */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  </motion.article>
                </Tilt>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}