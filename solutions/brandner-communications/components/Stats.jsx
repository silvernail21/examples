const caseStudies = [
  {
    client: 'Technical Glass Products',
    category: 'Fire-Rated Glass',
    result: '#1 Most Specified',
    description: "Started as a small Seattle glass sales office. Through long-term PR, advertising, and specification strategy with Brandner, TGP grew into North America's #1 most-specified fire-rated glass manufacturer.",
    services: ['PR & Media Relations', 'Specification Marketing', 'Trade Advertising'],
  },
  {
    client: 'DRICORE',
    category: 'Basement Subfloor',
    result: '96% avg. video view',
    description: "Brandner created a YouTube ad for DRICORE's 'Trusted By' campaign featuring industry experts. The result: viewers watched an average of 96% of the video — a remarkable completion rate in the category.",
    services: ['Video Production', 'Digital Advertising', 'Influencer Strategy'],
  },
  {
    client: 'Drexel Metals',
    category: 'Metal Roofing',
    result: 'Pikes Peak Summit Complex',
    description: "For the historic Pikes Peak Summit Complex project, Brandner developed a video case study combining key messaging with aerial drone footage — showcasing the product in one of the most recognizable settings in America.",
    services: ['Video Production', 'PR', 'Case Study Development'],
  },
]

export default function Stats() {
  return (
    <section id="work" className="bg-white py-24 px-6" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-cta text-sm font-bold tracking-widest uppercase mb-3">Our Work</p>
          <h2 id="work-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-text leading-tight mb-4">
            Results that outlast campaigns
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            We measure success in years, not impressions. Here's what long-term partnership with Brandner looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {caseStudies.map(({ client, category, result, description, services }) => (
            <div key={client} className="group bg-stone-50 border border-stone-200 rounded-3xl overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 cursor-default flex flex-col">
              <div className="bg-primary p-6">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{category}</div>
                <div className="text-white font-bold text-lg leading-tight mb-1">{client}</div>
                <div className="text-cta font-extrabold text-2xl">{result}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-stone-600 text-sm leading-relaxed mb-5 flex-1">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {services.map(s => (
                    <span key={s} className="bg-white border border-stone-200 text-stone-500 text-xs font-medium px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-xl text-brand-text mb-2">See the full portfolio</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              30 years of building products work across advertising, PR, video, digital, and more. Visit brandner.com to see the complete portfolio.
            </p>
          </div>
          <a
            href="https://www.brandner.com/construction-marketing-work"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-stone-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View Portfolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
