import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const navItems = [
  {
    label: 'Work',
    href: '#work',
    panel: [
      { title: 'Brand Identity', sub: 'Apex · Veil · Meridian' },
      { title: 'Campaigns', sub: 'Solstice · Northfield · Forma' },
      { title: 'Digital', sub: 'Web design & development' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    panel: [
      { title: 'Brand Strategy', sub: 'Positioning & identity systems' },
      { title: '3D Design', sub: 'Visualization & product renders' },
      { title: 'Web Design & Dev', sub: 'High-performance digital' },
      { title: 'Public Relations', sub: 'Narrative & coverage' },
      { title: 'Marketing', sub: 'Integrated campaigns' },
      { title: 'Art Direction', sub: 'Film, photo, print & digital' },
    ],
  },
  {
    label: 'About',
    href: '#about',
    panel: [
      { title: '30+ Years of craft', sub: 'Federal Way, WA — working globally' },
      { title: 'Our philosophy', sub: 'Brave ideas. Relentless craft.' },
      { title: '98% client retention', sub: 'Relationships we still value' },
    ],
  },
]

const mobileLinks = [...navItems.map(n => ({ label: n.label, href: n.href })), { label: 'Contact', href: '#contact' }]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activePanel, setActivePanel] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const drawerRef = useRef(null)
  const drawerLinksRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!drawerRef.current || !drawerLinksRef.current) return
    if (mobileOpen) {
      gsap.set(drawerRef.current, { display: 'flex' })
      gsap.fromTo(drawerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      gsap.fromTo(
        drawerLinksRef.current.children,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out', delay: 0.1 }
      )
    } else {
      gsap.to(drawerRef.current, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => gsap.set(drawerRef.current, { display: 'none' }),
      })
    }
  }, [mobileOpen])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[110] focus:bg-accent focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || activePanel ? 'bg-primary/95 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
        onMouseLeave={() => setActivePanel(null)}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-ink text-xl tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-accent rounded"
            aria-label="Brandner home"
          >
            BR<span className="text-accent italic">&amp;</span>NER
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10" role="list">
            {navItems.map(({ label, href, panel }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`text-sm font-light tracking-[0.18em] uppercase transition-colors duration-200 focus:outline-none focus:underline cursor-pointer ${
                    activePanel === label ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                  onMouseEnter={() => setActivePanel(label)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="text-[10px] font-medium tracking-[0.25em] uppercase px-7 py-3 border border-border hover:border-accent hover:text-accent text-muted transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-accent"
            >
              Start a Project
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden flex flex-col gap-[5px] w-6 focus:outline-none cursor-pointer p-1"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block h-px bg-ink transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[8px]' : 'w-6'}`} />
            <span className={`block h-px bg-ink transition-all duration-300 ${mobileOpen ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`block h-px bg-ink transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[8px]' : 'w-6'}`} />
          </button>
        </div>

        {/* Mega menu tray */}
        {navItems.map(({ label, panel }) =>
          activePanel === label ? (
            <div
              key={label}
              className="hidden md:block border-t border-border bg-primary/95 backdrop-blur-xl"
              onMouseEnter={() => setActivePanel(label)}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8">
                <div className={`grid gap-6 ${panel.length === 6 ? 'grid-cols-3 lg:grid-cols-6' : 'grid-cols-3'}`}>
                  {panel.map(({ title, sub }) => (
                    <div key={title} className="group">
                      <p className="text-ink text-sm font-medium mb-1 group-hover:text-accent transition-colors duration-200">
                        {title}
                      </p>
                      <p className="text-muted text-xs font-light leading-relaxed">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null
        )}
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-0 z-[60] bg-primary flex-col justify-between p-8 pt-24 hidden"
        aria-hidden={!mobileOpen}
      >
        <ul ref={drawerLinksRef} className="flex flex-col gap-2" role="list">
          {mobileLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-5xl sm:text-6xl font-bold text-ink hover:text-accent transition-colors duration-300 block py-3"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-12 border-t border-border">
          <p className="text-muted text-xs tracking-[0.25em] uppercase mb-1">Based in</p>
          <p className="text-ink text-sm">Federal Way, WA — Working globally</p>
        </div>
      </div>
    </>
  )
}
