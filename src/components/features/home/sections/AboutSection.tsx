import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { RxCursorArrow } from 'react-icons/rx'

export default function AboutSection() {
  const t = useTranslations('about')

  return (
    <>
      <div className="min-w-screen md:h-screen pl-[6vw] md:pl-20 md:py-5 flex flex-col md:flex-row gap-20">
        {/* Education */}
        <div className="edu-section md:w-[max-content] md:h-screen justify-center flex flex-col gap-10 md:gap-0 md:px-30 md:pb-[25vh] pt-[20vh] md:pt-0">
          <div className="flex items-center gap-[5vw]">
            <span className="edu-icon text-[clamp(3rem,15vw,12rem)]">💭</span>
            <span className="edu-title text-[12vw] md:text-[clamp(2rem,8vw,6rem)] italic">
              Education
            </span>
          </div>

          <div className="flex flex-col gap-10 pl-[5vw] md:pl-[7vw] text-[4vw] md:text-[2vw]">
            <div className="flex flex-col">
              <div className="flex gap-3 md:gap-10 reveal-line">
                <span>❇️</span>
                <div className="flex gap-2">
                  <span>️University of Birmingham</span>
                  <span className="hidden md:block">|</span>
                  <span className="hidden md:block">2025-Present</span>
                </div>
              </div>
              <span className="reveal-line">- Master of Science, Computer Science</span>
              <span className="reveal-line md:hidden text-zinc-500">(2025-Present)</span>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-3 md:gap-10 reveal-line">
                <span>❇️</span>
                <div className="flex gap-2">
                  <span>Seoul National University of Education</span>
                  <span className="hidden md:block">|</span>
                  <span className="hidden md:block">2018-2022</span>
                </div>
              </div>
              <span className="reveal-line">- BEd, Elementary Education (Mathematics)</span>
              <span className="reveal-line md:hidden text-zinc-500">(2018-2022)</span>
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="work-section md:w-[max-content] md:h-screen justify-center flex flex-col md:px-30 md:pb-[15vh] pt-[10vh] md:pt-0">
          <div className="flex items-center gap-[5vw]">
            <span className="work-icon text-[clamp(3rem,15vw,12rem)]">🧳</span>
            <span className="work-title text-[12vw] md:text-[clamp(2rem,8vw,6rem)] italic">
              Work
            </span>
          </div>

          <div className="flex flex-col gap-[7vh] text-[4vw] md:text-[1.8vw]">
            <div className="reveal-line flex flex-col md:flex-row px-2 md:px-0">
              <span>Full Stack Software Engineer </span>
              <span>@ Ponylink | Oct 2023 - Aug 2025</span>
            </div>

            <div className="flex flex-col gap-10 md:text-[1.8vw]">
              <div className="flex flex-col md:flex-row gap-[2vw] md:gap-5 reveal-line">
                <div className="w-[max-content] px-4 md:w-[20vw] text-center border border-black rounded-full bg-white">
                  FRONTEND
                </div>
                <div className="px-2 md:px-0">
                  Craft responsive and intuitive UIs with React & Next.js
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[2vw] md:gap-5 reveal-line">
                <div className="w-[max-content] px-4 md:w-[20vw] text-center border border-black rounded-full bg-white">
                  BACKEND
                </div>
                <div className="px-2 md:px-0">
                  Deliver reliable APIs and secure server-side solutions
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[2vw] md:gap-5 reveal-line">
                <div className="w-[max-content] px-4 md:w-[20vw] text-center border border-black rounded-full bg-white">
                  INFRA / CLOUD
                </div>
                <div className="px-2 md:px-0">
                  Automate deployment pipelines and manage cloud operations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="certs-section md:w-[max-content] md:h-screen justify-center flex flex-col gap-10 md:gap-2 md:px-30 md:pb-[15vh] pt-[10vh] md:pt-0">
          <div className="flex items-center gap-[5vw]">
            <span className="certs-icon text-[clamp(3rem,15vw,12rem)]">💥</span>
            <span className="certs-title text-[10vw] md:text-[clamp(2rem,8vw,6rem)] italic">
              Certificates
            </span>
          </div>

          <div className="flex flex-col gap-10 pl-[10px] md:pl-20 text-[4vw] md:text-[1.8vw]">
            <div className="flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>️AWS Solutions Architect Associate</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>️SQL Developer</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>Engineer of Information Processing</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>Linux Master (Level 2)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More */}
      <div className="more-section md:w-[max-content] md:h-screen justify-center items-center flex md:flex-col gap-[5vh] md:pl-40 md:pr-[40vw] py-[30vh] md:py-0">
        <Link href="/about" className="w-[max-content] animate-float">
          <div className="more-btn text-[5vw] md:text-[clamp(1rem,3vw,2rem)] border border-black px-6 rounded-full flex items-center gap-2 cursor-pointer bg-green-400 hover:scale-105 hover:bg-green-200">
            <RxCursorArrow /> Learn More About Me
          </div>
        </Link>
      </div>
    </>
  )
}
