const testimonials = [
  {
    quote:
      'Brandner transformed how we communicate with regulators and investors. Their platform gave us the confidence to handle a major disclosure event without a single compliance issue. The ROI was visible within 90 days.',
    name: 'Sarah M. Chen',
    role: 'Chief Communications Officer',
    company: 'First Meridian Capital',
    initials: 'SC',
    color: 'bg-blue-600',
  },
  {
    quote:
      'We were skeptical of yet another enterprise comms tool. But Brandner\'s onboarding was seamless, and the media monitoring alone saved our PR team 12 hours per week. Our earned media value doubled in Q1.',
    name: 'James R. Patterson',
    role: 'SVP Public Relations',
    company: 'NovaTech Systems',
    initials: 'JP',
    color: 'bg-primary',
  },
  {
    quote:
      "In healthcare, trust is everything. Brandner's HIPAA-compliant platform let us scale patient communications without sacrificing privacy or personalization. Our patient engagement scores went up 61% in six months.",
    name: 'Dr. Anika Sharma',
    role: 'VP Patient Experience',
    company: 'Meridian Health Group',
    initials: 'AS',
    color: 'bg-teal-600',
  },
]

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-bg py-24 px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-cta text-sm font-semibold tracking-widest uppercase mb-3">Client Success Stories</p>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-text leading-tight mb-4">
            What enterprise leaders say
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Verified reviews from communications leaders at Fortune 500 organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, company, initials, color }) => (
            <figure
              key={name}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 cursor-default flex flex-col"
            >
              <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <blockquote className="flex-1">
                <p className="text-slate-700 text-sm leading-relaxed italic mb-7">
                  &ldquo;{quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 ${color} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-brand-text text-sm">{name}</div>
                  <div className="text-slate-500 text-xs">{role}</div>
                  <div className="text-slate-400 text-xs">{company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm text-slate-600 shadow-sm">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span><strong>4.9/5</strong> from 1,200+ verified reviews on G2</span>
          </div>
        </div>
      </div>
    </section>
  )
}
