import { useEffect, useState } from 'react'

const lines = [
  { text: 'We build', italic: false },
  { text: 'brands that', italic: true },
  { text: 'move people.', italic: false },
]

export default function Hero() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 650),
      setTimeout(() => setPhase(3), 950),
      setTimeout(() => setPhase(4), 1250),
      setTimeout(() => setPhase(5), 1600),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-primary"
      aria-label="Hero"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pb-20 pt-40 w-full">

        {/* Eyebrow */}
        <div
          className={`transition-all duration-700 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              Creative Advertising Agency
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display mb-10 overflow-hidden" aria-label="We build brands that move people.">
          {lines.map(({ text, italic }, i) => (
            <div key={i} className="overflow-hidden">
              <div
                className={`text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.0] text-ink transition-all duration-700 ${
                  phase >= i + 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                } ${italic ? 'italic text-accent' : ''}`}
                style={{ transitionDelay: `${i * 100}ms`, transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                aria-hidden="true"
              >
                {text}
              </div>
            </div>
          ))}
        </h1>

        {/* Sub + CTAs */}
        <div
          className={`transition-all duration-700 flex flex-col sm:flex-row items-start sm:items-center gap-8 ${
            phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <p className="text-muted text-sm font-light tracking-widest uppercase max-w-xs leading-loose">
            Branding · 3D Design · Web · PR · Marketing
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-primary text-xs font-semibold tracking-widest uppercase px-7 py-4 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              View Our Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-muted hover:text-ink text-xs font-medium tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none focus:underline"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 right-10 hidden sm:flex flex-col items-center gap-3 transition-all duration-700 ${phase >= 5 ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      >
        <span className="text-muted text-xs tracking-[0.25em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-12 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-accent animate-[scrollbar_1.8s_ease-in-out_infinite]" style={{ height: '40%', animation: 'slideDown 1.8s ease-in-out infinite' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  )
}
