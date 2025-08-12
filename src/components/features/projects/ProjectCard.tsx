import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import ProjectTypeTag from '@/components/features/projects/ProjectTypeTag'
import React from 'react'
import { projectData, ProjectDataType } from '@/data/projects'

interface ProjectCardProps {
  slug: string
}

export function ProjectCard({ slug }: ProjectCardProps) {
  const t = useTranslations('projects')

  const project = projectData.find((p) => p.slug === slug) as ProjectDataType

  return (
    <Link href={`/projects/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer gap-1">
        <div className="relative w-full h-40 mb-6">
          <Image src={project.imageUrl} alt={t(`${slug}.title`)} fill className="object-contain" />
        </div>
        <CardHeader className="gap-0">
          <CardTitle className="text-lg px-1">{t(`${slug}.title`)}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3.5 p-1 line-clamp-3 h-[4.5em] overflow-hidden">
            {t(`${slug}.desc`)}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground "
              >
                {tag}
              </span>
            ))}
          </div>
          <ProjectTypeTag type={project.type} />
        </CardContent>
      </Card>
    </Link>
  )
}
