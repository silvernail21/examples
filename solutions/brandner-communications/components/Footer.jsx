const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          <a
            href="#"
            className="font-display font-bold text-ink text-2xl tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-accent rounded"
            aria-label="Brandner Communications home"
          >
            Brandner
          </a>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-8" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted hover:text-ink text-xs font-medium tracking-widest uppercase transition-colors duration-300 focus:outline-none focus:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Brandner Communications, Inc. All rights reserved.
          </p>
          <p className="text-muted text-xs tracking-widest uppercase">
            Federal Way, WA
          </p>
        </div>
      </div>
    </footer>
  )
}
