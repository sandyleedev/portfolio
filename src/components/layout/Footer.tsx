'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { email, githubUrl, linkedInUrl } from '@/constants/common'
import { usePathname } from '@/i18n/navigation'

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="w-full pt-8 pb-12">
      <div className="container mx-auto flex flex-col items-center gap-2">
        {/* Social Links */}
        {pathname != '/' && pathname != '/contact' && (
          <div className="flex gap-6 text-neutral-500 text-sm">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <FaGithub size={15} />
              <span>GitHub</span>
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <FaLinkedin size={15} />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-1.5">
              <MdEmail size={15} />
              <span>Email</span>
            </a>
          </div>
        )}

        {/* Copyright */}
        <p className="text-sm text-neutral-500">© 2025 Seungji Lee. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
