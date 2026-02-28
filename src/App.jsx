import React, { useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// === EAGER (above the fold / critical) ===
import Header from './components/Header'
import Hero from './components/Hero'
import WelcomeScreen from './components/WelcomeScreen'
import InteractiveBackground from './components/InteractiveBackground'

// === LAZY (below the fold — loaded on demand) ===
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Certificates = lazy(() => import('./components/Certificates'))
const CodingStats = lazy(() => import('./components/CodingStats'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const Footer = lazy(() => import('./components/Footer'))

// Minimal loading skeleton shown while lazy chunks are fetched
function SectionSkeleton() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border border-white/10 border-t-white/40 rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-soft-ivory overflow-x-hidden selection:bg-white selection:text-black">

      <InteractiveBackground />


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
            className="flex flex-col min-h-screen relative z-10 bg-transparent"
          >
            <Header />
            <main className="flex-1">
              <section id="home"><Hero /></section>
              <Suspense fallback={<SectionSkeleton />}>
                <section id="about"><About /></section>
                <section id="projects"><Projects /></section>
                <section id="experience"><Experience /></section>
                <section id="certificates"><Certificates /></section>
                <section id="coding-stats"><CodingStats /></section>
                <section id="contact"><ContactForm /></section>
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}