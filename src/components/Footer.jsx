import { motion } from 'framer-motion'
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiArrowUpRight, FiExternalLink } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkTree', href: 'https://linktr.ee/Ayerell', icon: <FiExternalLink /> },
    { name: 'Github', href: 'https://github.com/ReAww', icon: <FiGithub /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/farell-rhezky?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: <FiLinkedin /> },
    { name: 'Personal Instagram', href: 'https://www.instagram.com/ayereell', icon: <FiInstagram /> },
    { name: 'Rezcode Agency Instagram', href: 'https://www.instagram.com/rezcode.agency', icon: <FiInstagram /> },
  ]

  return (
    <footer className="relative bg-[#0D0D0D] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      {/* Background Glow Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_50px_2px_rgba(255,255,255,0.05)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* KIRI: Big Statement */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase italic">
              Let's Code!
            </h2>
            <a 
              href="mailto:rhezkyfarell@gmail.com" 
              className="group flex items-center gap-3 text-white/40 hover:text-white transition-all duration-500 cursor-none"
            >
              <FiMail className="text-xl" />
              <span className="text-sm font-mono tracking-widest uppercase">rhezkyfarell@gmail.com</span>
              <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* KANAN: Links Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Socials</span>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank"
                    className="text-xs text-white/50 hover:text-white flex items-center gap-2 transition-colors cursor-none w-fit"
                  >
                    {link.icon} {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Resource</span>
              <div className="flex flex-col gap-3">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="text-xs text-white/50 hover:text-white flex items-center gap-2 transition-colors cursor-none w-fit"
                >
                  View Resume
                </a>
                <a 
                  href="/CV.pdf" 
                  target="_blank"
                  className="text-xs text-white/50 hover:text-white flex items-center gap-2 transition-colors cursor-none w-fit"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">
              Farell Rhezky Alvianto
            </span>
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">
              Founder RezCode — Est 2024
            </span>
          </div>

          <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] text-center md:text-right">
            © {currentYear} All Rights Reserved. <br className="md:hidden" />
            Built with <span className="text-white/40">React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  )
}