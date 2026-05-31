import { useEffect, useRef, useState } from 'react'

const metrics = [
  { value: '500+', label: 'Enterprise clients across 6 continents', sublabel: 'Active accounts' },
  { value: '98%', label: 'Client retention rate year over year', sublabel: 'Retention' },
  { value: '$2.4B', label: 'Revenue influenced through Brandner campaigns', sublabel: 'Revenue driven' },
  { value: '150+', label: 'Countries reached with localized messaging', sublabel: 'Global reach' },
  { value: '4.9/5', label: 'Average customer satisfaction score', sublabel: 'CSAT score' },
  { value: '<2h', label: 'Average enterprise onboarding SLA response', sublabel: 'Response time' },
]

function useIntersection(ref) {
  const [intersected, setIntersected] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIntersected(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
  return intersected
}

export default function Stats() {
  const ref = useRef(null)
  const visible = useIntersection(ref)

  return (
    <section
      id="stats"
      ref={ref}
      className="bg-primary py-24 px-6"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-cta text-sm font-semibold tracking-widest uppercase mb-3">By The Numbers</p>
          <h2 id="stats-heading" className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Results speak louder than promises
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every number here is drawn from verified client outcomes and third-party audits. No cherry-picking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map(({ value, label, sublabel }, i) => (
            <div
              key={sublabel}
              className={`bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-300 cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">{sublabel}</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-3 animate-pulse-scale">{value}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-cta/10 border border-cta/20 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-white font-bold text-xl mb-2">Independently verified. Peer-reviewed.</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Brandner's performance data is audited annually by Deloitte. All client metrics are shared with consent and verified before publication.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            View Case Studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
