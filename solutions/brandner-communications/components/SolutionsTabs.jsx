import { useState } from 'react'

const audiences = [
  {
    id: 'architects',
    label: 'Architects & Specifiers',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    headline: 'Spec your product into more projects',
    description: "Architects and specifiers don't just buy products — they write them into buildings for decades. We know how to reach them through the right trade publications, continuing education, and digital channels to make your product the one they specify.",
    tactics: ['Continuing education (AIA/LACE)', 'Trade publication PR & advertising', 'Spec tool development', 'AEC digital targeting'],
    result: { label: "TGP became North America's #1 most-specified fire-rated glass manufacturer", tag: 'Case Study' },
  },
  {
    id: 'builders',
    label: 'Builders & Contractors',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    headline: "Put your product in builders' hands",
    description: "Builders and contractors make purchase decisions fast, based on trust and performance. We build brand recognition through trade shows, co-op programs, field sales support, and targeted digital campaigns that reach them where they actually look.",
    tactics: ['Trade show strategy & creative', 'Co-op advertising programs', 'Field sales tools & collateral', 'Contractor-targeted digital ads'],
    result: { label: "DRICORE YouTube ad averaged 96% view completion — nearly unheard of in the category", tag: 'Result' },
  },
  {
    id: 'dealers',
    label: 'Dealers & Distributors',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    headline: 'Move more product through the channel',
    description: "Dealers and distributors carry dozens of competing lines. We help your brand stand out on the shelf and in their pitch to customers — through co-op programs, sell-through tools, and training materials that make your reps their favorite to sell.",
    tactics: ['Co-op ad program management', 'Dealer/distributor sell-through tools', 'Sales training materials', 'Point-of-sale & packaging'],
    result: { label: "Grew a small Seattle glass sales office into an international industry leader over 15+ years", tag: 'Long-term Partnership' },
  },
  {
    id: 'homeowners',
    label: 'Homeowners & Retail',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    headline: "Win the homeowner's project",
    description: "Homeowners research extensively before they buy — on YouTube, Pinterest, Houzz, and Google. We create content and campaigns that inspire at the beginning of their journey and convert at the point of decision, in both consumer and trade retail channels.",
    tactics: ['Consumer digital & social campaigns', 'Influencer & brand ambassador programs', 'SEO/SEM for product discovery', 'Out-of-home & broadcast media'],
    result: { label: "Multi-channel consumer campaigns for residential building products across national markets", tag: 'Campaign Work' },
  },
]

export default function SolutionsTabs() {
  const [active, setActive] = useState(audiences[0].id)
  const current = audiences.find(a => a.id === active)

  return (
    <section id="expertise" className="bg-white py-24 px-6" aria-labelledby="expertise-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-cta text-sm font-bold tracking-widest uppercase mb-3">Who We Market To</p>
          <h2 id="expertise-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-text leading-tight mb-4">
            Every audience in the building channel
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            The building products industry is complex — a single product might need to reach architects, contractors, distributors, and homeowners simultaneously. We know how to talk to all of them.
          </p>
        </div>

        <div role="tablist" aria-label="Audiences" className="flex flex-wrap gap-2 mb-10">
          {audiences.map((a) => (
            <button
              key={a.id}
              role="tab"
              aria-selected={active === a.id}
              aria-controls={`panel-${a.id}`}
              id={`tab-${a.id}`}
              onClick={() => setActive(a.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta ${
                active === a.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-primary'
              }`}
            >
              {a.icon}
              {a.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8">
            <h3 className="text-2xl font-bold text-brand-text mb-3">{current.headline}</h3>
            <p className="text-stone-600 leading-relaxed mb-8">{current.description}</p>
            <ul className="space-y-3" aria-label="Tactics">
              {current.tactics.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-cta/10 rounded-full flex items-center justify-center mt-0.5" aria-hidden="true">
                    <svg className="w-3 h-3 text-cta" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-stone-700 text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-primary rounded-3xl p-8 text-white">
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-3">{current.result.tag}</p>
              <p className="text-white text-lg font-semibold leading-snug">{current.result.label}</p>
            </div>
            <div className="bg-cta/5 border border-cta/20 rounded-3xl p-8">
              <p className="text-stone-700 text-sm leading-relaxed mb-5">
                We've spent 30 years building relationships with the editors, producers, and media buyers who cover the building industry. That access is yours.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
              >
                Let's Talk
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
