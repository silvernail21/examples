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
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About', href: '#about' },
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
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-cta focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold">
        Skip to main content
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/97 backdrop-blur-md shadow-sm border-b border-stone-200' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta rounded-lg" aria-label="Brandner Communications home">
            <div className="w-9 h-9 bg-cta rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div>
              <div className={`font-extrabold text-sm leading-tight tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
                BRANDNER
              </div>
              <div className={`text-xs font-medium leading-tight transition-colors duration-300 ${scrolled ? 'text-secondary' : 'text-white/70'}`}>
                COMMUNICATIONS
              </div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta ${
                    scrolled ? 'text-stone-600 hover:text-primary hover:bg-stone-100' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
            >
              Get In Touch
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta ${scrolled ? 'text-stone-600 hover:bg-stone-100' : 'text-white hover:bg-white/10'}`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-4">
            <ul className="flex flex-col gap-1 mb-4" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={() => setMobileOpen(false)} className="block text-stone-700 hover:text-primary text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-stone-100 transition-colors duration-200 cursor-pointer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-center bg-cta hover:bg-cta-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer">
              Get In Touch
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
