import { useState } from 'react'

interface UseCarouselOptions {
  totalCards: number
  radius?: number
}

export function useCarousel({ totalCards, radius = 400 }: UseCarouselOptions) {
  const [currentRotation, setCurrentRotation] = useState(0)
  const ROTATION_PER_CARD = 360 / totalCards

  // set current rotation angle to the next card
  const handleArrowClick = (direction: number) => {
    setCurrentRotation((prev) => prev + direction * ROTATION_PER_CARD)
  }

  const getCardStyle = (index: number) => {
    const initialCardRotation = index * ROTATION_PER_CARD

    // Normalize angel to the range -180 ~ 180 degree
    let rotatedAngle = (initialCardRotation + currentRotation) % 360
    if (rotatedAngle > 180) rotatedAngle -= 360
    if (rotatedAngle < -180) rotatedAngle += 360

    let opacity = 0
    let scale = 0.8
    let zIndex = 0

    // main card in the center
    if (Math.abs(rotatedAngle) < ROTATION_PER_CARD / 2) {
      opacity = 1
      scale = 1
      zIndex = 10
      // left and right cards next to the main card
    } else if (Math.abs(rotatedAngle) < ROTATION_PER_CARD * 1.5) {
      opacity = 0.8
      scale = 0.9
      zIndex = 5
    } else {
      opacity = 0.2
      scale = 0.8
      zIndex = 1
    }

    return {
      opacity,
      transform: `rotateY(${initialCardRotation}deg) translateZ(${radius}px) scale(${scale})`,
      zIndex,
    }
  }

  return {
    currentRotation,
    handleArrowClick,
    getCardStyle,
  }
}
