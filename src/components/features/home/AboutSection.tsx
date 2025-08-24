import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AboutSection() {
  const t = useTranslations('about')

  return (
    <>
      <div className="min-w-screen h-screen pl-50 py-5 flex gap-20">
        {/* Education */}
        <div className="edu-section w-[max-content] h-screen justify-center flex flex-col px-40 pb-[25vh]">
          <div className="flex items-center gap-[5vw]">
            <span className="edu-icon text-[clamp(3rem,15vw,12rem)]">💭</span>
            <span className="edu-title text-[clamp(2rem,8vw,6rem)] font-semibold">Education</span>
          </div>

          <div className="flex flex-col gap-10 pl-[7vw]">
            <div className="text-[clamp(1rem,2.5vw,2rem)] flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>️University of Birmingham | 2025-Present</span>
              </div>
              <span className="reveal-line">- Master of Science, Computer Science</span>
            </div>

            <div className="text-[clamp(1rem,2.5vw,2rem)] flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>Seoul National University of Education | 2018-2022</span>
              </div>
              <span className="reveal-line">- BEd, Elementary Education (Mathematics)</span>
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="work-section w-[max-content] h-screen justify-center flex flex-col px-40 pb-[15vh]">
          <div className="flex items-center gap-[5vw]">
            <span className="work-icon text-[clamp(3rem,15vw,12rem)]">🧳</span>
            <span className="work-title text-[clamp(2rem,8vw,6rem)] font-semibold">Work</span>
          </div>

          <div className="text-[clamp(1rem,2.5vw,2rem)] flex flex-col gap-[7vh]">
            <div className="reveal-line">
              <span>Full Stack Software Engineer @ Ponylink | Oct 2023 - Aug 2025</span>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex gap-5 reveal-line">
                <div className="w-[350px] text-center border border-black rounded-full bg-white">
                  FRONTEND
                </div>
                <div>Craft responsive and intuitive UIs with React & Next.js</div>
              </div>
              <div className="flex gap-5 reveal-line">
                <div className="w-[350px] text-center border border-black rounded-full bg-white">
                  BACKEND
                </div>
                <div>Deliver reliable APIs and secure server-side solutions</div>
              </div>
              <div className="flex gap-5 reveal-line">
                <div className="w-[350px] text-center border border-black rounded-full bg-white">
                  INFRA / CLOUD
                </div>
                <div>Automate deployment pipelines and manage cloud operations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="certs-section w-[max-content] h-screen justify-center flex flex-col px-40 pb-[15vh]">
          <div className="flex items-center gap-[5vw]">
            <span className="certs-icon text-[clamp(3rem,15vw,12rem)]">💥</span>
            <span className="certs-title text-[clamp(2rem,8vw,6rem)] font-semibold">
              Certificates
            </span>
          </div>

          <div className="flex flex-col gap-10 pl-20">
            <div className="text-[clamp(1rem,2.5vw,2rem)] flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>️AWS Solutions Architect Associate</span>
              </div>
            </div>
            <div className="text-[clamp(1rem,2.5vw,2rem)] flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>️SQL Developer</span>
              </div>
            </div>
            <div className="text-[clamp(1rem,2.5vw,2rem)] flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>Engineer of Information Processing</span>
              </div>
            </div>
            <div className="text-[clamp(1rem,2.5vw,2rem)] flex flex-col">
              <div className="flex gap-10 reveal-line">
                <span>❇️</span>
                <span>Linux Master (Level 2)</span>
              </div>
            </div>
          </div>
        </div>

        {/* More */}
        <div className="more-section w-[max-content] h-screen justify-center flex flex-col gap-[5vh] pl-20 pr-[40vw]">
          <Link href="/about">
            <div className="more-btn text-[clamp(1rem,3vw,2rem)] border border-black px-6 rounded-full inline-block cursor-pointer bg-green-400 hover:scale-105 hover:bg-green-200">
              ➔ Learn More About Me
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
