// Small IntersectionObserver to add 'in-view' class to elements with `data-animate`
export default function initAnimations(){
  // evaluate prefers-reduced-motion at runtime so users who opt-out still see content
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const els = document.querySelectorAll('[data-animate]')
  if(!els.length) return

  // If user prefers reduced motion, immediately reveal elements (don't animate)
  if(prefersReduced){
    els.forEach(el => el.classList.add('in-view'))
    return
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view')
        // optionally unobserve to avoid re-trigger
        io.unobserve(e.target)
      }
    })
  },{threshold: 0.12})

  els.forEach(el=> io.observe(el))
}
