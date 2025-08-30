import { ProjectCard } from '@/components/features/projects/ProjectCard'
import { projectData } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <>
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <Link href="/">
          <Image
            src={'/icons/holiday.png'}
            width={100}
            height={100}
            alt={'holiday'}
            className="my-4"
          />
        </Link>
        <h1 className="text-6xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((p, index) => (
            <ProjectCard key={`project_${index}`} slug={p.slug} />
          ))}
        </div>
      </div>
    </>
  )
}
