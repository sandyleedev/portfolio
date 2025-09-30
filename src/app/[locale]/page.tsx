'use client'

import DesktopMain from '@/components/main/DesktopHome'
import MobileMain from '@/components/main/MobileHome'

export default function HomePage() {
  return (
    <>
      {/*<div className="hidden md:block">*/}
      {/*  <DesktopMain />*/}
      {/*</div>*/}
      {/*<div className="block md:hidden">*/}
      <div>
        <MobileMain />
      </div>
    </>
  )
}
