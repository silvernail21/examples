import { useState, useEffect, useRef } from 'react'

export default function ContactSales() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-8')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const inputClass = 'w-full bg-surface border border-border px-5 py-4 text-ink text-sm placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200 font-light'

  return (
    <section id="contact" className="bg-primary py-28 px-6" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="opacity-0 translate-y-8 transition-all duration-700 grid lg:grid-cols-2 gap-20 items-start"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-accent" aria-hidden="true" />
              <span className="text-accent text-[10px] font-medium tracking-[0.35em] uppercase">Contact</span>
            </div>
            <h2
              id="contact-heading"
              className="font-display font-bold text-5xl sm:text-7xl text-ink leading-[1.0] mb-8"
            >
              {"Let's work"}<br /><em className="text-accent">together.</em>
            </h2>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-12 font-light">
              Tell us about your brand and where you want to take it. We respond within one business day.
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-muted text-[10px] tracking-[0.25em] uppercase mb-1">Based in</p>
                <p className="text-ink text-sm">Federal Way, WA — Working globally</p>
              </div>
              <div>
                <p className="text-muted text-[10px] tracking-[0.25em] uppercase mb-1">Email</p>
                <a
                  href="mailto:hello@brandner.com"
                  className="text-ink text-sm hover:text-accent transition-colors duration-200"
                >
                  hello@brandner.com
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-border p-12 text-center">
                <div className="w-12 h-12 border border-accent flex items-center justify-center mx-auto mb-6">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-ink mb-3">Message received.</h3>
                <p className="text-muted text-sm font-light">We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] text-muted tracking-[0.25em] uppercase mb-2">
                    Name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required autoComplete="name"
                    placeholder="Your name" value={form.name} onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] text-muted tracking-[0.25em] uppercase mb-2">
                    Email <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required autoComplete="email"
                    placeholder="your@email.com" value={form.email} onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] text-muted tracking-[0.25em] uppercase mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="What are you building and where do you want to take it?"
                    value={form.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-ink font-medium text-[10px] tracking-[0.25em] uppercase px-8 py-5 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
