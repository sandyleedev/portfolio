'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Locale } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTransition } from 'react'
import clsx from 'clsx'

export default function LanguageSwitcher() {
  const t = useTranslations('language')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error — params + pathname match
        { pathname, params },
        { locale: nextLocale as Locale },
      )
    })
  }

  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <Select defaultValue={locale} onValueChange={handleLocaleChange} disabled={isPending}>
        <SelectTrigger
          className={clsx(
            'w-auto bg-transparent p-3 h-auto focus:ring-0 focus:outline-none cursor-pointer pointer-events-auto',
            isPending && 'opacity-60',
          )}
        >
          <div className="flex items-center gap-2">
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent className="w-40">
          {routing.locales.map((cur) => (
            <SelectItem key={cur} value={cur} className={'cursor-pointer'}>
              {t('locale', { locale: cur })}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
