import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-silver-mist text-lg font-semibold mb-4">About</h2>
        <div className="bg-shadow-grey p-6 rounded-xl text-soft-ivory max-w-3xl">
          <p>I’m a frontend developer focused on building accessible, performant web experiences using React, Vite, and modern CSS. I care about clean interfaces, good UX, and shipping quality code.</p>
          <p className="mt-3 text-silver-mist">Key skills: <span className="font-semibold">React</span>, <span className="font-semibold">JavaScript</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">Responsive Design</span>, <span className="font-semibold">Accessibility</span></p>
        </div>
      </div>
    </section>
  )
}
