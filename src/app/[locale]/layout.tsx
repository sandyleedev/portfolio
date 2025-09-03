import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import '@/app/globals.css'
import localFont from 'next/font/local'

export const metadata = {
  title: 'Portfolio',
  description: 'Developer Portfolio',
}

const simplecandy = localFont({
  src: '../../../public/fonts/SimpleCandy.ttf',
  variable: '--font-simplecandy',
})

const valverde = localFont({
  src: '../../../public/fonts/Valverde-CondensedSemibold.otf',
  variable: '--font-valverde',
})

const relindo = localFont({
  src: '../../../public/fonts/Relindo.otf',
  variable: '--font-relindo',
})
const dealva = localFont({
  src: '../../../public/fonts/Dealva.otf',
  variable: '--font-dealva',
})
const farossa = localFont({
  src: '../../../public/fonts/Farossa.otf',
  variable: '--font-farossa',
})

const ppmori = localFont({
  src: [
    {
      path: '../../../public/fonts/PPMori-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PPMori-ExtralightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PPMori-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PPMori-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PPMori-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-ppmori',
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={cn(
          `min-h-screen overflow-x-hidden bg-background font-sans antialiased ${relindo.variable} ${farossa.variable} ${dealva.variable} ${simplecandy.variable} ${ppmori.variable} ${valverde.variable}`,
        )}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
