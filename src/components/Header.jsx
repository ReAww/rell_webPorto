import React, {useState, useEffect, useRef} from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(()=>{
    function onKey(e){ if(e.key === 'Escape') setOpen(false) }
    if(open) document.addEventListener('keydown', onKey)
    return ()=> document.removeEventListener('keydown', onKey)
  },[open])

  useEffect(()=>{
    if(open && panelRef.current) panelRef.current.focus()
  },[open])

  // Focus trap: keep Tab inside the panel while it's open
  useEffect(()=>{
    if(!open || !panelRef.current) return
    const panel = panelRef.current
    const focusable = panel.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])')
    if(focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    function handleKey(e){
      if(e.key === 'Tab'){
        if(e.shiftKey && document.activeElement === first){
          e.preventDefault(); last.focus()
        } else if(!e.shiftKey && document.activeElement === last){
          e.preventDefault(); first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    return ()=> document.removeEventListener('keydown', handleKey)
  },[open])

  return (
    <header className="bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 py-4">
        <div className="flex items-baseline gap-3">
          <div className="text-soft-ivory font-semibold">Farell Rhezky Alvianto</div>
          <div className="text-silver-mist font-medium">— Portfolio</div>
          <div className="rez-badge">RezCode</div>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <a className="text-silver-mist hover:text-soft-ivory font-medium" href="#home">Home</a>
          <a className="text-silver-mist hover:text-soft-ivory font-medium" href="#projects">Projects</a>
          <a className="text-silver-mist hover:text-soft-ivory font-medium" href="#case-studies">Case Studies</a>
          <a className="text-silver-mist hover:text-soft-ivory font-medium" href="#about">About</a>
          <a className="text-silver-mist hover:text-soft-ivory font-medium" href="#contact">Contact</a>
          <a className="ml-3 inline-flex items-center px-3 py-1 bg-shadow-grey text-soft-ivory rounded-md font-medium" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </nav>

        <div className="md:hidden">
          <button aria-controls="mobile-menu" aria-expanded={open} aria-label="Toggle menu" onClick={()=>setOpen(v=>!v)} className="text-silver-mist text-2xl">{open ? '✕' : '☰'}</button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`fixed inset-0 z-40 transition-opacity overflow-hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!open}>
        <div className="absolute inset-0 bg-black/40" onClick={()=>setOpen(false)} />
        <aside id="mobile-menu" ref={panelRef} tabIndex={-1} className={`fixed right-0 top-0 h-full w-64 bg-deep-charcoal text-soft-ivory p-6 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-3">
              <div className="text-soft-ivory font-semibold">Farell Rhezky Alvianto</div>
              <div className="text-silver-mist font-medium">— Portfolio</div>
              <div className="ml-2 px-2 py-0.5 text-xs rounded bg-deep-charcoal text-silver-mist border border-muted-slate">RezCode</div>
            </div>
            <button aria-label="Close menu" onClick={()=>setOpen(false)} className="text-silver-mist text-xl">✕</button>
          </div>
          <nav className="flex flex-col gap-4">
            <a onClick={()=>setOpen(false)} className="text-soft-ivory hover:text-silver-mist font-medium" href="#home">Home</a>
            <a onClick={()=>setOpen(false)} className="text-soft-ivory hover:text-silver-mist font-medium" href="#projects">Projects</a>
            <a onClick={()=>setOpen(false)} className="text-soft-ivory hover:text-silver-mist font-medium" href="#about">About</a>
            <a onClick={()=>setOpen(false)} className="text-soft-ivory hover:text-silver-mist font-medium" href="#contact">Contact</a>
            <a onClick={()=>setOpen(false)} className="inline-flex items-center mt-3 px-3 py-1 bg-shadow-grey text-soft-ivory rounded-md font-medium" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </nav>
        </aside>
      </div>
    </header>
  )
}
