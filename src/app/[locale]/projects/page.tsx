import { ProjectCard } from '@/components/projects/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Telecom Web App',
    description: 'A responsive web app for telecom services',
    image: '/icons/email.png',
    tags: ['React', 'TypeScript', 'Next.js'],
  },
  {
    id: 2,
    title: 'Wishlist App',
    description: 'A clean wishlist app with Christmas theme',
    image: '/icons/apple.png',
    tags: ['Next.js', 'Styled-Components'],
  },
]

export default function ProjectsPage() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}
