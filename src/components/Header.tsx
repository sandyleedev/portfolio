// components/Header.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import React from 'react'

const navItems = [
  { label: 'Home', href: '/', icon: '/icons/home.png' },
  { label: 'About', href: '/about', icon: '/icons/book.png' },
  { label: 'Skills', href: '/skills', icon: '/icons/bucket.png' },
  { label: 'Projects', href: '/projects', icon: '/icons/folders.png' },
  { label: 'Contact', href: '/contact', icon: '/icons/letter.png' },
]

export function Header() {
  return (
    <header className="py-12 relative flex justify-end items-center max-w-6xl mx-auto w-full">
      {/* Desktop */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 hidden md:flex gap-4">
        {navItems.map(({ label, href, icon }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            title={label}
            className="rounded-xl p-2 hover:bg-muted transition transform hover:scale-105"
          >
            <Image src={icon} alt={label} width={64} height={64} />
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu className="w-6 h-6 absolute top-4 right-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <DialogTitle>
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </DialogTitle>
            <nav className="mt-8 flex flex-col gap-4">
              {navItems.map(({ label, href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-center gap-4 h-[8vh]"
                >
                  <Image src={icon} alt={label} width={36} height={36} />
                  <div className="pr-2">{label}</div>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
