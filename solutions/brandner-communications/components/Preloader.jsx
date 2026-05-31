import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete,
        })
      },
    })

    tl.fromTo(
      fillRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.1, ease: 'power2.inOut', transformOrigin: 'left center' }
    ).to({}, { duration: 0.25 })

    return () => tl.kill()
  }, [])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
    >
      <div className="relative overflow-hidden select-none" aria-hidden="true">
        <div className="font-display text-[13vw] font-bold tracking-tight text-border leading-none">
          BRANDNER
        </div>
        <div
          ref={fillRef}
          className="absolute inset-0 overflow-hidden"
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
        >
          <div className="font-display text-[13vw] font-bold tracking-tight text-ink leading-none whitespace-nowrap">
            BRANDNER
          </div>
        </div>
      </div>
    </div>
  )
}
