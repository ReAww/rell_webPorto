import React from 'react'

export default function ContactForm(){
  return (
    <section id="contact" className="py-12 anim-fade-up" data-animate>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-silver-mist text-lg font-semibold mb-4">Get in touch</h2>
        <p className="text-silver-mist mb-4">Have a project or collaboration? Send a message and I’ll get back to you.</p>

        {/* Simple Formspree form — replace the action with your endpoint */}
        <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-3">
          <input name="name" placeholder="Your name" required className="px-3 py-2 bg-deep-charcoal text-soft-ivory border border-muted-slate rounded" />
          <input name="email" type="email" placeholder="Email" required className="px-3 py-2 bg-deep-charcoal text-soft-ivory border border-muted-slate rounded" />
          <textarea name="message" rows={5} placeholder="Message" required className="px-3 py-2 bg-deep-charcoal text-soft-ivory border border-muted-slate rounded" />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center px-4 py-2 bg-soft-ivory text-deep-charcoal rounded-md font-medium">Send</button>
            <span className="text-silver-mist text-sm">Or email: <a className="text-soft-ivory" href="mailto:you@example.com">you@example.com</a></span>
          </div>
        </form>
      </div>
    </section>
  )
}
