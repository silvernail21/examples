import { useState, useEffect } from 'react'

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Results', href: '#stats' },
  { label: 'About', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-cta focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <nav
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-2xl border border-white/10'
            : 'bg-primary/80 backdrop-blur-sm border border-white/5'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-primary rounded-lg" aria-label="Brandner Communications home">
            <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <span className="text-white font-700 text-sm tracking-tight hidden sm:block">
              <span className="font-bold">Brandner</span>
              <span className="text-slate-400 font-medium"> Communications</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-slate-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-slate-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta"
            >
              Login
            </a>
            <a
              href="#contact"
              className="bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Contact Sales
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 px-6 py-4">
            <ul className="flex flex-col gap-1 mb-4" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-slate-300 hover:text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-center text-slate-300 text-sm font-medium px-4 py-2.5 rounded-lg border border-white/20 hover:bg-white/5 transition-colors duration-200 cursor-pointer">Login</a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="text-center bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer">Contact Sales</a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
