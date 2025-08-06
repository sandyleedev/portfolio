'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { projectData } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.id as string // 'wishlist' 같은 slug

  const t = useTranslations('projects')
  const project = projectData.find((p) => p.slug === slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <Link href="/projects" className="text-3xl mb-4 inline-block">
        ◀️ Back to Projects
      </Link>
      <Image src={project.image} width={100} height={100} alt={slug} className="my-4" />
      <h1 className="text-4xl font-bold mb-2">{t(`${slug}.title`)}</h1>
      <p className="text-lg text-gray-700">{t(`${slug}.desc`)}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-200 text-sm rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
