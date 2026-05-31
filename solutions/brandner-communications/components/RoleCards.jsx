import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Brand Strategy',
    description: 'Positioning, identity systems, and naming that cut through noise and build lasting equity.',
  },
  {
    num: '02',
    title: '3D Design',
    description: 'Photorealistic visualization, product renders, and dimensional storytelling at world-class quality.',
  },
  {
    num: '03',
    title: 'Web Design & Dev',
    description: 'High-performance digital experiences built to convert, built to last, built to represent you.',
  },
  {
    num: '04',
    title: 'Public Relations',
    description: 'Strategic communications that shape narratives, build credibility, and generate real coverage.',
  },
  {
    num: '05',
    title: 'Marketing',
    description: 'Integrated campaigns across every channel, driven by data and powered by creative instinct.',
  },
  {
    num: '06',
    title: 'Art Direction',
    description: 'Cohesive visual languages across film, photography, print, and digital that define how a brand feels.',
  },
]

export default function RoleCards() {
  const headRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const els = [headRef.current, gridRef.current].filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0', 'translate-y-8')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="bg-surface py-28 px-6" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headRef}
          className="opacity-0 translate-y-8 transition-all duration-700 mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">What We Do</span>
          </div>
          <h2 id="services-heading" className="font-display font-bold text-4xl sm:text-6xl text-ink leading-[1.05] max-w-2xl">
            Craft meets<br /><em className="text-accent">strategy.</em>
          </h2>
        </div>

        <div ref={gridRef} className="opacity-0 translate-y-8 transition-all duration-700 delay-150 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map(({ num, title, description }) => (
            <div
              key={num}
              className="group bg-surface hover:bg-surface-2 p-8 transition-colors duration-300 cursor-default"
            >
              <div className="text-border text-xs font-medium tracking-widest mb-6 group-hover:text-accent transition-colors duration-300">
                {num}
              </div>
              <h3 className="font-display font-bold text-2xl text-ink mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
