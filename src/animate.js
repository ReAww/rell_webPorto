// Small IntersectionObserver to add 'in-view' class to elements with `data-animate`
const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function initAnimations(){
  if(prefersReduced) return
  const els = document.querySelectorAll('[data-animate]')
  if(!els.length) return
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
