import React from 'react'

const cases = [
  {
    id: 'rezcode-dashboard',
    title: 'RezCode Dashboard',
    summary: 'Design + implementation of RezCode internal dashboard for analytics and user management.',
    highlights: ['Realtime stats', 'Role-based access', 'Exportable reports'],
    link: '#'
  },
  {
    id: 'portfolio-redesign',
    title: 'Portfolio Redesign',
    summary: 'A focused redesign emphasizing performance, accessibility, and clarity.',
    highlights: ['Performance budget', 'Accessible color system', 'Responsive components'],
    link: '#'
  }
]

export default function CaseStudies(){
  return (
    <section id="case-studies" className="py-12 anim-fade-up" data-animate>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-silver-mist text-lg font-semibold mb-6">Case Studies</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {cases.map(c=> (
            <article key={c.id} className="bg-shadow-grey p-6 rounded-xl border border-muted-slate">
              <h3 className="text-soft-ivory font-semibold text-xl">{c.title}</h3>
              <p className="text-silver-mist mt-2">{c.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {c.highlights.map(h=> <li key={h} className="text-xs bg-deep-charcoal text-silver-mist px-2 py-1 rounded">{h}</li>)}
              </ul>
              <div className="mt-4">
                <a className="inline-block px-4 py-2 bg-soft-ivory text-deep-charcoal rounded-md font-medium" href={c.link}>Read case study</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
