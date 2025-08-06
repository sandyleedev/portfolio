import { ProjectCard } from '@/components/projects/ProjectCard'
import { projectData } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((p, index) => (
          <ProjectCard key={`project_${index}`} slug={p.slug} image={p.image} tags={p.tags} />
        ))}
      </div>
    </div>
  )
}
