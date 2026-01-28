import React from 'react'

const sample = [
  {title:'Portfolio Site',desc:'Personal portfolio built with React & Vite.',tags:['React','Vite','CSS'], demo:'#', repo:'#'},
  {title:'Task Manager',desc:'Small productivity app with local persistence.',tags:['JS','LocalStorage'], demo:'#', repo:'#'},
  {title:'Design System',desc:'Reusable components & tokens for consistent UI.',tags:['Components','Design'], demo:'#', repo:'#'}
]

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-silver-mist text-lg font-semibold mb-6">Selected Projects</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sample.map((p)=> (
            <article key={p.title} className="bg-shadow-grey p-5 rounded-xl border border-muted-slate">
              <h3 className="text-soft-ivory font-semibold text-lg">{p.title}</h3>
              <p className="text-silver-mist mt-2">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tags.map(t=> <span key={t} className="text-xs bg-deep-charcoal text-silver-mist px-2 py-1 rounded">{t}</span>)}</div>
              <div className="mt-4 flex items-center gap-3">
                {p.demo && <a className="px-3 py-1 bg-shadow-grey text-soft-ivory rounded text-sm" href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
                {p.repo && <a className="px-3 py-1 border border-muted-slate text-silver-mist rounded text-sm" href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
