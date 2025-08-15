import { useEffect, useState } from 'react'
import Starburst from '@/components/ui/Starburst'

export default function IntroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <div className="flex-none h-screen px-2">
        <div className={`${mounted ? 'animate-fadeInUp' : ''} opacity-0 text-[20vh]/[20vh]`}>
          Jenna Lee, <br />
          Full Stack Developer <br />2 years Experience
          <div className="w-[128px] h-[128px] animate-rotate">
            <Starburst />
          </div>
        </div>
      </div>
      <div className="h-screen px-2">
        <div className="w-[100vw] text-wrap pt-[20vh] pl-[1vw] text-[20vh]/[20vh]">
          Msc Computer Science <br />@ University of Birmingham
        </div>
      </div>
    </>
  )
}
