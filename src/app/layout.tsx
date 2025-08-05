import '@/app/globals.css'
import { Header } from '@/components/Header'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Portfolio',
  description: 'Developer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
