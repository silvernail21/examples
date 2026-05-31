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
          <span key={i} className="inline-flex items-center gap-6 mx-6">
            <span className="text-muted text-[10px] font-light tracking-[0.35em] uppercase">{cap}</span>
            <span className="w-px h-3 bg-border flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
