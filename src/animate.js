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

  try{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      })
    },{threshold: 0.12})

    els.forEach(el=>{
      // If element is already in the viewport, reveal it immediately as a fast-path
      const rect = el.getBoundingClientRect()
      if(rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0){
        el.classList.add('in-view')
      } else {
        io.observe(el)
      }
    })
  }catch(err){
    // If IntersectionObserver fails for any reason, reveal everything so UI isn't hidden
    els.forEach(el => el.classList.add('in-view'))
    console.warn('initAnimations fallback: revealing animated elements due to error', err)
  }
}
