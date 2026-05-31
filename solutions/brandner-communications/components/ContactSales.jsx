import { useState } from 'react'

const roles = [
  'Chief Marketing Officer',
  'Communications Director',
  'VP Public Relations',
  'Chief Information Officer',
  'Chief Security Officer',
  'Marketing Manager',
  'Other',
]

const trustSignals = [
  {
    icon: (
      <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Response within 2 business hours',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: 'No spam, ever. Unsubscribe anytime.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: 'SOC 2 certified — your data is safe',
  },
]

export default function ContactSales() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', role: '', message: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const inputClass =
    'w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-brand-text text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-shadow duration-200'

  return (
    <section id="contact" className="bg-white py-24 px-6" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-cta text-sm font-semibold tracking-widest uppercase mb-3">Get Started</p>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-text leading-tight mb-5">
              Talk to our enterprise team
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Tell us about your communications challenges. We'll put together a personalized demo and proposal—no generic pitch decks.
            </p>

            <ul className="space-y-5 mb-12" aria-label="Contact assurances">
              {trustSignals.map(({ icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cta/10 rounded-xl flex items-center justify-center">
                    {icon}
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>

            <div className="bg-brand-bg border border-gray-200 rounded-3xl p-7">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">Industry Recognition</p>
              <div className="flex flex-wrap gap-3">
                {['G2 Leader 2025', 'Gartner Peer Insights #1', 'Forbes AI 50', 'Inc. 5000'].map((award) => (
                  <span
                    key={award}
                    className="bg-white border border-gray-200 text-slate-600 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-bg border border-gray-200 rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Request received!</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  Our enterprise team will be in touch within 2 business hours. Check your inbox at{' '}
                  <strong>{form.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact Sales form">
                <h3 className="text-lg font-bold text-brand-text mb-6">Request a personalized demo</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full name <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work email <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="role" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your role <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={form.role}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select your role</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Tell us about your challenge
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What communications challenges are you looking to solve?"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cta hover:bg-cta-hover disabled:opacity-70 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 flex items-center justify-center gap-2 text-sm"
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending request...
                    </>
                  ) : (
                    <>
                      Request Demo
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500 mt-4">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-cta hover:underline cursor-pointer focus:outline-none focus:ring-1 focus:ring-cta rounded">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-cta hover:underline cursor-pointer focus:outline-none focus:ring-1 focus:ring-cta rounded">
                    Terms of Service
                  </a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
