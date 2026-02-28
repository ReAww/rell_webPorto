import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiX, FiExternalLink, FiCalendar } from "react-icons/fi";

const certificates = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    issuer: "Dicoding Indonesia",
    date: "2024",
    category: "Frontend",
    image: "/certificates/cert_webdev.png",
  },
  {
    id: 2,
    title: "React.js Front-End Development",
    issuer: "RezCode x Coursera",
    date: "2024",
    category: "Framework",
    image: "/certificates/cert_react.png",
  },
  {
    id: 3,
    title: "National Coding Competition",
    issuer: "Gunadarma University",
    date: "2024",
    category: "Achievement",
    image: "/certificates/cert_coding.png",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  // Close modal on Escape key
  const handleKey = useCallback((e) => {
    if (e.key === "Escape") setSelected(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="certificates" className="py-16 md:py-24 bg-[#0D0D0D]">
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
          className="mb-16"
        >
          <h2 className="text-[#A6A6A6] font-mono tracking-[0.3em] uppercase text-xs mb-2">
            05. Credentials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Certificates<span className="text-white/20">.</span>
          </h3>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(cert)}
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/25 bg-[#141414] cursor-pointer transition-all duration-500 shadow-2xl"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-48 bg-black/40">
              <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute top-4 right-4 text-[9px] font-mono uppercase tracking-widest text-white/60 border border-white/20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  {cert.category}
                </span>

                {/* Click hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                    <FiExternalLink size={11} /> Preview
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-white/5 text-white/40 group-hover:text-white transition-colors mt-0.5">
                    <FiAward size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight tracking-tight group-hover:text-white transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[#A6A6A6] text-xs font-mono mt-1 italic">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pl-11 text-white/30 text-[10px] font-mono tracking-widest">
                  <FiCalendar size={10} />
                  {cert.date}
                </div>
              </div>

              {/* Decorative line at top */}
              <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===================== LIGHTBOX MODAL ===================== */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
            />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-10 pointer-events-none"
            >
              <div className="pointer-events-auto w-full max-w-4xl bg-[#111111] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]">

                {/* Modal Header */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-white/5">
                  <div>
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-1">
                      Certificate Preview
                    </p>
                    <h3 className="text-white font-bold tracking-tight text-lg">
                      {selected.title}
                    </h3>
                    <p className="text-[#A6A6A6] text-xs font-mono italic mt-0.5">
                      {selected.issuer} — {selected.date}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelected(null)}
                    className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10"
                  >
                    <FiX size={20} />
                  </motion.button>
                </div>

                {/* Certificate Image */}
                <div className="p-6 md:p-8 bg-black/20">
                  <div className="rounded-2xl overflow-hidden border border-white/5 relative">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full h-auto object-contain max-h-[60vh]"
                    />
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-8 py-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    {selected.category}
                  </span>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
                    Press ESC to close
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
