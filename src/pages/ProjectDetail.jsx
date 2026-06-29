import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiFileText,
  FiUser,
  FiCalendar,
  FiZap,
  FiLayers,
  FiImage,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { projects, categoryConfig } from "../data/projects";
import InteractiveBackground from "../components/InteractiveBackground";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project
      ? `${project.title} — Farell Rhezky`
      : "Project Not Found — Farell Rhezky";
    return () => {
      document.title = "Farell Rhezky — Portfolio";
    };
  }, [project]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center text-white gap-6">
        <p className="text-2xl font-bold">Project not found.</p>
        <Link to="/" className="text-white/50 hover:text-white text-sm font-mono underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const cat = categoryConfig[project.category];
  const statusColors = {
    Live: "bg-green-500/10 text-green-400 border-green-500/20",
    "In Development": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Archived: "bg-white/5 text-white/40 border-white/10",
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-white selection:text-black overflow-x-hidden">
      <InteractiveBackground />

      {/* ── MINIMAL TOPBAR ── */}
      <header className="fixed top-0 w-full z-[100] px-6 py-5 pointer-events-none">
        <div className="max-w-5xl mx-auto flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/5 px-5 py-3 rounded-2xl shadow-2xl pointer-events-auto">
          <Link to="/" className="flex flex-col">
            <span className="text-white font-bold tracking-tighter text-sm leading-none uppercase">
              Farell Rhezky
            </span>
            <span className="text-[8px] font-mono text-white/30 tracking-[0.2em] uppercase mt-1">
              Portfolio
            </span>
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" size={14} />
            Back
          </button>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        {/* Background category glow */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10 pointer-events-none ${
            project.category === "IoT"
              ? "bg-emerald-400"
              : project.category === "AI"
              ? "bg-purple-400"
              : "bg-blue-400"
          }`}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8 text-[10px] font-mono text-white/30 uppercase tracking-widest"
          >
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#projects" className="hover:text-white/60 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white/60">{project.title}</span>
          </motion.div>

          {/* Badges row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="flex items-center gap-3 flex-wrap mb-5"
          >
            {cat && (
              <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${cat.bg} ${cat.color} ${cat.border}`}>
                {cat.label}
              </span>
            )}
            {project.status && (
              <span className={`text-[9px] font-mono font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${statusColors[project.status] ?? statusColors["Archived"]}`}>
                ● {project.status}
              </span>
            )}
            {project.year && (
              <span className="flex items-center gap-1 text-[9px] font-mono text-white/30 tracking-widest uppercase">
                <FiCalendar size={9} />{project.year}
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-4xl text-white/40">{project.icon}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              {project.title}
            </h1>
          </motion.div>

          {/* Role */}
          {project.role && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 text-[11px] font-mono text-white/40 uppercase tracking-widest mb-6"
            >
              <FiUser size={11} /> {project.role}
            </motion.p>
          )}

          {/* Short desc */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#A6A6A6] text-base md:text-lg leading-relaxed max-w-2xl font-light"
          >
            {project.desc}
          </motion.p>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-16">

        {/* Tags */}
        {project.tags?.length > 0 && (
          <Section icon={<FiLayers />} label="Tech Stack">
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono uppercase tracking-widest text-white/60 border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:text-white/80 transition-colors px-3 py-1.5 rounded-lg cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Photo Gallery */}
        {project.images?.length > 0 && (
          <Section icon={<FiImage />} label="Documentation Photos">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {project.images.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative aspect-video rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors group bg-white/[0.02]"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FiImage size={20} className="text-white" />
                  </div>
                  <div className="absolute top-2 right-2 text-[8px] font-mono bg-black/60 text-white/60 px-1.5 py-0.5 rounded">
                    {i + 1}/{project.images.length}
                  </div>
                </motion.button>
              ))}
            </div>
            <p className="mt-2 text-[9px] font-mono text-white/20 uppercase tracking-widest">
              Click to enlarge · ← → arrow keys to navigate
            </p>
          </Section>
        )}

        {/* About */}
        {project.fullDesc && (
          <Section icon={<FiFileText />} label="About This Project">
            <p className="mt-4 text-[#A6A6A6] text-sm md:text-base leading-[1.9] font-light whitespace-pre-line">
              {project.fullDesc}
            </p>
          </Section>
        )}

        {/* Key Features */}
        {project.features?.length > 0 && (
          <Section icon={<FiZap />} label="Key Features">
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#A6A6A6] font-light">
                  <FiCheckCircle size={15} className="mt-0.5 shrink-0 text-white/30" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Documentation */}
        {project.documentation && (
          <Section icon={<FiFileText />} label="Documentation & Notes">
            <div className="mt-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-[#A6A6A6] text-sm leading-[1.85] font-mono whitespace-pre-line">
              {project.documentation}
            </div>
          </Section>
        )}
      </main>

      {/* ── STICKY BOTTOM CTA ── */}
      <div className="sticky bottom-0 z-[90] bg-[#0D0D0D]/90 backdrop-blur-xl border-t border-white/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-4 flex-wrap">
          <Link
            to="/"
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors"
          >
            <FiArrowLeft size={12} /> All Projects
          </Link>

          <div className="flex items-center gap-3 ml-auto">
            {project.liveUrl && project.liveUrl !== "#" && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                initial="initial"
                whileHover="hover"
                className="relative flex items-center gap-2.5 px-6 py-2.5 border border-white/20 rounded-full overflow-hidden"
              >
                <motion.div
                  variants={{ initial: { x: "-101%" }, hover: { x: 0 } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-white"
                />
                <motion.span
                  variants={{ initial: { color: "#FFFFFF" }, hover: { color: "#000000" } }}
                  className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em]"
                >
                  Live Demo
                </motion.span>
                <motion.div
                  variants={{ initial: { color: "#FFFFFF" }, hover: { color: "#000000" } }}
                  className="relative z-10"
                >
                  <FiExternalLink size={12} />
                </motion.div>
              </motion.a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/5 hover:border-white/15 transition-all text-[10px] font-mono uppercase tracking-widest"
              >
                <FiGithub size={13} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && project.images?.length > 0 && (
        <div
          className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {project.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + project.images.length) % project.images.length); }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/5 text-white/60 hover:bg-white/15 hover:text-white transition-all"
            >
              <FiChevronLeft size={22} />
            </button>
          )}
          <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src={project.images[lightboxIndex]}
            alt="Documentation"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain border border-white/10"
          />
          {project.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % project.images.length); }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/5 text-white/60 hover:bg-white/15 hover:text-white transition-all"
            >
              <FiChevronRight size={22} />
            </button>
          )}
          <div className="absolute top-5 right-5 flex items-center gap-3">
            {project.images.length > 1 && (
              <span className="text-[10px] font-mono text-white/40">
                {lightboxIndex + 1} / {project.images.length}
              </span>
            )}
            <button onClick={() => setLightboxIndex(null)} className="p-2 rounded-xl bg-white/5 text-white/40 hover:bg-white/15 hover:text-white transition-all">
              <FiX size={18} />
            </button>
          </div>
          <p className="absolute bottom-5 text-[9px] font-mono text-white/20 uppercase tracking-widest">
            Click outside · ← → to navigate · Esc to close
          </p>
        </div>
      )}
    </div>
  );
}

function Section({ icon, label, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-white/30 text-sm">{icon}</span>
        <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-white/30">
          {label}
        </span>
        <div className="flex-1 h-[1px] bg-white/5 ml-2" />
      </div>
      {children}
    </motion.section>
  );
}
