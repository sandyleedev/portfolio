'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import React, { useState } from 'react'
import LanguageToggle from '@/components/common/LanguageToggle'

const navItems = [
  { label: 'Home', href: '/', icon: '/icons/home.png' },
  { label: 'About', href: '/about', icon: '/icons/book.png' },
  { label: 'Skills', href: '/skills', icon: '/icons/bucket.png' },
  { label: 'Projects', href: '/projects', icon: '/icons/folders.png' },
  { label: 'Contact', href: '/contact', icon: '/icons/letter.png' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="w-6 h-6 fixed z-50 top-4 right-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button>
              <Menu className="cursor-pointer" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full">
            <DialogTitle>
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </DialogTitle>

            <nav className="mt-8 flex flex-col gap-10">
              {navItems.map(({ label, href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-center gap-10 h-[8vh]"
                  onClick={() => setOpen(false)}
                >
                  <img src={icon} alt={label} className="w-[40px] sm:w-[50px]"/>
                  <div className="pr-2 text-3xl sm:text-4xl">{label}</div>
                </Link>
              ))}
            </nav>
            <div className="absolute bottom-5 right-5">
              <LanguageToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
