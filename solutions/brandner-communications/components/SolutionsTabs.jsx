import { useState } from 'react'

const industries = [
  {
    id: 'finance',
    label: 'Financial Services',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    headline: 'Regulatory-Ready Communications',
    description:
      "Navigate complex disclosure requirements, investor relations, and regulatory communications with precision. Brandner's compliance-first platform ensures every message meets SEC, FINRA, and global standards.",
    features: [
      'Automated disclosure management',
      'Investor relations portal',
      'Earnings call scripting & coaching',
      'Crisis communications playbooks',
    ],
    metric: { value: '43%', label: 'faster regulatory approval cycles' },
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    headline: 'Patient & Stakeholder Trust at Scale',
    description:
      'From clinical trial communications to physician outreach and patient education, Brandner delivers HIPAA-compliant messaging that builds the trust healthcare outcomes depend on.',
    features: [
      'HIPAA-compliant message management',
      'Multi-channel patient outreach',
      'Clinical trial communications',
      'Physician & payer engagement tools',
    ],
    metric: { value: '61%', label: 'improvement in patient engagement scores' },
  },
  {
    id: 'technology',
    label: 'Technology',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    headline: 'Launch Faster. Grow Louder.',
    description:
      'Speed-to-market narrative, developer community engagement, and product launch communications designed for SaaS, cloud, and enterprise technology companies competing for mindshare.',
    features: [
      'Product launch communication blueprints',
      'Developer & technical audience content',
      'Analyst & media relations management',
      'Brand positioning workshops',
    ],
    metric: { value: '2.8x', label: 'increase in media coverage at launch' },
  },
  {
    id: 'retail',
    label: 'Retail & CPG',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    headline: 'Brand Stories That Convert',
    description:
      'Drive omnichannel brand consistency, manage product launch narratives, and build authentic consumer connections across retail, e-commerce, and direct-to-consumer channels.',
    features: [
      'Omnichannel brand voice management',
      'Campaign narrative development',
      'Social listening & response strategy',
      'Influencer communications frameworks',
    ],
    metric: { value: '38%', label: 'lift in brand sentiment metrics' },
  },
  {
    id: 'government',
    label: 'Government & Public Sector',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    headline: 'Public Trust Through Transparent Communications',
    description:
      'Enable government agencies and public institutions to communicate with clarity, accountability, and reach—meeting FedRAMP, FISMA, and public records requirements at every step.',
    features: [
      'FedRAMP-authorized infrastructure',
      'Multi-lingual citizen communications',
      'Emergency & crisis broadcast systems',
      'Public records & FOIA management',
    ],
    metric: { value: '89%', label: 'citizen satisfaction with communications' },
  },
]

export default function SolutionsTabs() {
  const [active, setActive] = useState(industries[0].id)
  const current = industries.find((i) => i.id === active)

  return (
    <section id="industries" className="bg-brand-bg py-24 px-6" aria-labelledby="solutions-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-cta text-sm font-semibold tracking-widest uppercase mb-3">Solutions by Industry</p>
          <h2 id="solutions-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-text leading-tight mb-4">
            Built for the complexity of your sector
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every industry faces distinct communications challenges. Brandner delivers tailored solutions—not generic templates.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Industries"
          className="flex flex-wrap gap-2 mb-10"
        >
          {industries.map((ind) => (
            <button
              key={ind.id}
              role="tab"
              aria-selected={active === ind.id}
              aria-controls={`panel-${ind.id}`}
              id={`tab-${ind.id}`}
              onClick={() => setActive(ind.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta ${
                active === ind.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-gray-200 hover:border-secondary hover:text-primary'
              }`}
            >
              {ind.icon}
              {ind.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-text mb-3">{current.headline}</h3>
            <p className="text-slate-600 leading-relaxed mb-8">{current.description}</p>
            <ul className="space-y-3" aria-label="Features">
              {current.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-cta/10 rounded-full flex items-center justify-center mt-0.5" aria-hidden="true">
                    <svg className="w-3 h-3 text-cta" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-slate-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-primary rounded-3xl p-8 text-white">
              <p className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-widest">Proven Results</p>
              <div className="text-5xl font-extrabold text-white mb-2 animate-pulse-scale">{current.metric.value}</div>
              <p className="text-slate-300 text-lg capitalize">{current.metric.label}</p>
            </div>
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cta/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <p className="font-semibold text-brand-text">Ready to see results?</p>
              </div>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                Get a personalized demo tailored to {current.label.toLowerCase()} communications challenges. Our team responds within 2 hours.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
              >
                Request Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
