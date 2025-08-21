'use client'

import DesktopMain from '@/components/main/DesktopMain'
import MobileMain from '@/components/main/MobileMain'

export default function MainPage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopMain />
      </div>
      <div className="block md:hidden">
        <MobileMain />
      </div>
    </>
  )
}
