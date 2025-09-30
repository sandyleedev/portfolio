import { useRef } from 'react'

interface UseSwipeOptions {
  threshold?: number
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
}

export function useSwipe({ threshold = 50, onSwipeLeft, onSwipeRight }: UseSwipeOptions) {
  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const deltaX = touchEndX - touchStartX.current

    if (deltaX > threshold) {
      onSwipeRight?.()
    } else if (deltaX < -threshold) {
      onSwipeLeft?.()
    }

    // reset
    touchStartX.current = null
  }

  return {
    handleTouchStart,
    handleTouchEnd,
  }
}
