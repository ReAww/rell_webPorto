import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen, FiActivity } from "react-icons/fi";

const history = [
  {
    type: 'work',
    id: 'rezcode-founder',
    title: 'Founder & Lead Developer',
    institution: 'RezCode Startup',
    period: '2024 — Present',
    desc: 'Leading the development of minimalist and high-performance web solutions. Scaling technical workflows and managing end-to-end digital product architecture.',
    highlights: ['Strategic Leadership', 'Full-stack Architecture', 'Startup Growth'],
  },
  {
    type: 'education',
    id: 'ug-student',
    title: 'Computer System Student',
    institution: 'Gunadarma University',
    period: '2022 — Present',
    desc: 'Deepening knowledge in hardware-software integration, digital logic, and computer architecture to build a solid technical foundation.',
    highlights: ['Microcontrollers', 'Network Logic', 'System Engineering'],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#0D0D0D]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4"
      >
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[#A6A6A6] font-mono tracking-[0.3em] uppercase text-xs mb-2">03. Trajectory</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Experience & Education<span className="text-white/20">.</span></h3>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/5 ml-4 md:ml-8 space-y-12">
          {history.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-[#0D0D0D] border-2 border-white/20 group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500 z-10" />
              
              {/* Label Type (Experience/Education) */}
              <div className="flex items-center gap-2 mb-2">
                {item.type === 'work' ? 
                  <FiBriefcase className="text-white/40 text-xs" /> : 
                  <FiBookOpen className="text-white/40 text-xs" />
                }
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">
                  {item.type}
                </span>
              </div>

              {/* Main Content Card */}
              <div className="bg-[#141414] p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">{item.title}</h4>
                    <p className="text-white/60 font-medium italic">{item.institution}</p>
                  </div>
                  <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 font-mono text-[10px] whitespace-nowrap self-start md:self-center">
                    {item.period}
                  </div>
                </div>

                <p className="text-[#A6A6A6] text-sm leading-relaxed mb-6 max-w-2xl font-light">
                  {item.desc}
                </p>

                {/* Tags/Highlights */}
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map(h => (
                    <span key={h} className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-md text-[10px] text-white/50 group-hover:border-white/20 group-hover:text-white transition-all">
                      <FiActivity className="text-[8px]" /> {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}