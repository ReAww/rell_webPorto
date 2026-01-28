import React, { useState } from 'react' 
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import CodingStats from './components/CodingStats'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import WelcomeScreen from './components/WelcomeScreen'
import InteractiveBackground from './components/InteractiveBackground'

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    // PENTING: Ubah bg-[#0D0D0D] menjadi bg-transparent agar InteractiveBackground terlihat
    <div className="min-h-screen flex flex-col bg-transparent text-soft-ivory overflow-x-hidden selection:bg-white selection:text-black">
      
      <InteractiveBackground />
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen 
            key="welcome" 
            onComplete={() => setShowWelcome(false)} 
          />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            // Perbaikan typo: bg-transparent masuk ke dalam className
            className="flex flex-col min-h-screen relative z-10 bg-transparent"
          >
            <Header />
            <main className="flex-1">
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="experience"><Experience /></section>
              <section id="coding-stats"><CodingStats /></section>
              <section id="contact"><ContactForm /></section>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}