'use client'

import Link from 'next/link'
import Starburst from '@/components/ui/Starburst'
import { ProjectCarousel } from '@/components/features/projects/ProjectCarousel'

export default function ProjectSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center px-[10vw]">
      <div className="hidden lg:block w-[28ch] mr-[15vw]">
        <div className="text-[7vw] font-semibold">
          <span className="inline-block align-middle animate-rotate">
            <Starburst size="15vw" />
          </span>
          <span>Projects</span>
        </div>
        <Link href="/projects" className="inline-block mt-6 hover:scale-110">
          <span className="border border-black bg-teal-300 font-semibold rounded-[50%] px-6 py-3 text-black  transition">
            📁 View More
          </span>
        </Link>
      </div>
      <div className="w-[60vw]">
        <ProjectCarousel showArrows={false} />
      </div>
    </section>
  )
}
