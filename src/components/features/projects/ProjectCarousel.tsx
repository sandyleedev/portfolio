'use client'

import { projectData } from '@/data/projects'
import { ProjectCardSimple } from '@/components/features/projects/ProjectCardSimple'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useCarousel } from '@/hooks/useCarousel'
import { useSwipe } from '@/hooks/useSwipe'

const SLUGS = projectData.map((p) => p.slug)
const TOTAL_CARDS = SLUGS.length

export function ProjectCarousel() {
  const { currentRotation, handleArrowClick, getCardStyle } = useCarousel({
    totalCards: TOTAL_CARDS,
  })

  const { handleTouchStart, handleTouchEnd } = useSwipe({
    threshold: 50,
    onSwipeLeft: () => handleArrowClick(-1),
    onSwipeRight: () => handleArrowClick(1),
  })

  return (
    <div className="relative w-full">
      {/* arrows */}
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

      {/* carousel */}
      <div
        className="relative w-full min-h-[110vh] md:h-screen flex justify-center items-center overflow-hidden [perspective:1500px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
