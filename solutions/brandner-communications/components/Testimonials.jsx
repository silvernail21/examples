export default function Testimonials() {
  return (
    <section id="about" className="bg-primary py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cta text-sm font-bold tracking-widest uppercase mb-4">About Brandner</p>
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
              Proud to be different.<br />For over 30 years.
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-6">
              We've taken pride in being different since day one. No titles on our business cards — not even the owners'. Our motto is Team Brandner. No "I" anywhere.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed mb-10">
              We're not a production shop. We're strategic partners who happen to know the building products industry better than anyone else. We've spent 30 years building the relationships, expertise, and creative chops to prove it.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                { icon: '📍', label: 'Federal Way, WA', sub: 'Near Seattle' },
                { icon: '👥', label: '~32 teammates', sub: 'No titles, just talent' },
                { icon: '🏗', label: 'One focus', sub: 'Building products only' },
                { icon: '📅', label: '30+ years', sub: "We've seen everything" },
              ].map(({ label, sub, icon }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 cursor-default">
                  <div className="text-white font-bold text-sm mb-0.5">{label}</div>
                  <div className="text-stone-400 text-xs">{sub}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.brandner.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                Meet the Team
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a
                href="https://www.brandner.com/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-stone-300 hover:text-white text-sm font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta"
              >
                We're Hiring
              </a>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                quote: "The work we do isn't about being a production shop — it's about being collaborative every day to help clients succeed. Strategic thinking, new and innovative options, and that true Swiss Army Knife to support clients at every turn.",
                attribution: "Team Brandner",
                role: "Company Philosophy",
              },
              {
                quote: "We've built relationships over 30 years with the editors and producers who cover the building industry in both trade and consumer media. That means we don't just pitch — we place.",
                attribution: "Brandner PR Team",
                role: "Media Relations",
              },
              {
                quote: "No titles on any of our business cards — not even the owners'. Everyone here is a teammate. That's not a policy, it's just how we work.",
                attribution: "Team Brandner",
                role: "Company Culture",
              },
            ].map(({ quote, attribution, role }) => (
              <figure
                key={role}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-200 cursor-default"
              >
                <blockquote>
                  <p className="text-stone-300 text-sm leading-relaxed italic mb-4">&ldquo;{quote}&rdquo;</p>
                </blockquote>
                <figcaption>
                  <div className="font-semibold text-white text-xs">{attribution}</div>
                  <div className="text-stone-500 text-xs">{role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
