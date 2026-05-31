import { useEffect, useRef } from 'react'

const stats = [
  { value: '30+', label: 'Years of craft' },
  { value: '200+', label: 'Brands elevated' },
  { value: '3', label: 'Continents reached' },
  { value: '98%', label: 'Client retention' },
]

export default function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-primary py-28 px-6 overflow-hidden" aria-label="Agency stats">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="opacity-0 translate-y-8 transition-all duration-700 [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-accent" aria-hidden="true" />
              <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">The Numbers</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl text-ink leading-[1.05] mb-8">
              Built on<br /><em className="text-accent">decades</em><br />of doing.
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-md">
              Three decades of creative work across branding, digital, PR, and beyond. Every number behind us is a relationship we still value.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="bg-primary p-6 sm:p-10 opacity-0 translate-y-6 transition-all duration-700 [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0"
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="font-display font-bold text-5xl sm:text-6xl text-ink mb-2">{value}</div>
                <div className="text-muted text-xs font-medium tracking-[0.2em] uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
