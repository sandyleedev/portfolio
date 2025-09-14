'use client'

import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '@/components/icons/GithubIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import { useState } from 'react'

export default function Contact() {
  const email = 'jennaleework@gmail.com'
  const githubUrl = 'https://github.com/butter-cloud'
  const instagramUrl = 'https://www.instagram.com/dltmdwl'
  const linkedinUrl = 'https://www.linkedin.com/in/seungji-lee-0a365a257/'
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <Image src={'/icons/apple.png'} width={100} height={100} alt={'apple'} className="my-4" />
        <h1 className="text-6xl font-bold mb-12">Contact</h1>

        <div className="flex flex-col gap-5 w-[100%]">
          {/* Email with copy button */}
          <div className="flex gap-4 md:mt-3 md:px-2 ">
            <span className="text-[5vw] md:text-4xl">{email}</span>
            <div
              onClick={copy}
              className="border border-black rounded-full px-5 py-1 flex items-center justify-center text-[4.5vw] md:text-3xl cursor-pointer"
            >
              {copied ? 'Copied!' : 'Copy'}
            </div>
          </div>

          {/* SNS link */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-5 w-[100%]">
            <Link href={githubUrl} target="_blank">
              <div className="text-[4.5vw] md:text-3xl border border-black rounded-full px-3 py-1 cursor-pointer flex justify-center items-center gap-2">
                <span>🖥️ Github</span>
              </div>
            </Link>

            <Link href={instagramUrl} target="_blank">
              <div className="text-[4.5vw] md:text-3xl border border-black rounded-full px-3 py-1 cursor-pointer flex justify-center items-center gap-2">
                <span>💭 Instagram</span>
              </div>
            </Link>

            <Link href={linkedinUrl} target="_blank">
              <div className="text-[4.5vw] md:text-3xl border border-black rounded-full px-4 py-1 cursor-pointer flex justify-center items-center gap-2">
                <span>🧤 LinkedIn</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
