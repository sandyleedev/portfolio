import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IntroSection from '@/components/features/home/IntroSection'
import AboutSection from '@/components/features/home/AboutSection'
import SkillSection from '@/components/features/home/SkillSection'
import ProjectSection from '@/components/features/home/ProjectSection'
import ContactSection from '@/components/features/home/ContactSection'
import LanguageGlobeButton from '@/components/common/LanguageGlobeButton'

export default function DesktopMain() {
  const pinRef1 = useRef<HTMLDivElement>(null) // Horiz #1 Pin
  const trackRef1 = useRef<HTMLDivElement>(null) // Horiz #1 Track
  const pinRef2 = useRef<HTMLDivElement>(null) // Horiz #2 Pin
  const trackRef2 = useRef<HTMLDivElement>(null) // Horiz #2 Track

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const setupHorizontal = (pinEl: HTMLDivElement, trackEl: HTMLDivElement, id: string) => {
      const total = Math.max(0, trackEl.scrollWidth - pinEl.clientWidth)

      ScrollTrigger.getById(id)?.kill()
      gsap.killTweensOf(trackEl)
      gsap.set(trackEl, { x: 0 })

      return gsap.to(trackEl, {
        x: -total,
        ease: 'none',
        scrollTrigger: {
          id,
          trigger: pinEl,
          start: 'top top',
          end: `+=${total}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
    }

    const pin1 = pinRef1.current!
    const track1 = trackRef1.current!
    const pin2 = pinRef2.current!
    const track2 = trackRef2.current!

    // Horizontal #1
    const horiz1 = setupHorizontal(pin1, track1, 'horiz-1')

    // Horizontal #1 Animation
    gsap.utils.toArray<HTMLElement>('.horizontal-1 .reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          containerAnimation: horiz1,
          trigger: el,
          start: 'left 80%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    // Horizontal #2
    const horiz2 = setupHorizontal(pin2, track2, 'horiz-2')

    // Horizontal #2 Animation
    gsap.utils.toArray<HTMLElement>('.horizontal-2 .reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          containerAnimation: horiz2,
          trigger: el,
          start: 'left 80%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      ScrollTrigger.getById('horiz-1')?.kill()
      ScrollTrigger.getById('horiz-2')?.kill()
      gsap.set(track1, { x: 0 })
      gsap.set(track2, { x: 0 })
    }
  }, [])

  return (
    <>
      <div className="min-h-[300vh]">
        {/* Horizontal #1 */}
        <section ref={pinRef1} className="h-screen overflow-hidden">
          <div ref={trackRef1} className="horizontal-1 inline-flex h-screen gap-6">
            <IntroSection />
            <AboutSection />
            <div className="flex-none w-[5px]" />
          </div>
        </section>

        {/* Vertical */}
        <section className="min-h-screen grid place-items-center bg-white">
          <SkillSection />
        </section>

        {/* Horizontal #2 */}
        <section ref={pinRef2} className="h-screen overflow-hidden">
          <div ref={trackRef2} className="horizontal-2 inline-flex h-screen gap-6">
            <ProjectSection />
            <div className="flex-none w-[200px]" />
          </div>
        </section>

        {/* Vertical */}
        <section className="min-h-screen">
          <ContactSection />
        </section>

        {/* Language Select Button */}
        <LanguageGlobeButton />
      </div>
    </>
  )
}
