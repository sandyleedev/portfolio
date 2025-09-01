import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { cvDownloadUrl, cvFileName } from '@/constants/common'
import { useFileDownload } from '@/hooks/useFileDownload'
import Starburst from '@/components/ui/Starburst'
import BallpitEffect from '@/components/common/BallpitEffect'

interface IntroSectionProps {
  ballpitDuration: number
}
export default function IntroSection({ ballpitDuration }: IntroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [showBallpit, setShowBallpit] = useState(false) // 👈 ballpit 렌더링 여부
  const page2Ref = useRef<HTMLDivElement>(null)
  const t = useTranslations('home')
  const { downloadFile } = useFileDownload()

  useEffect(() => setMounted(true), [])

  // page2 관찰
  useEffect(() => {
    if (!page2Ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setShowBallpit(true) // 👈 30% 보일 때 시작
          observer.disconnect() // 한번만 실행
        }
      },
      {
        threshold: [0, 0.3, 0.5, 1.0],
      },
    )
    observer.observe(page2Ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* page 1 */}
      <div className="w-[100vw] md:w-[max-content] min-h-screen px-6 relative flex py-[10vh] md:py-0">
        <div>
          <div
            className={`${mounted ? 'animate-fadeInUp' : ''} md:w-[100vw] sm:pt-12 md:pt-20 whitespace-pre-line opacity-0 text-[clamp(15vw,15vw,15vh)]/[100%] md:text-[clamp(10vw,10vw,22vh)]/[100%] font-light `}
          >
            <span className="font-dealva italic">Jenna Lee,</span>
            <br />
            <span>Full Stack Developer</span>
            <br />
            <span>2 years Experience</span>
          </div>

          {/* button container */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-0 items-center mt-[3vh]">
            <div className="w-[12vw] h-[12vw] animate-rotate">
              <Starburst size="12vw" />
            </div>
            <div
              className="text-[5vw] md:text-xl font-semibold border-2 border-black rounded-full px-4 py-1 bg-green-400 hover:bg-green-200 cursor-pointer ml-4 text-center"
              onClick={() => {
                downloadFile(cvDownloadUrl, cvFileName)
              }}
            >
              📂 download CV
            </div>
            <Link href="/projects">
              <div className="text-[5vw] md:text-xl font-semibold border-2 border-black rounded-full px-4 py-1 bg-zinc-100 hover:bg-zinc-300 cursor-pointer ml-4 text-center">
                🖥️ View Projects
              </div>
            </Link>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-[5vw] -z-1 opacity-70 animate-float w-[50vw] md:w-[400px]"
          src="/images/common/computer.png"
        />
      </div>

      {/* page 2 */}
      <div ref={page2Ref} className="h-screen px-2 relative flex flex-col justify-between">
        {showBallpit && <BallpitEffect duration={ballpitDuration} />}

        {/* desc */}
        <div className="text-md md:text-2xl pt-[9vh] px-2 mb-4 animate-fadeInUp whitespace-pre-line">
          {t('desc')}
        </div>

        {/* main */}
        <div className="w-[100vw] text-wrap pl-[1vw] flex-1">
          <div className="text-[clamp(15vw,15vw,15vh)]/[100%] md:text-[clamp(9vw,9vw,22vh)]/[95%] font-light">
            <span className="italic ">Msc Computer Science</span>
            <br />
            <span className="italic">@ University of Birmingham</span>
          </div>
        </div>

        {/* year */}
        <div
          className="text-[clamp(8vw,8vw,14vh)]/[100%] md:text-8xl font-semibold text-white italic text-right md:pr-5 pb-5"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
        >
          {t('year')}
        </div>
      </div>
    </>
  )
}
