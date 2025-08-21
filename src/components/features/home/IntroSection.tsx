import { useEffect, useState } from 'react'
import Starburst from '@/components/ui/Starburst'
import Link from 'next/link'
import { useFileDownload } from '@/hooks/useFileDownload'

export default function IntroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const { downloadFile } = useFileDownload()
  const cvDownloadUrl = '/docs/CV_SEUNGJILEE.pdf'
  const cvFileName = 'CV_SEUNGJILEE.pdf'

  return (
    <>
      <div className="flex-none h-screen px-6 relative">
        <div className={`${mounted ? 'animate-fadeInUp' : ''} opacity-0 text-[20vh]/[20vh]`}>
          Jenna Lee, <br />
          Full Stack Developer <br />2 years Experience
          <div className="flex items-center">
            <div className="w-[128px] h-[128px] animate-rotate">
              <Starburst />
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
              <div className="text-xl font-semibold border-2 border-black rounded-full px-4 py-1 hover:bg-zinc-300 cursor-pointer ml-4">
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
      <div className="h-screen px-2 relative">
        <div className="w-[100vw] text-wrap pt-[10vh] pl-[1vw] text-[20vh]/[20vh]">
          <div className="text-2xl pl-2 mb-4 animate-fadeInUp">
            To deepen my knowledge in computer science and explore AI-driven solutions, <br />I am
            now pursuing a master’s degree in the UK.
          </div>
          Msc Computer Science <br />@ University of Birmingham
        </div>
        <div className="absolute bottom-10 right-10 text-9xl text-neutral-300/70">2025-2026</div>
      </div>
    </>
  )
}
