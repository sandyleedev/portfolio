import React, { useRef, useEffect, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { projectData } from '@/data/projects'
import '@/components/features/projects/ProjectCarousel.css'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

interface ProjectCarouselProps {
  showArrows?: boolean
}

const SLUGS = projectData.map((p) => p.slug)
const TOTAL_CARDS = SLUGS.length
const RADIUS = 400
const SCROLL_DEBOUNCE_DELAY = 300
const ROTATION_PER_CARD = 360 / TOTAL_CARDS

export function ProjectCarousel({ showArrows = true }: ProjectCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentRotation, setCurrentRotation] = useState(0)

  const debouncedScroll = useRef(
    debounce((direction: number) => {
      setCurrentRotation((prevRotation) => prevRotation + direction * ROTATION_PER_CARD)
    }, SCROLL_DEBOUNCE_DELAY),
  ).current

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault()
    const direction = e.deltaY > 0 ? -1 : 1
    debouncedScroll(direction)
  }

  const handleArrowClick = (direction: number) => {
    debouncedScroll(direction)
  }

  useEffect(() => {
    const carouselElement = carouselRef.current
    if (carouselElement) {
      carouselElement.addEventListener('wheel', handleScroll)
    }
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('wheel', handleScroll)
      }
    }
  }, [])

  // 각 카드의 시각적 속성을 계산하는 함수
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
      {/* showArrows props가 true일 때만 버튼 렌더링 */}
      {showArrows && (
        <>
          <button
            className="absolute top-1/2 left-0 z-20 -translate-y-1/2 -translate-x-full cursor-pointer px-8"
            onClick={() => handleArrowClick(1)} // 왼쪽 버튼
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <button
            className="absolute top-1/2 right-0 z-20 -translate-y-1/2 translate-x-full cursor-pointer px-8"
            onClick={() => handleArrowClick(-1)} // 오른쪽 버튼
          >
            <FaArrowRight className="text-2xl" />
          </button>
        </>
      )}
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-wrapper" style={{ transform: `rotateY(${currentRotation}deg)` }}>
          {SLUGS.map((slug, index) => {
            const cardStyle = getCardStyle(index) // 각 카드에 대한 스타일 계산
            return (
              <div
                key={slug + index}
                className="carousel-item"
                style={{
                  ...cardStyle, // 계산된 스타일 적용
                  // transformOrigin은 고정이므로 직접 설정
                  transformOrigin: '50% 50%',
                }}
              >
                <ProjectCard slug={slug} />

                {/* view more button rendering */}
                {/*{index === SLUGS.length - 1 ? (*/}
                {/*  <div className="flex w-full h-full items-center justify-center p-4">*/}
                {/*    <Link href="/projects" className="inline-block">*/}
                {/*    <span className="border border-black bg-lime-300 rounded-full px-8 py-4 text-black text-lg font-bold hover:scale-105 transition flex items-center gap-2">*/}
                {/*      View More <FaArrowRight />*/}
                {/*    </span>*/}
                {/*    </Link>*/}
                {/*  </div>*/}
                {/*) : (*/}
                {/*  <ProjectCard slug={slug} />*/}
                {/*)}*/}
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
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
