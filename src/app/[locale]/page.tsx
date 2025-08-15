'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IntroSection from '@/components/features/home/IntroSection'
import SkillSection from '@/components/features/home/SkillSection'
import ContactSection from '@/components/features/home/ContactSection'
import ProjectSection from '@/components/features/home/ProjectSection'
import AboutSection from '@/components/features/home/AboutSection'

export default function MixedScrollPage() {
  const pinRef1 = useRef<HTMLDivElement>(null) // 가로 섹션 #1 (핀)
  const trackRef1 = useRef<HTMLDivElement>(null) // 가로 섹션 #1 트랙
  const pinRef2 = useRef<HTMLDivElement>(null) // 가로 섹션 #2 (핀)
  const trackRef2 = useRef<HTMLDivElement>(null) // 가로 섹션 #2 트랙

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const setupHorizontal = (pinEl: HTMLDivElement, trackEl: HTMLDivElement, id: string) => {
      const total = Math.max(0, trackEl.scrollWidth - pinEl.clientWidth)

      // 기존 것 정리 후 재설정 (리사이즈/리렌더 대비)
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

    // 가로 섹션 1 세팅
    const horiz1 = setupHorizontal(pin1, track1, 'horiz-1')

    // (선택) 가로 #1 내부 요소 애니메이션: containerAnimation 사용
    gsap.utils.toArray<HTMLElement>('.horizontal-1 .reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          containerAnimation: horiz1, // ★ 가로 진행도 기준
          trigger: el,
          start: 'left 80%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    // 가로 섹션 2 세팅
    const horiz2 = setupHorizontal(pin2, track2, 'horiz-2')

    // (선택) 가로 #2 내부 요소 애니메이션
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
    <div className="min-h-[300vh]">
      {/* 세로 섹션 A */}
      {/*<section className="min-h-screen grid place-items-center bg-neutral-50">*/}
      {/*  <div className="max-w-3xl p-8 text-center">*/}
      {/*    <h1 className="text-4xl font-bold mb-4">Vertical A</h1>*/}
      {/*    <p className="text-neutral-600">아래로 스크롤하면 첫 번째 가로 섹션이 시작됩니다.</p>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* 가로 섹션 #1 */}
      <section ref={pinRef1} className="h-screen overflow-hidden">
        <div ref={trackRef1} className="horizontal-1 inline-flex h-screen gap-6">
          <IntroSection />

          <AboutSection />
          <div className="flex-none w-[5px]" />
        </div>
      </section>

      {/* 세로 섹션 B (일반 스크롤) */}
      <section className="min-h-screen grid place-items-center bg-white">
        <SkillSection />
      </section>

      {/* 가로 섹션 #2 */}
      <section ref={pinRef2} className="h-screen overflow-hidden">
        <div ref={trackRef2} className="horizontal-2 inline-flex h-screen gap-6">
          <ProjectSection />
          <div className="flex-none w-[200px]" />
        </div>
      </section>

      {/* 세로 섹션 C (끝) */}
      <section className="min-h-screen">
        <ContactSection />
      </section>
    </div>
  )
}
