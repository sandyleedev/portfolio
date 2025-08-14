'use client'

import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('home')

  return (
      <>
          <div className="text-9xl">Jenna Lee, Full Stack Developer</div>
          <div className="text-9xl">2 years experience</div>
          <div className="text-9xl">University of Birmingham msc Computer science</div>
          <div
              className="bg-blue-500 inline-block px-3 py-2 text-white text-md rounded-full absolute top-150 right-100">
              React
          </div>
          <div
              className="bg-blue-500 inline-block px-3 py-2 text-white text-md rounded-full absolute top-120 right-60">
              Typescript
          </div>
          <div
              className="cursor-pointer bg-pink-500 inline-block px-4 py-2 text-white text-md rounded-full absolute top-120 right-60">
              Check my CV!
          </div>
          <div>
              <img src="/images/common/floorlamp.png" className="fixed bottom-0 -right-5 cursor-pointer transform scale-x-[-1] w-[30vw]"/>
          </div>
      </>
  )
}
