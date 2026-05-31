const clients = [
  'Technical Glass Products',
  'DRICORE',
  'Drexel Metals',
  'Invisible Structures',
  'USP Structural Connectors',
  'Marvin Windows',
  'Pacific Coast Supply',
  'Simpson Strong-Tie',
  'Technical Glass Products',
  'DRICORE',
  'Drexel Metals',
  'Invisible Structures',
]

export default function ClientLogos() {
  const doubled = [...clients, ...clients]

  return (
    <section className="bg-stone-100 border-y border-stone-200 py-12 overflow-hidden" aria-label="Clients we've worked with">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs font-bold text-stone-400 tracking-widest uppercase">
          Trusted by leading building products companies
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap" aria-hidden="true">
          {doubled.map((name, i) => (
            <span key={i} className="inline-flex items-center text-stone-400 font-bold text-base tracking-tight hover:text-stone-600 transition-colors duration-200 cursor-default flex-shrink-0">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
