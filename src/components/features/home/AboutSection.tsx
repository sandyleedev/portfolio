import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AboutSection() {
  const t = useTranslations('about')

  return (
    <>
      <div className="min-w-screen h-screen pl-50 py-5 flex gap-20">
        {/* Education */}
        <div className="w-[max-content] h-screen justify-center flex flex-col gap-[5vh] px-40 pb-[25vh]">
          {/* title */}
          <div className="flex items-center gap-20">
            <span className="text-[15vw]">💭</span>
            <span className="text-[8vw] font-semibold">Education</span>
          </div>

          {/* content */}
          <div className="flex flex-col gap-10 pl-20">
            <div className="text-[2.5vw] flex flex-col">
              <div className="flex gap-10">
                <span>❇️</span>
                <span>️University of Birmingham | 2025-Present</span>
              </div>
              <span>- Master of Science, Computer Science</span>
            </div>

            <div className="text-[2.5vw] flex flex-col">
              <div className="flex gap-10">
                <span>❇️</span>
                <span>Seoul National University of Education | 2018-2022</span>
              </div>
              <span></span>
              <span>- BEd, Elementary Education (Mathematics)</span>
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="w-[max-content] h-screen justify-center flex flex-col gap-5 px-40 pb-[15vh]">
          {/* title */}
          <div className="flex items-center gap-20">
            <span className="text-[15vw]">🧳</span>
            <span className="text-[8vw] font-semibold">Work</span>
          </div>

          {/* content */}
          <div className="text-[2.5vw] flex flex-col gap-20">
            <div>
              <span>Full Stack Software Engineer @ Ponylink | Oct 2023 - Aug 2025</span>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex gap-5">
                <div className="w-[350px] text-center border border-black rounded-full bg-white">
                  FRONTEND
                </div>
                <div>Craft responsive and intuitive UIs with React & Next.js</div>
              </div>

              <div className="flex gap-5">
                <div className="w-[350px] text-center border border-black rounded-full bg-white">
                  BACKEND
                </div>
                <div>Deliver reliable APIs and secure server-side solutions</div>
              </div>

              <div className="flex gap-5">
                <div className="w-[350px] text-center border border-black rounded-full bg-white">
                  INFRA / CLOUD
                </div>
                <div>Automate deployment pipelines and manage cloud operations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certs */}
        <div className="w-[max-content] h-screen justify-center flex flex-col gap-[5vh] px-40 pb-[15vh]">
          {/* title */}
          <div className="flex items-center gap-20">
            <span className="text-[15vw]">💥</span>
            <span className="text-[8vw] font-semibold">Certificates</span>
          </div>

          {/* content */}
          <div className="flex flex-col gap-10 pl-20">
            <div className="text-[2.5vw] flex flex-col">
              <div className="flex gap-10">
                <span>❇️</span>
                <span>️AWS Solutions Architect Associate</span>
              </div>
            </div>

            <div className="text-[2.5vw] flex flex-col">
              <div className="flex gap-10">
                <span>❇️</span>
                <span>️SQL Developer</span>
              </div>
            </div>

            <div className="text-[2.5vw] flex flex-col">
              <div className="flex gap-10">
                <span>❇️</span>
                <span>Engineer of Information Processing</span>
              </div>
            </div>

            <div className="text-[2.5vw] flex flex-col">
              <div className="flex gap-10">
                <span>❇️</span>
                <span>Linux Master (Level 2)</span>
              </div>
            </div>
          </div>
        </div>

        {/* More */}
        <div className="w-[max-content] h-screen justify-center flex flex-col gap-[5vh] pl-20 pr-[40vw]">
          <Link href="/about">
            <div className="text-[3vw] border border-black px-6 rounded-full inline-block cursor-pointer bg-green-400 hover:scale-105 hover:bg-green-200">
              ➔ Learn More About Me
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
