const capabilities = [
  'Brand Strategy',
  '3D Design',
  'Web Design & Dev',
  'Public Relations',
  'Marketing',
  'Art Direction',
  'Campaign Creative',
  'Content Production',
  'Brand Identity',
  'Digital Marketing',
]

const items = [...capabilities, ...capabilities]

export default function ClientLogos() {
  return (
    <div className="border-y border-border bg-surface py-5 overflow-hidden" aria-label="Our capabilities">
      <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
        {items.map((cap, i) => (
          <span key={i} className="inline-flex items-center gap-5 mx-5">
            <span className="text-muted text-xs font-medium tracking-[0.3em] uppercase">{cap}</span>
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
