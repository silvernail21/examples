import { useState } from 'react'

const interests = [
  'Advertising',
  'Public Relations',
  'Digital Marketing',
  'Branding & Strategy',
  'Website Development',
  'Video Production',
  'Trade Shows',
  'Social Media',
  "Not sure yet — let's talk",
]

export default function ContactSales() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', interest: '', message: '' })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const inputClass = 'w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-brand-text text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-shadow duration-200'

  return (
    <section id="contact" className="bg-stone-50 py-24 px-6" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-cta text-sm font-bold tracking-widest uppercase mb-3">Start a Conversation</p>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-text leading-tight mb-5">
              Let's talk building products.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              We don't do long pitches or generic proposals. Tell us about your product and your market, and we'll tell you honestly whether we're the right fit.
            </p>

            <div className="space-y-6 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Federal Way, WA 98001',
                  sub: '32026 32nd Avenue South',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  ),
                  label: 'brandner.com',
                  sub: 'Full portfolio and case studies',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  ),
                  label: 'No titles. Just teammates.',
                  sub: "You'll talk to the people doing the work",
                },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cta/10 rounded-xl flex items-center justify-center">{icon}</div>
                  <div>
                    <div className="font-semibold text-brand-text text-sm">{label}</div>
                    <div className="text-stone-500 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Message sent!</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                  Someone from Team Brandner will be in touch soon. No automated responses — just a real person.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <h3 className="text-lg font-bold text-brand-text mb-6">Tell us about your project</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-stone-700 mb-1.5">Your name <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-stone-700 mb-1.5">Company <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input id="company" name="company" type="text" required autoComplete="organization" placeholder="Acme Building Products" value={form.company} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-xs font-semibold text-stone-700 mb-1.5">Work email <span className="text-red-500" aria-hidden="true">*</span></label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} className={inputClass} />
                </div>

                <div className="mb-4">
                  <label htmlFor="interest" className="block text-xs font-semibold text-stone-700 mb-1.5">What are you looking for?</label>
                  <select id="interest" name="interest" value={form.interest} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="" disabled>Select a service</option>
                    {interests.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-semibold text-stone-700 mb-1.5">Tell us about your product and market</label>
                  <textarea id="message" name="message" rows={4} placeholder="What do you make, who buys it, and what's the challenge?" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="w-full bg-cta hover:bg-cta-hover disabled:opacity-70 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 flex items-center justify-center gap-2 text-sm"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
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
