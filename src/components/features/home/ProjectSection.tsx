'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import Starburst from '@/components/ui/Starburst'
import { ProjectCarousel } from '@/components/features/projects/ProjectCarousel'

export default function ProjectSection() {
  const stageRef = useRef<HTMLDivElement | null>(null) // 원근(perspective) 무대
  const ringRef = useRef<HTMLDivElement | null>(null) // 아이템들을 담는 링 컨테이너
  const itemRefs = useRef<HTMLDivElement[]>([]) // 각 카드 래퍼

  useLayoutEffect(() => {
    const stage = stageRef.current
    const ring = ringRef.current
    const items = itemRefs.current
    if (!stage || !ring || items.length === 0) return

    const N = items.length
    const stepDeg = 360 / N

    // 반지름: 카드 폭 기반으로 계산 (여유 1.1배)
    const w = items[0].getBoundingClientRect().width || 380
    const radius = (w / 2 / Math.tan(Math.PI / N)) * 1.1

    // 공통 스타일
    stage.style.perspective = '1400px'
    ring.style.transformStyle = 'preserve-3d'
    items.forEach((el) => {
      el.style.transformStyle = 'preserve-3d'
      gsap.set(el, { willChange: 'transform,opacity' })
    })

    // 진행값(실수 인덱스): 0 ~ N-1
    const state = { i: 0 }

    // set 빠르게
    const setters = items.map((el) => ({
      ry: gsap.quickSetter(el, 'rotationY', 'deg'),
      z: gsap.quickSetter(el, 'z', 'px'),
      sx: gsap.quickSetter(el, 'scaleX'),
      sy: gsap.quickSetter(el, 'scaleY'),
      o: gsap.quickSetter(el, 'opacity'),
    }))

    // 원형 배치 + 3장만 보이기 (왼/중앙/오른쪽)
    const render = () => {
      const t = state.i

      for (let idx = 0; idx < N; idx++) {
        // t(실수) 대비 idx의 원형 거리(짧은 방향, -N/2 ~ N/2)
        let d = (idx - t) % N
        d = (d + N) % N
        if (d > N / 2) d -= N

        const angle = d * stepDeg // 현재 중앙 기준 각도
        const isVisible = Math.abs(d) <= 1.0001 // 중앙±1만 보이기 (총 3장)
        const scale = gsap.utils.interpolate(1, 0.78, Math.min(Math.abs(d), 1))
        const opacity = isVisible ? (Math.abs(d) < 0.4 ? 1 : 0.68) : 0

        // 원형 배치: 각 아이템 자체를 회전시켜 링 위에 놓음
        const set = setters[idx]
        set.ry(angle) // 왼쪽은 음수 각도 → 왼쪽으로 기울어짐
        set.z(radius) // translateZ(radius) (gsap에서 z가 translateZ)
        set.sx(scale)
        set.sy(scale)
        set.o(opacity)

        // 숨김 카드 인터랙션 방지
        const node = items[idx]
        node.style.pointerEvents = isVisible ? 'auto' : 'none'
        node.style.visibility = isVisible ? 'visible' : 'hidden'
      }
    }

    // t를 부드럽게 변화시키는 유틸 (스냅)
    const toIndex = (targetIndex: number) => {
      // 원형이므로 가까운 방향으로 보간하기 위해 현재 state.i에서 target까지의 최단 거리 계산
      let from = state.i
      // targetIndex는 정수로 래핑
      targetIndex = ((targetIndex % N) + N) % N

      // 목표를 기준으로 from을 이웃 범위로 이동시켜 최단 경로 확보
      if (targetIndex - from > N / 2) from += N
      if (from - targetIndex > N / 2) from -= N

      gsap.killTweensOf(state)
      gsap.fromTo(
        state,
        { i: from },
        {
          i: targetIndex,
          duration: 0.45,
          ease: 'power3.out',
          onUpdate: render,
        },
      )
    }

    // 초기 1프레임
    render()

    // 입력 처리: 휠/트랙패드/터치 → 한 칸씩 이동(스냅)
    let lock = false
    const goNext = () => {
      if (lock) return
      lock = true
      toIndex(Math.round(state.i + 1))
      gsap.delayedCall(0.5, () => (lock = false))
    }
    const goPrev = () => {
      if (lock) return
      lock = true
      toIndex(Math.round(state.i - 1))
      gsap.delayedCall(0.5, () => (lock = false))
    }

    // 휠
    const onWheel = (e: WheelEvent) => {
      // 세로/가로 중 더 큰 축 기준
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      if (Math.abs(delta) < 2) return
      e.preventDefault()
      if (delta > 0) goNext()
      else goPrev()
    }

    // 터치/드래그
    let startX = 0,
      startY = 0,
      dragging = false
    const onPointerDown = (e: PointerEvent) => {
      dragging = true
      startX = e.clientX
      startY = e.clientY
      ;(e.target as Element).setPointerCapture?.(e.pointerId)
    }
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      if (Math.hypot(dx, dy) < 12) return
      // 가로 우선, 세로가 크면 무시
      if (Math.abs(dx) > Math.abs(dy)) {
        e.preventDefault()
        if (dx < 0) {
          goNext()
          startX = e.clientX
        } else {
          goPrev()
          startX = e.clientX
        }
      }
    }
    const onPointerUp = () => {
      dragging = false
    }

    ring.addEventListener('wheel', onWheel, { passive: false })
    ring.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: false })
    window.addEventListener('pointerup', onPointerUp, { passive: true })

    // 키보드(좌/우)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', onKey)

    return () => {
      ring.removeEventListener('wheel', onWheel)
      ring.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('keydown', onKey)
      gsap.killTweensOf(state)
    }
  }, [])

  return (
    <section className="w-full h-screen flex items-center justify-center px-[10vw]">
      {/* 좌측 정보는 원하면 제거 */}
      <div className="hidden lg:block w-[28ch] mr-[15vw]">
        <div className="text-[7vw] font-semibold">
          <span className="inline-block align-middle animate-rotate">
            <Starburst size="15vw" />
          </span>
          <span>Projects</span>
        </div>
        <Link href="/projects" className="inline-block mt-6 hover:scale-110">
          <span className="border border-black bg-teal-300 font-semibold rounded-[50%] px-6 py-3 text-black  transition">
            📁 View More
          </span>
        </Link>
      </div>
      <div className="w-[60vw]">
        <ProjectCarousel showArrows={false} />
      </div>
    </section>
  )
}
