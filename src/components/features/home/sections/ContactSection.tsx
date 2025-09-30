import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import GithubIcon from '@/components/icons/GithubIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import { email, githubUrl, instagramUrl, linkedInUrl } from '@/constants/common'

export default function ContactSection() {
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
      <div className="flex flex-col items-center gap-15 md:block w-screen min-h-screen md:px-10 pt-15">
        <div className="w-full px-[10vw] md:px-0">
          {/* mail icon */}
          <div className="w-full">
            <Image
              className="animate-float"
              src="/icons/email.png"
              alt="email-icon"
              width={200}
              height={150}
            />
          </div>

          {/* title */}
          <div className="w-full text-[18vw]/[110%] md:text-9xl">Contact Me!</div>
        </div>

        {/* Email with copy button */}
        <div className="flex flex-col md:flex-row md:p-4 gap-4 md:mt-3">
          <span className="text-[5vw] md:text-4xl">{email}</span>
          <div
            onClick={copy}
            className="border border-black rounded-full px-5 py-1 flex items-center justify-center text-[4.5vw] md:text-3xl cursor-pointer"
          >
            {copied ? 'Copied!' : 'Copy'}
          </div>
        </div>

        {/* SNS link */}
        <div className="p-3 flex gap-5 pb-[10vh] md:pb-[7vh]">
          <Link href={githubUrl} target="_blank">
            <div className="text-3xl border border-black rounded-full px-3 py-1 cursor-pointer flex justify-center items-center gap-2 w-[62px] md:w-auto h-[45px] md:h-auto">
              <span className="md:hidden">
                <GithubIcon size="35px" />
              </span>
              <span className="hidden md:block">🖥️ Github</span>
            </div>
          </Link>

          <Link href={instagramUrl} target="_blank">
            <div className="text-3xl border border-black rounded-full px-3 py-1 cursor-pointer flex justify-center items-center gap-2 w-[62px] md:w-auto h-[45px] md:h-auto">
              <span className="md:hidden">
                <img src="/icons/instagram_icon.png" className="w-[32px]" />
              </span>
              <span className="hidden md:block">💭 Instagram</span>
            </div>
          </Link>

          <Link href={linkedInUrl} target="_blank">
            <div className="text-3xl border border-black rounded-full px-4 py-1 cursor-pointer flex justify-center items-center gap-2 w-[62px] md:w-auto h-[45px] md:h-auto">
              <span className="md:hidden">
                <LinkedInIcon size="32px" />
              </span>
              <span className="hidden md:block">🧤 LinkedIn</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
