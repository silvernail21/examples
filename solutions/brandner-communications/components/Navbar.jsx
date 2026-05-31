import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-primary focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-semibold">
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-primary/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-display font-bold text-ink text-xl tracking-widest uppercase cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent rounded"
            aria-label="Brandner Communications home"
          >
            Brandner
          </a>

          <ul className="hidden md:flex items-center gap-10" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-muted hover:text-ink text-sm font-light tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none focus:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 border border-ink/30 hover:border-accent hover:text-accent text-ink text-xs font-medium tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent"
          >
            Start a Project
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ink p-2 focus:outline-none focus:ring-1 focus:ring-accent rounded cursor-pointer"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`block h-px bg-ink transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-px bg-ink transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-ink transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-border px-6 py-8">
            <ul className="flex flex-col gap-6 mb-8" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="text-muted hover:text-ink text-sm font-light tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-flex border border-ink/30 text-ink text-xs font-medium tracking-widest uppercase px-6 py-3 rounded-full cursor-pointer">
              Start a Project
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
