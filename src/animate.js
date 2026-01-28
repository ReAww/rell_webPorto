// Small IntersectionObserver to add 'in-view' class to elements with `data-animate`
export default function initAnimations(){
  // evaluate prefers-reduced-motion at runtime so users who opt-out still see content
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Auto-mark main layout containers to be animated if not already
  try{
    const autoSel = 'header, section, footer, aside, main'
    const autoNodes = document.querySelectorAll(autoSel)
    autoNodes.forEach((el, idx) => {
      if(!el.classList.contains('anim-fade-up')) el.classList.add('anim-fade-up')
      if(!el.hasAttribute('data-animate')) el.setAttribute('data-animate', '')
      // provide an index for stagger timing
      if(typeof el.dataset.animateIndex === 'undefined' || el.dataset.animateIndex === '') el.dataset.animateIndex = String(idx)
    })
  }catch(e){
    // ignore DOM exceptions during server-side renders or if querySelectorAll is unsupported
  }

  const els = document.querySelectorAll('[data-animate]')
  if(!els.length) return

  // If user prefers reduced motion, immediately reveal elements (don't animate)
  if(prefersReduced){
    // Reveal immediately with small stagger for readability
    els.forEach((el,i) => {
      el.style.animationDelay = `${(el.dataset.animateIndex ? Number(el.dataset.animateIndex) : i) * 100}ms`
      el.classList.add('in-view')
    })
    return
  }

  try{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const idx = e.target.dataset.animateIndex ? Number(e.target.dataset.animateIndex) : 0
          e.target.style.animationDelay = `${idx * 100}ms`
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      })
    },{threshold: 0.12})

    els.forEach((el,i)=>{
      // ensure an index exists
      if(typeof el.dataset.animateIndex === 'undefined' || el.dataset.animateIndex === '') el.dataset.animateIndex = String(i)
      // If element is already in the viewport, reveal it immediately as a fast-path
      const rect = el.getBoundingClientRect()
      if(rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0){
        el.style.animationDelay = `${(el.dataset.animateIndex ? Number(el.dataset.animateIndex) : i) * 100}ms`
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
