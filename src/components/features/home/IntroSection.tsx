import { useEffect, useState, useRef } from 'react'
import Starburst from '@/components/ui/Starburst'
import Link from 'next/link'
import { useFileDownload } from '@/hooks/useFileDownload'
import { useTranslations } from 'next-intl'
import BallpitEffect from '@/components/features/home/BallpitEffect'

const cvDownloadUrl = '/docs/CV_SEUNGJILEE.pdf'
const cvFileName = 'CV_SEUNGJILEE.pdf'

export default function IntroSection() {
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
      }
    )
    observer.observe(page2Ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* page 1 */}
      <div className="w-[max-content] h-screen px-6 relative flex items-center pb-[10vh]">
        <div>
          <div
            className={`${mounted ? 'animate-fadeInUp' : ''} whitespace-pre-line opacity-0 text-[clamp(10vw,10vw,22vh)]/[100%]`}
          >
            {t('intro')}
          </div>

          {/* button container */}
          <div className="flex items-center mt-[3vh]">
            <div className="w-[12vw] h-[12vw] animate-rotate">
              <Starburst size="12vw" />
            </div>
            <div
              className="text-xl font-semibold border-2 border-black rounded-full px-4 py-1 bg-green-400 hover:bg-green-200 cursor-pointer ml-4"
              onClick={() => {
                downloadFile(cvDownloadUrl, cvFileName)
              }}
            >
              📂 download CV
            </div>
            <Link href="/projects">
              <div className="text-xl font-semibold border-2 border-black rounded-full px-4 py-1 bg-zinc-100 hover:bg-zinc-300 cursor-pointer ml-4">
                🖥️ View Projects
              </div>
            </Link>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-0 -z-1 opacity-70 animate-float"
          src="/images/common/computer.png"
        />
      </div>

      {/* page 2 */}
      <div ref={page2Ref} className="h-screen px-2 relative">
        {showBallpit && <BallpitEffect />} {/* 👈 조건부 렌더링 */}
        <div className="w-[100vw] text-wrap pt-[9vh] pl-[1vw] whitespace-pre-line">
          <div className="text-2xl pl-2 mb-4 animate-fadeInUp">{t('desc')}</div>
          <div className="text-[clamp(10vw,10vw,22vh)]/[95%]">{t('msc')}</div>
        </div>
        <div
          className="absolute bottom-6 right-10 text-9xl font-semibold text-white"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
        >
          {t('year')}
        </div>
      </div>
    </>
  )
}
