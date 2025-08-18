'use client'

import { Locale, useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useParams } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { is } from '@react-three/fiber/dist/declarations/src/core/utils'

export default function LanguageGlobeButton() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isSelectOn, setIsSelectOn] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleLocaleChange = (nextLocale: string) => {
    if (locale === nextLocale) {
      setIsSelectOn(false)
      return
    }
    router.replace(
      // @ts-expect-error — params + pathname match
      { pathname, params },
      { locale: nextLocale as Locale },
    )
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsSelectOn(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={menuRef}>
      <div
        className="text-4xl fixed right-6.5 bottom-4 cursor-pointer hover:animate-spin hover:[animation-duration:2s] scale-x-[1.4]"
        onClick={() => {
          setIsSelectOn(!isSelectOn)
        }}
      >
        🌐
      </div>
      {isSelectOn && (
        <div className="text-lg fixed bottom-15 right-2 bg-white border border-black flex px-2">
          <div
            className="cursor-pointer hover:text-green-500 hover:font-bold"
            onClick={() => handleLocaleChange('en')}
          >
            EN
          </div>
          <div className="mx-1"> | </div>
          <div
            className="cursor-pointer hover:text-green-500 hover:font-bold"
            onClick={() => handleLocaleChange('ko')}
          >
            KR
          </div>
        </div>
      )}
    </div>
  )
}
