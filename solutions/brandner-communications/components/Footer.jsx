import { useState } from 'react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="bg-surface border-t border-border" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-display font-bold text-ink text-2xl tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-accent rounded"
              aria-label="Brandner home"
            >
              BR<span className="text-accent italic">&amp;</span>NER
            </a>
            <p className="text-muted text-xs font-light leading-relaxed mt-4 max-w-xs">
              Full-service creative advertising agency. Building brands that mean something since 1994.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="lg:pl-8">
            <p className="text-[10px] text-muted tracking-[0.3em] uppercase mb-4">Navigate</p>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted hover:text-ink text-sm font-light transition-colors duration-200 focus:outline-none focus:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Subscribe */}
          <div>
            <p className="text-[10px] text-muted tracking-[0.3em] uppercase mb-4">Stay in the loop</p>
            {subscribed ? (
              <p className="text-mint text-sm font-light">You&apos;re in. Talk soon.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex" aria-label="Email subscribe">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 min-w-0 bg-surface-2 border border-border border-r-0 px-4 py-3 text-ink text-xs placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-hover text-ink text-[10px] font-medium tracking-[0.2em] uppercase px-5 py-3 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-accent flex-shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-[10px] font-light tracking-wide">
            &copy; {new Date().getFullYear()} Brandner Communications, Inc. All rights reserved.
          </p>
          <p className="text-muted text-[10px] font-light tracking-[0.25em] uppercase">
            Federal Way, WA
          </p>
        </div>
      </div>
    </footer>
  )
}
