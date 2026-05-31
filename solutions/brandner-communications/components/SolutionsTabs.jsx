import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Apex Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80&fit=crop',
    size: 'large',
  },
  {
    title: 'Forma 3D Campaign',
    category: '3D Design',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80&fit=crop',
    size: 'small',
  },
  {
    title: 'Meridian Web Platform',
    category: 'Web Design & Dev',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&fit=crop',
    size: 'small',
  },
  {
    title: 'Solstice Launch Campaign',
    category: 'Integrated Campaign',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop',
    size: 'small',
  },
  {
    title: 'Veil Editorial',
    category: 'Art Direction',
    image: 'https://images.unsplash.com/photo-1617722141523-5f1af7b7f80d?w=800&q=80&fit=crop',
    size: 'small',
  },
  {
    title: 'Northfield PR Strategy',
    category: 'Public Relations',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80&fit=crop',
    size: 'large',
  },
]

function ProjectCard({ title, category, image }) {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-surface aspect-[4/3] cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
        <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-1">{category}</p>
        <h3 className="text-ink font-display font-bold text-xl">{title}</h3>
      </div>
    </div>
  )
}

export default function SolutionsTabs() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="bg-primary py-28 px-6" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0 mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-accent" aria-hidden="true" />
              <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">Selected Work</span>
            </div>
            <h2 id="work-heading" className="font-display font-bold text-4xl sm:text-6xl text-ink leading-[1.05]">
              Work that<br /><em className="text-accent">speaks.</em>
            </h2>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 text-muted hover:text-ink text-xs font-medium tracking-widest uppercase transition-colors duration-300 focus:outline-none focus:underline"
          >
            Start a Project &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
