'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import LanguageGlobeButton from '@/components/common/LanguageGlobeButton'
import IntroSection from '@/components/features/home/sections/IntroSection'
import AboutSection from '@/components/features/home/sections/AboutSection'
import SkillsSection from '@/components/features/home/sections/SkillsSection'
import ProjectsSection from '@/components/features/home/sections/ProjectsSection'
import ContactSection from '@/components/features/home/sections/ContactSection'

export default function DesktopHome() {
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

    const makeIconTitleTimeline = (
      sectionSel: string,
      iconSel: string,
      titleSel: string,
      opts?: { start?: string },
    ) => {
      const section = document.querySelector<HTMLElement>(`.horizontal-1 ${sectionSel}`)
      const icon = section?.querySelector<HTMLElement>(iconSel)
      const title = section?.querySelector<HTMLElement>(titleSel)
      const lines = section?.querySelectorAll<HTMLElement>('.reveal-line')

      if (!section || !icon || !title || !lines?.length) return

      gsap.set(icon, { opacity: 0, scale: 0, transformOrigin: '50% 50%' })
      gsap.set(title, { opacity: 0, y: 20 })
      gsap.set(lines, { opacity: 0, y: 20 })

      const tl = gsap.timeline({
        scrollTrigger: {
          containerAnimation: horiz1,
          trigger: icon,
          start: opts?.start || 'left 85%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.to(icon, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.6)',
      })
        .to(title, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.35')
        .to(lines, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '>-0.1')
    }

    makeIconTitleTimeline('.edu-section', '.edu-icon', '.edu-title', { start: 'left 85%' })
    makeIconTitleTimeline('.work-section', '.work-icon', '.work-title', { start: 'left 85%' })
    makeIconTitleTimeline('.certs-section', '.certs-icon', '.certs-title', { start: 'left 85%' })

    // More 버튼
    const moreBtn = document.querySelector<HTMLElement>('.horizontal-1 .more-btn')
    if (moreBtn) {
      gsap.set(moreBtn, { opacity: 0, y: 30 })
      gsap.to(moreBtn, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          containerAnimation: horiz1,
          trigger: moreBtn,
          start: 'left 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    // Horizontal #1 reveal
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
    ;(window as any).__HSCROLL_2__ = horiz2

    // Horizontal #2 reveal
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
    ScrollTrigger.refresh()

    return () => {
      window.removeEventListener('resize', onResize)

      // 특정 id 트리거 제거
      ScrollTrigger.getById('horiz-1')?.kill()
      ScrollTrigger.getById('horiz-2')?.kill()

      // 혹시 남아 있는 trigger 전부 제거
      ScrollTrigger.getAll().forEach((t) => t.kill())

      // gsap 타임라인 초기화
      gsap.globalTimeline.clear()

      // 트랙 위치 원복
      if (track1) gsap.set(track1, { x: 0 })
      if (track2) gsap.set(track2, { x: 0 })
    }
  }, [])

  return (
    <>
      <div className="min-h-[300vh]">
        {/* Horizontal #1 */}
        <section ref={pinRef1} className="h-screen overflow-hidden">
          <div ref={trackRef1} className="horizontal-1 inline-flex h-screen gap-6">
            <IntroSection ballpitDuration={7000} />
            <AboutSection />
            <div className="flex-none w-[5px]" />
          </div>
        </section>

        {/* Vertical */}
        <section className="min-h-screen grid place-items-center bg-white">
          <SkillsSection />
        </section>

        {/* Horizontal #2 */}
        <section ref={pinRef2} className="h-screen overflow-hidden">
          <div ref={trackRef2} className="horizontal-2 inline-flex h-screen gap-6">
            <ProjectsSection />
          </div>
        </section>

        {/* Vertical */}
        <section className="min-h-screen">
          <ContactSection />
        </section>

        <LanguageGlobeButton />
      </div>
    </>
  )
}
