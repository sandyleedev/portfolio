'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DiamondIcon, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import React from 'react'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import LanguageToggle from '@/components/common/LanguageToggle'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const navItems = [
  { label: 'Home', href: '/', icon: '/icons/home.png' },
  { label: 'About', href: '/about', icon: '/icons/book.png' },
  { label: 'Skills', href: '/skills', icon: '/icons/bucket.png' },
  { label: 'Projects', href: '/projects', icon: '/icons/folders.png' },
  { label: 'Contact', href: '/contact', icon: '/icons/letter.png' },
]

export function Header() {
  return (
    <header>
      {/* Vertical Menu */}
      {/*<div className="fixed bottom-1/2 translate-y-50 left-10 flex-col gap-4 hidden lg:flex">*/}
      {/*  {navItems.map(({ label, href, icon }) => (*/}
      {/*    <TooltipProvider key={label}>*/}
      {/*      <Tooltip>*/}
      {/*        <Link*/}
      {/*          key={href}*/}
      {/*          href={href}*/}
      {/*          aria-label={label}*/}
      {/*          title={label}*/}
      {/*          className="rounded-xl p-2 transition transform hover:scale-110"*/}
      {/*        >*/}
      {/*          <TooltipTrigger asChild>*/}
      {/*            <Image src={icon} alt={label} width={64} height={64} />*/}
      {/*          </TooltipTrigger>*/}
      {/*        </Link>*/}

      {/*        <TooltipContent*/}
      {/*          className="bg-zinc-50 fill-zinc-50 text-black border ml-3"*/}
      {/*          side="right"*/}
      {/*        >*/}
      {/*          {label}*/}
      {/*        </TooltipContent>*/}
      {/*      </Tooltip>*/}
      {/*    </TooltipProvider>*/}
      {/*  ))}*/}
      {/*</div>*/}
      {/*<div className={'w-screen flex justify-end hidden lg:flex px-4 pt-4'}>*/}
      {/*  <LanguageSwitcher />*/}
      {/*</div>*/}

      {/* Mobile Hamburger */}
      <div className="">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu className="w-6 h-6 fixed top-4 right-4 cursor-pointer" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-screen">
            <DialogTitle>
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </DialogTitle>

            <nav className="mt-8 flex flex-col gap-10">
              {navItems.map(({ label, href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-center gap-10 h-[8vh]"
                >
                  <Image src={icon} alt={label} width={50} height={50} />
                  <div className="pr-2 text-5xl">{label}</div>
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
