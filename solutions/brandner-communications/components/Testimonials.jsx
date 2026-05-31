import { useEffect, useRef } from 'react'

const principles = [
  { title: 'Brave ideas', body: 'We only make work we believe in. If the brief is safe, we push back until it is not.' },
  { title: 'Relentless craft', body: 'Details no one will notice except the people who notice everything. We are those people.' },
  { title: 'True partnership', body: 'No hidden fees, no account handlers. You work directly with the people making your work.' },
]

export default function Testimonials() {
  const quoteRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const els = [quoteRef.current, gridRef.current].filter(Boolean)
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
    <section id="about" className="bg-surface-2 py-28 px-6" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">

        <div
          ref={quoteRef}
          className="opacity-0 translate-y-8 transition-all duration-700 mb-24 border-b border-border pb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-accent" aria-hidden="true" />
            <span className="text-accent text-[10px] font-medium tracking-[0.35em] uppercase">Our Philosophy</span>
          </div>
          <blockquote
            className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-ink leading-[1.1] max-w-5xl"
            id="about-heading"
          >
            <p>
              We do not just make things look beautiful.<br />
              <em className="text-accent">We build brands that mean something.</em>
            </p>
          </blockquote>
        </div>

        <div
          ref={gridRef}
          className="opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-3 gap-px bg-border"
        >
          {principles.map(({ title, body }) => (
            <div key={title} className="bg-surface-2 p-8 sm:p-10">
              <div className="w-6 h-px bg-accent mb-6" aria-hidden="true" />
              <h3 className="font-display font-bold text-2xl text-ink mb-4">{title}</h3>
              <p className="text-muted text-sm leading-relaxed font-light">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
