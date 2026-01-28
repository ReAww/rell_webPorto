
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-deep-charcoal text-soft-ivory overflow-y-hidden overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <CaseStudies />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
  