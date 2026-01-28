import React from 'react'

const items = [
  {name:'Alex Chen', role:'CTO, Acme', quote:"Working with Farell produced measurable improvements in our product's usability."},
  {name:'Siti Rahma', role:'PM, BetaCo', quote:"Clear communication and strong design sense — highly recommended."}
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-silver-mist text-lg font-semibold mb-6">Testimonials</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {items.map(i=> (
            <blockquote key={i.name} className="bg-shadow-grey p-6 rounded-xl border border-muted-slate text-left">
              <p className="text-soft-ivory">“{i.quote}”</p>
              <footer className="mt-3 text-silver-mist text-sm">— {i.name}, <span className="text-muted-slate">{i.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
