'use client'

import { useEffect, useState } from 'react'
import MobileHome from '@/components/main/MobileHome'
import DesktopHome from '@/components/main/DesktopHome'

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  // prevent hydration mismatch
  if (isMobile === null) return null

  return isMobile ? <MobileHome /> : <DesktopHome />
}
