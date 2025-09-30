'use client'

import React, { useRef, useState } from 'react'
import { projectData } from '@/data/projects'
import { ProjectCardSimple } from '@/components/features/projects/ProjectCardSimple'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const SLUGS = projectData.map((p) => p.slug)
const TOTAL_CARDS = SLUGS.length
const RADIUS = 400
const ROTATION_PER_CARD = 360 / TOTAL_CARDS

export function ProjectCarousel() {
  const [currentRotation, setCurrentRotation] = useState(0)

  const handleArrowClick = (direction: number) => {
    setCurrentRotation((prev) => prev + direction * ROTATION_PER_CARD)
  }

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
      {/* 좌우 버튼 */}
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

      {/* 캐러셀 */}
      <div className="relative w-full min-h-[110vh] md:h-screen flex justify-center items-center overflow-hidden [perspective:1500px]">
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
