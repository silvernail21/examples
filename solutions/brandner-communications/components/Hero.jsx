import { useEffect, useRef, useState } from 'react'

const badges = [
  {
    label: 'SOC 2 Type II',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: 'ISO 27001 Certified',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    label: 'HIPAA Compliant',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    label: 'G2 Leader 2025',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
  },
]

const stats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '98%', label: 'Retention Rate' },
  { value: '$2.4B', label: 'Revenue Driven' },
  { value: '150+', label: 'Countries Reached' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="main"
      className="relative min-h-screen bg-primary flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {badges.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-200 cursor-default"
                role="img"
                aria-label={label}
              >
                <span className="text-cta">{icon}</span>
                {label}
              </div>
            ))}
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Communications That{' '}
              <span className="text-cta">Move Markets</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
              Brandner delivers enterprise-grade communications intelligence—helping Fortune 500 companies craft narratives that build trust, accelerate growth, and define industry leadership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                Contact Sales
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-base border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                Explore Solutions
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-200 cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 animate-pulse-scale">
                  {value}
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
