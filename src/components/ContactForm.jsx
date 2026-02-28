import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiArrowRight, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xqkywqzq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0D0D0D]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Kolom Kiri: Teks & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[#A6A6A6] font-mono tracking-[0.3em] uppercase text-xs mb-4 text-center md:text-left">
              06. Contact Me!
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center md:text-left tracking-tighter">
              Let's build the <br />
              <span className="text-[#A6A6A6] italic font-light whitespace-normal">Next System.</span>
            </h3>
            <p className="text-[#A6A6A6] leading-relaxed mb-8 text-center md:text-left max-w-sm">
              Have a project or just want to discuss the future of Your Web? I'm always open for meaningful collaborations.
            </p>

            <div className="space-y-4">
              <a href="mailto:rhezkyfarell@gmail.com" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
                  <FiMail />
                </div>
                <span className="font-mono text-sm tracking-widest">rhezkyfarell@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Kolom Kanan: Form Modern */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[80px] pointer-events-none" />

            {/* Success / Error Feedback */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                >
                  <FiCheckCircle className="shrink-0" />
                  <span className="text-xs font-mono uppercase tracking-widest">Message sent! I'll get back to you soon.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                >
                  <FiAlertCircle className="shrink-0" />
                  <span className="text-xs font-mono uppercase tracking-widest">Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Input Name */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10 placeholder:uppercase placeholder:text-xs placeholder:tracking-[0.2em]"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
              </div>

              {/* Input Email */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10 placeholder:uppercase placeholder:text-xs placeholder:tracking-[0.2em]"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
              </div>

              {/* Textarea Message */}
              <div className="relative group">
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10 placeholder:uppercase placeholder:text-xs placeholder:tracking-[0.2em] resize-none"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-xl flex items-center justify-center gap-3 hover:bg-[#E5E5E5] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <FiCheckCircle />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message <FiArrowRight className="text-lg" />
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}