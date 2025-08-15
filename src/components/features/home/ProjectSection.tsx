import Starburst from '@/components/ui/Starburst'
import { projectData } from '@/data/projects'
import { ProjectCard } from '@/components/features/projects/ProjectCard'
import Link from 'next/link'

export default function ProjectSection() {
  return (
    <>
      <div className="h-sreen px-80 flex items-center gap-50">
        <div>
          <div className="text-9xl">
            <div className="animate-bounce">
              <Starburst />
            </div>
            Projects
          </div>
          3d image carousel - if had a problem with i18n, just render it as an image .<br />
          make it rotate as the scroll goes by. make project detail as an modal in mac safari view
          mock.
          <br />
          put view more button text on the right
          <br />
          maybe write something down the title like this.
        </div>

        <div className="flex gap-20 items-center">
          {projectData.map((p, index) => (
            <div className="w-[400px] h-[70vh]" key={`project_wrapper_${index}`}>
              <ProjectCard key={`project_${index}`} slug={p.slug} />
            </div>
          ))}
          <Link href={"/projects"}>
            <div className="cursor-pointer border border-black rounded-full text-3xl min-w-max flex items-center px-5 py-2 hover:bg-yellow-200">
            ➔ View More
          </div>
          </Link>
        </div>
      </div>
    </>
  )
}
