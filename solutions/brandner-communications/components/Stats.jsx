import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 30, suffix: '+', label: 'Years of craft' },
  { value: 200, suffix: '+', label: 'Brands elevated' },
  { value: 3, suffix: '', label: 'Continents reached' },
  { value: 98, suffix: '%', label: 'Client retention' },
]

function Counter({ value, suffix, active }) {
  const [display, setDisplay] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const duration = 1400

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [active, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          setActive(true)
          observer.disconnect()
        }
      },
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
              <div className="w-6 h-px bg-accent" aria-hidden="true" />
              <span className="text-accent text-[10px] font-medium tracking-[0.35em] uppercase">The Numbers</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl text-ink leading-[1.05] mb-8">
              Built on<br /><em className="text-accent">decades</em><br />of doing.
            </h2>
            <p className="text-muted text-sm leading-relaxed max-w-md font-light">
              Three decades of creative work across branding, digital, PR, and beyond. Every number behind us is a relationship we still value.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border">
            {stats.map(({ value, suffix, label }, i) => (
              <div
                key={label}
                className="bg-primary p-6 sm:p-10 opacity-0 translate-y-6 transition-all duration-700 [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0"
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="font-display font-bold text-5xl sm:text-6xl text-ink mb-2 tabular-nums">
                  <Counter value={value} suffix={suffix} active={active} />
                </div>
                <div className="text-muted text-[10px] font-light tracking-[0.25em] uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
