'use client'

import React, { useRef, useEffect, useState } from 'react'
import { projectData } from '@/data/projects'
import { ProjectCardSimple } from '@/components/features/projects/ProjectCardSimple'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

interface ProjectCarouselProps {
  showArrows?: boolean
  /** 캐러셀 영역에 들어오면 카드 수만큼(정확히 1바퀴) 회전시키고, 이후 스크롤을 원래대로 돌려줌 */
  oneTurnThenRelease?: boolean
}

const SLUGS = projectData.map((p) => p.slug)
const TOTAL_CARDS = SLUGS.length
const RADIUS = 400
const SCROLL_DEBOUNCE_DELAY = 300
const ROTATION_PER_CARD = 360 / TOTAL_CARDS

export function ProjectCarousel({
  showArrows = true,
  oneTurnThenRelease = false,
}: ProjectCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentRotation, setCurrentRotation] = useState(0)

  // 🔒 “한 바퀴” 제어용 상태
  const [lockActive, setLockActive] = useState<boolean>(oneTurnThenRelease)
  const stepsTakenRef = useRef<number>(0) // 방향과 무관하게 '카드 이동' 횟수 누적

  const debouncedScroll = useRef(
    debounce((direction: number) => {
      setCurrentRotation((prevRotation) => prevRotation + direction * ROTATION_PER_CARD)
    }, SCROLL_DEBOUNCE_DELAY),
  ).current

  const handleScroll = (e: WheelEvent) => {
    if (lockActive) {
      e.preventDefault()
      const direction = e.deltaY > 0 ? -1 : 1
      setCurrentRotation((prev) => prev + direction * ROTATION_PER_CARD)
      stepsTakenRef.current += 1

      if (stepsTakenRef.current >= TOTAL_CARDS) {
        setLockActive(false)
        detachWheel()
      }
      return
    }

    const direction = e.deltaY > 0 ? -1 : 1
    debouncedScroll(direction)
  }

  const handleArrowClick = (direction: number) => {
    if (lockActive) return
    debouncedScroll(direction)
  }

  const attachWheel = () => {
    const el = carouselRef.current
    if (!el) return
    el.addEventListener('wheel', handleScroll as any, { passive: false })
  }
  const detachWheel = () => {
    const el = carouselRef.current
    if (!el) return
    el.removeEventListener('wheel', handleScroll as any)
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    const onEnter = () => {
      if (lockActive) attachWheel()
    }
    const onLeave = () => {
      detachWheel()
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    if (lockActive) attachWheel()

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      detachWheel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lockActive])

  const getCardStyle = (index: number) => {
    const initialCardRotation = index * ROTATION_PER_CARD

    let rotatedAngle = (initialCardRotation + currentRotation) % 360
    if (rotatedAngle > 180) rotatedAngle -= 360
    if (rotatedAngle < -180) rotatedAngle += 360

    let opacity = 0
    let scale = 0.8
    let zIndex = 0

    if (Math.abs(rotatedAngle) < ROTATION_PER_CARD / 2) {
      opacity = 1
      scale = 1
      zIndex = 10
    } else if (Math.abs(rotatedAngle) < ROTATION_PER_CARD * 1.5) {
      opacity = 0.8
      scale = 0.9
      zIndex = 5
    } else {
      opacity = 0.2
      scale = 0.8
      zIndex = 1
    }

    const baseTransform = `rotateY(${initialCardRotation}deg) translateZ(${RADIUS}px)`
    const dynamicTransform = `${baseTransform} scale(${scale})`

    return {
      opacity,
      transform: dynamicTransform,
      zIndex,
    }
  }

  return (
    <div className="relative w-full">
      {showArrows && !lockActive && (
        <>
          <button
            className="absolute top-1/2 left-16 md:left-10 z-20 -translate-y-1/2 -translate-x-full cursor-pointer pr-8"
            onClick={() => handleArrowClick(1)}
            aria-label="previous"
          >
            <MdKeyboardArrowLeft className="text-6xl" />
          </button>
          <button
            className="absolute top-1/2 right-16 md:right-10 z-20 -translate-y-1/2 translate-x-full cursor-pointer pl-8"
            onClick={() => handleArrowClick(-1)}
            aria-label="next"
          >
            <MdKeyboardArrowRight className="text-6xl" />
          </button>
        </>
      )}

      <div
        ref={carouselRef}
        className="relative w-full min-h-[110vh] md:h-screen flex justify-center items-center overflow-hidden [perspective:1500px]"
      >
        <div
          className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-[800ms] ease-in-out"
          style={{ transform: `rotateY(${currentRotation}deg)` }}
        >
          {SLUGS.map((slug, index) => {
            const cardStyle = getCardStyle(index)
            return (
              <div
                key={slug + index}
                className="absolute top-1/2 left-1/2 origin-center
                w-[50vw] max-w-[280px] min-h-max
                md:w-[300px] md:h-[400px]
                -translate-x-1/2 -translate-y-1/2
                transition-opacity transition-transform duration-300 ease-linear"
                style={{
                  ...cardStyle,
                  transformOrigin: '50% 50%',
                }}
              >
                <ProjectCardSimple slug={slug} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
