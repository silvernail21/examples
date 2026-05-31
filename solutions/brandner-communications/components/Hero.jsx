import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="main"
      className="relative min-h-screen bg-primary flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}} />
        <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-l from-cta/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="inline-flex items-center gap-2 bg-cta/10 border border-cta/20 text-cta text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-8">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            Proud to be different for 30+ years
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.0] tracking-tight mb-8 max-w-4xl">
            Marketing that
            <span className="block text-cta">builds industries.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mb-12">
            We're a full-service advertising and PR agency that lives and breathes building products. From roofing to glass, from architects to homeowners — we know your market because it's the only one we work in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              See Our Work
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta"
            >
              Start a Conversation
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {[
              { value: '30+', label: 'Years in building products' },
              { value: 'Full', label: 'Service agency — ads to PR' },
              { value: 'No', label: 'Titles. Just teammates.' },
              { value: '#1', label: 'Most specified — TGP case study' },
            ].map(({ value, label }) => (
              <div key={label} className="cursor-default">
                <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
                <div className="text-stone-400 text-sm leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
