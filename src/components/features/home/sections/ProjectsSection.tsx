'use client'

import Link from 'next/link'
import Starburst from '@/components/ui/Starburst'
import { ProjectCarousel } from '@/components/features/projects/ProjectCarousel'

export default function ProjectsSection() {
  return (
    <section className="md:h-screen flex flex-col md:flex-row items-center justify-center px-[10vw] my-[20vh] md:my-0">
      <div className="text-[10vw] md:text-[7vw] italic uppercase">
        <span className="inline-block align-middle animate-rotate">
          <Starburst size="15vw" />
        </span>
        <span className="font-medium">(Projects)</span>
      </div>

      <div className="w-[70vw]">
        <div className="hidden md:block">
          <ProjectCarousel showArrows={true} oneTurnThenRelease={true} />
        </div>

        <div className="md:hidden">
          <ProjectCarousel showArrows={true} oneTurnThenRelease={false} />
        </div>
      </div>

      <div className="w-[70vw] flex justify-center">
        <Link href="/projects" className="inline-block mt-6 hover:scale-110 animate-bounce">
          <span className="border border-black bg-teal-300 text-xl font-semibold rounded-[50%] px-8 py-4 text-black transition">
            📁 View More !
          </span>
        </Link>
      </div>
    </section>
  )
}
