import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import GithubIcon from '@/components/icons/GithubIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import InstagramIcon from '@/components/icons/InstagramIcon'

export default function ContactSection() {
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
      <div className="w-screen px-10 pt-15">
        <Image
          className="animate-float"
          src="/icons/email.png"
          alt="email-icon"
          width={200}
          height={150}
        />
        <div className="text-9xl">Contact Me!</div>

        {/* Email with copy button */}
        <div className="flex p-4 gap-4 mt-3">
          <span className="text-4xl">{email}</span>
          <div
            onClick={copy}
            className="border border-black rounded-full px-5 py-1 flex items-center justify-center text-3xl cursor-pointer"
          >
            {copied ? 'Copied!' : 'Copy'}
          </div>
        </div>

        {/* SNS link */}
        <div className="p-3 flex gap-5">
          <Link href={githubUrl} target="_blank">
            <div className="text-3xl border border-black rounded-full px-3 py-1 cursor-pointer flex items-center gap-2">
              {/*<GithubIcon size="35px" /> */}
              🖥️ Github
            </div>
          </Link>

          <Link href={instagramUrl} target="_blank">
            <div className="text-3xl border border-black rounded-full px-3 py-1 cursor-pointer flex items-center gap-2">
              {/*<InstagramIcon size="40px" />*/}
              💭 Instagram
            </div>
          </Link>

          <Link href={linkedinUrl} target="_blank">
            <div className="text-3xl border border-black rounded-full px-4 py-1 cursor-pointer flex items-center gap-2">
              {/*<LinkedInIcon size="32px" />*/}
              🧤 LinkedIn
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
