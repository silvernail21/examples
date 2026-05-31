const logos = [
  'Goldman Sachs',
  'Microsoft',
  'JPMorgan Chase',
  'Deloitte',
  'Pfizer',
  'Salesforce',
  'BlackRock',
  'IBM',
  'Accenture',
  'UnitedHealth',
]

export default function ClientLogos() {
  const doubled = [...logos, ...logos]

  return (
    <section className="bg-white border-y border-gray-200 py-12 overflow-hidden" aria-label="Trusted by leading organizations">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-sm font-semibold text-slate-500 tracking-widest uppercase">
          Trusted by 500+ leading organizations worldwide
        </p>
      </div>
      <div className="relative">
        <div
          className="flex gap-16 animate-marquee whitespace-nowrap"
          aria-hidden="true"
        >
          {doubled.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center text-slate-400 font-bold text-lg tracking-tight hover:text-slate-600 transition-colors duration-200 cursor-default flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
