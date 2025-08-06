import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import '@/app/globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Developer Portfolio',
}

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
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <NextIntlClientProvider>
          <Header />
          <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
