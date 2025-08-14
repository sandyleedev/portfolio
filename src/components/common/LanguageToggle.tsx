'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useParams } from 'next/navigation'
import { useTransition, useState, useEffect } from 'react'
import { Locale } from 'next-intl'
import IosToggle from '@/components/ui/IosToggle'

export default function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  // ✅ 현재 언어 상태를 boolean으로 (ko: true, en: false)
  const [checked, setChecked] = useState(locale === 'ko')

  useEffect(() => {
    setChecked(locale === 'ko')
  }, [locale])

  const toggleLocale = (next: boolean) => {
    const nextLocale = next ? 'ko' : 'en'
    setChecked(next)

    setTimeout(() => {
      startTransition(() => {
        router.replace(
          // @ts-expect-error
          { pathname, params },
          { locale: nextLocale as Locale },
        )
      })
    }, 300)
  }

  return (
    <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
      <span className="text-lg">ENG</span>
      <IosToggle checked={checked} onChange={toggleLocale} />
      <span className="text-lg">KOR</span>
    </div>
  )
}
