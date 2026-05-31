import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const v1Ref = useRef(null)
  const v2Ref = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    gsap.set(v2Ref.current, { opacity: 0 })
    gsap.set(bgRef.current, { clipPath: 'circle(0% at 50% 50%)' })
    gsap.set(contentRef.current, { opacity: 0, y: 28 })
    gsap.set(scrollRef.current, { opacity: 0 })

    const letters = v1Ref.current.querySelectorAll('span')
    gsap.set(letters, { opacity: 0, y: 18 })

    const tl = gsap.timeline({ delay: 0.2 })

    tl
      .to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.055,
        ease: 'power3.out',
      })
      .to({}, { duration: 0.75 })
      // Morph BRANDNER → BR&NER
      .to(v1Ref.current, { opacity: 0, duration: 0.35, ease: 'power2.in' })
      .to(v2Ref.current, { opacity: 1, duration: 0.45, ease: 'power2.out' }, '-=0.1')
      .to({}, { duration: 0.55 })
      // Iris wipe
      .to(bgRef.current, {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 1.35,
        ease: 'power2.inOut',
      })
      // Reveal content + scroll indicator
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power2.out',
      }, '-=0.55')
      .to(scrollRef.current, { opacity: 1, duration: 0.6 }, '-=0.3')

    return () => tl.kill()
  }, [])

  const logoClass = 'font-display font-bold leading-none tracking-tight text-ink inline-block'
  const size = 'text-[15vw] sm:text-[13vw] lg:text-[12vw]'

  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary"
      aria-label="Hero"
    >
      {/* Background revealed by iris wipe */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        aria-hidden="true"
        style={{ clipPath: 'circle(0% at 50% 50%)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/75" />
      </div>

      {/* Logo + Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo morph */}
        <div className="relative mb-10 sm:mb-14" aria-label="Brandner">
          {/* V1: BRANDNER (individual letters for stagger) */}
          <div
            ref={v1Ref}
            className="flex items-baseline justify-center"
            aria-hidden="true"
          >
            {['B', 'R', 'A', 'N', 'D', 'N', 'E', 'R'].map((l, i) => (
              <span key={i} className={`${logoClass} ${size}`}>{l}</span>
            ))}
          </div>

          {/* V2: BR&NER (cross-fades in on morph) */}
          <div
            ref={v2Ref}
            className={`${logoClass} ${size} absolute inset-0 flex items-center justify-center whitespace-nowrap`}
          >
            BR<em className="text-accent not-italic">&amp;</em>NER
          </div>
        </div>

        {/* Tagline + CTAs */}
        <div ref={contentRef} className="opacity-0">
          <p className="text-muted text-[10px] sm:text-xs font-light tracking-[0.45em] uppercase mb-10">
            Creative Advertising Agency
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#work"
              className="bg-accent hover:bg-accent-hover text-ink text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase px-10 py-4 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="text-muted hover:text-ink text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase transition-colors duration-300 focus:outline-none focus:underline"
            >
              Start a Project &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[40%] bg-mint animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
