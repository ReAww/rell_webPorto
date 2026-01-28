import React from 'react'
import profile from '../assets/profile.png'

export default function Hero(){
  return (
    <section id="home" className="py-20 anim-fade-up" data-animate>
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-left lg:text-left">
          <div className="text-silver-mist font-semibold mb-3">Hi, I'm a Frontend Developer</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-soft-ivory">Designing modern, accessible web experiences</h1>
          <p className="mt-4 text-silver-mist max-w-xl">I build responsive React apps and polished UIs with attention to performance and accessibility. I enjoy turning ideas into delightful products.</p>
          <div className="mt-6 flex gap-3">
            <a className="inline-flex items-center gap-2 px-4 py-2 bg-shadow-grey text-soft-ivory rounded-lg font-semibold btn-animated" href="#projects">View projects →</a>
            <a className="inline-flex items-center gap-2 px-4 py-2 border border-muted-slate text-silver-mist rounded-lg btn-animated" href="#about">About me</a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="profile-wrapper" aria-hidden={false}>
            <img className="profile-img" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}
