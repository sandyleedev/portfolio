'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IntroSection from '@/components/features/home/IntroSection'

export default function HorizontalTrack() {
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const pinEl = pinRef.current!
    const trackEl = trackRef.current!

    const setup = () => {
      const total = trackEl.scrollWidth - window.innerWidth // 트랙 전체 너비 - 뷰포트
      gsap.to(trackEl, {
        x: -total,
        ease: 'none',
        scrollTrigger: {
          trigger: pinEl,
          start: 'top top',
          end: `+=${total}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    }

    setup()
    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <main ref={pinRef} className="h-screen overflow-hidden">
      <div ref={trackRef} className="inline-flex h-screen gap-6">
        <IntroSection />
        <div className="flex-none w-[85vw] h-screen bg-rose-600 rounded-2xl grid place-items-center text-white text-3xl">
          C
        </div>
        <div className="flex-none w-[60vw] h-screen bg-emerald-600 rounded-2xl grid place-items-center text-white text-3xl">
          D
        </div>
        <div className="flex-none w-[5px]" />
      </div>
    </main>
  )
}
