import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiTerminal, FiCode } from "react-icons/fi";

export default function CodingStats() {
  const githubUsername = "ReAww"; 
  const theme = "transparent";

  return (
    <section id="coding-stats" className="py-16 md:py-24 bg-[#0D0D0D]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        
        {/* Header - Berwibawa */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-[#A6A6A6] font-mono tracking-[0.3em] uppercase text-xs mb-2">04. Activity Log</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">How Often Do I Code?</h3>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-white/40 font-mono text-[10px] tracking-widest uppercase">
            <FiTerminal className="animate-pulse text-green-500" /> System Live Tracking
          </div>
        </motion.div>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Contribution Chart */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-8 rounded-3xl bg-[#141414] border border-white/5 flex flex-col items-center justify-center min-h-[300px] group relative overflow-hidden"
          >
            <div className="absolute top-4 left-6 flex items-center gap-2">
                <FiCode className="text-white/20" />
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Global Activity</span>
            </div>
            
            {/* GitHub Stats Card API */}
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&hide_border=true&bg_color=141414&title_color=ffffff&text_color=A6A6A6&icon_color=ffffff`}
              alt="GitHub Stats"
              className="w-full max-w-lg transition-all duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Languages Pie Chart / Most Used Languages */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-[#141414] border border-white/5 flex flex-col items-center justify-center group"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&hide_border=true&bg_color=141414&title_color=ffffff&text_color=A6A6A6&langs_count=5`}
              alt="Top Languages"
              className="w-full transition-all duration-500 group-hover:scale-110"
            />
          </motion.div>

          {/* Call to Action GitHub */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 p-8 rounded-3xl bg-gradient-to-r from-[#141414] to-[#0D0D0D] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-white/5 text-white">
                <FiGithub size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">Follow my open-source journey</h4>
                <p className="text-[#A6A6A6] text-xs">Seeing every commit as a step towards mastering the tech era.</p>
              </div>
            </div>
            <a 
              href={`https://github.com/${githubUsername}`} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/80 transition-all flex items-center gap-2"
            >
              Visit Profile <FiTerminal />
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}