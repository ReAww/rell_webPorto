import React from 'react'

export default function Footer(){
  return (
    <footer id="contact" className="mt-12 bg-deep-charcoal border-t border-muted-slate">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-silver-mist">
        <div>Get in touch — <a className="text-soft-ivory hover:text-silver-mist" href="mailto:rhezkyfarell@gmail.com">rhezkyfarell@gmail.com</a></div>
        <div className="mt-3">© {new Date().getFullYear()} RezCode. Built with React + Vite.</div>
      </div>
    </footer>
  )
}
