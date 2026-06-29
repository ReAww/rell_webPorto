import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import InteractiveBackground from '../components/InteractiveBackground'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-soft-ivory overflow-x-hidden selection:bg-white selection:text-black">
      <InteractiveBackground />
      <div className="flex flex-col min-h-screen relative z-10 bg-transparent">
        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}
