import React, { useRef, useEffect, useState } from 'react'
import { projectData } from '@/data/projects'
import '@/components/features/projects/ProjectCarousel.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
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
    // 잠금 모드일 때만 페이지 스크롤 막고 회전시킴
    if (lockActive) {
      e.preventDefault()
      const direction = e.deltaY > 0 ? -1 : 1
      // “한 스텝(= 한 카드)” 회전
      setCurrentRotation((prev) => prev + direction * ROTATION_PER_CARD)
      stepsTakenRef.current += 1

      // 한 바퀴 완료(카드 수만큼 이동) → 잠금 해제
      if (stepsTakenRef.current >= TOTAL_CARDS) {
        setLockActive(false)
        detachWheel() // 더 이상 가로채지 않음 → 메인 스크롤 재개
      }
      return
    }

    // 잠금 해제 후에는 기존 부드러운 회전(옵션)
    const direction = e.deltaY > 0 ? -1 : 1
    debouncedScroll(direction)
  }

  const handleArrowClick = (direction: number) => {
    if (lockActive) return // 잠금 중에는 화살표 무시(원하면 허용 가능)
    debouncedScroll(direction)
  }

  // wheel 리스너 부착/해제 헬퍼
  const attachWheel = () => {
    const el = carouselRef.current
    if (!el) return
    // passive:false 여야 preventDefault 가능
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

    // 캐러셀에 마우스 들어오면(hover/focus) 한 바퀴 모드가 켜져 있으면 wheel 가로채기
    const onEnter = () => {
      if (lockActive) attachWheel()
    }
    const onLeave = () => {
      // 영역을 벗어나면 굳이 가로채지 않음
      detachWheel()
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    // 초기 진입 시 포인터가 이미 위에 있을 수도 있으니 한 번 보정
    if (lockActive) attachWheel()

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      detachWheel()
    }
    // lockActive가 false가 되면 자연히 detachWheel이 호출됨
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lockActive])

  // 각 카드의 시각적 속성 계산
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
      {/* showArrows가 true이고, 잠금 해제 이후에만 버튼 노출 */}
      {showArrows && !lockActive && (
        <>
          <button
            className="absolute top-1/2 left-10 z-20 -translate-y-1/2 -translate-x-full cursor-pointer px-8"
            onClick={() => handleArrowClick(1)}
          >
            <MdKeyboardArrowLeft className="text-6xl"  />
          </button>
          <button
            className="absolute top-1/2 right-10 z-20 -translate-y-1/2 translate-x-full cursor-pointer px-8"
            onClick={() => handleArrowClick(-1)}
          >
            <MdKeyboardArrowRight className="text-6xl"  />
          </button>
        </>
      )}

      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-wrapper" style={{ transform: `rotateY(${currentRotation}deg)` }}>
          {SLUGS.map((slug, index) => {
            const cardStyle = getCardStyle(index)
            return (
              <div
                key={slug + index}
                className="carousel-item"
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

        {/* 잠금 중 안내(원하면 숨겨도 됨) */}
        {oneTurnThenRelease && lockActive && (
          <div className="absolute bottom-[5vh] left-1/2 -translate-x-1/2 text-sm opacity-70">
            Scroll to explore the project carousel first
          </div>
        )}
      </div>
    </div>
  )
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
