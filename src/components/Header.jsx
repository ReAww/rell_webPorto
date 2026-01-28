import { useState, useEffect, useRef } from 'react' // Tambahkan useEffect & useRef
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiDownload } from 'react-icons/fi'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  
  // Ref untuk mendeteksi klik pada menu
  const menuRef = useRef(null)

  // LOGIKA: Click Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Jika menu terbuka dan yang diklik bukan bagian dari menuRef
      if (open && menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    // Jangan sembunyikan header jika menu mobile sedang terbuka
    if (latest > previous && latest > 150 && !open) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-[100] px-6 py-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-2xl shadow-2xl pointer-events-auto relative">
        
        {/* LOGO */}
        <div className="flex flex-col">
          <span className="text-white font-bold tracking-tighter text-sm leading-none uppercase">
            Farell Rhezky
          </span>
          <span className="text-[8px] font-mono text-white/30 tracking-[0.2em] uppercase mt-1 italic">
            Founder RezCode
          </span>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all relative group cursor-none"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          <a href="https://github.com/ReAww" target="_blank" className="p-2 text-white/40 hover:text-white transition-colors cursor-none">
            <FiGithub size={18} />
          </a>
          
          <motion.a 
            href="/resume.pdf"
            target="_blank"
            initial="initial"
            whileHover="hover"
            className="relative hidden sm:flex items-center gap-3 px-6 py-2.5 bg-transparent border border-white/20 rounded-full overflow-hidden cursor-none group"
          >
            <motion.div 
              variants={{ initial: { x: "-101%" }, hover: { x: 0 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-white"
            />
            <div className="relative z-10 flex items-center gap-2">
              <motion.span variants={{ initial: { color: "#FFFFFF" }, hover: { color: "#000000" } }} className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Resume & CV
              </motion.span>
              <motion.div variants={{ initial: { color: "#FFFFFF", rotate: 0 }, hover: { color: "#000000", rotate: 45 } }}>
                <FiDownload size={14} />
              </motion.div>
            </div>
          </motion.a>

          {/* MOBILE TRIGGER (TOGGLE) */}
          <button 
            onClick={() => setOpen(!open)} // Sekarang berfungsi sebagai TOGGLE (buka/tutup)
            className="md:hidden p-2 text-white/60 cursor-none relative z-[130]"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU & OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY: Klik di sini juga menutup menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden pointer-events-auto"
            />

            {/* MENU PANEL */}
            <motion.div 
              ref={menuRef} // Dipasang di sini untuk deteksi Click Outside
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed inset-x-6 top-24 z-[120] bg-[#0D0D0D]/95 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl flex flex-col gap-6 shadow-3xl pointer-events-auto md:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-bold text-white uppercase tracking-tighter"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="h-[1px] bg-white/10 w-full" />

              <div className="flex items-center gap-6">
                 <a href="https://github.com/ReAww" target="_blank" className="text-white/50 hover:text-white transition-colors">
                    <FiGithub size={24} />
                 </a>
                 <a href="/resume.pdf" target="_blank" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                    <FiDownload /> Resume
                 </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}