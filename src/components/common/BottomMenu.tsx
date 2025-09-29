'use client'

import Link from 'next/link'
import { usePathname } from '@/i18n/navigation'

const navItems = [
  { label: 'Home', href: '/', icon: '/icons/home.png' },
  { label: 'About', href: '/about', icon: '/icons/book.png' },
  { label: 'Skills', href: '/skills', icon: '/icons/bucket.png' },
  { label: 'Projects', href: '/projects', icon: '/icons/folders.png' },
  { label: 'Contact', href: '/contact', icon: '/icons/letter.png' },
]

export function BottomMenu() {
  const pathname = usePathname()

  return (
    <>
      {pathname != '/' && (
        <div className="w-screen flex justify-center mt-10 mb-15">
          <div className="flex gap-3 rounded-3xl px-2 bg-gray-100/50">
            {navItems.map(({ label, href, icon }) => (
              <Link
                key={href}
                href={href}
                aria-label={label}
                title={label}
                className={`${pathname != href ? 'hover:scale-110' : 'cursor-default'} rounded-xl p-2 transition transform `}
              >
                <div className="flex flex-col items-center w-[10vw] md:w-[100px] gap-[5px]">
                  <img src={icon} alt={label} className="w-[8vw] h-[8vw] md:w-[50px] md:h-[50px]" />
                  <span
                    className={`${pathname == href ? 'bg-gray-200/80 text-gray-900' : 'text-gray-700'} text-[3vw] md:text-lg  rounded-full px-3 py-0.5`}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default BottomMenu
