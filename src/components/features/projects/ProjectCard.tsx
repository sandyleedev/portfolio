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

  const MAX_TAGS = 5
  const visible = project.tags.slice(0, MAX_TAGS)
  const hidden = Math.max(project.tags.length - visible.length, 0)

  return (
    <Link href={`/projects/${slug}`}>
      <Card className="flex w-full h-full flex-col overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer gap-1">
        <div className="relative w-full h-[100px] mb-6">
          <Image src={project.imageUrl} alt={t(`${slug}.title`)} fill className="object-contain" />
        </div>

        <CardHeader className="gap-0">
          <CardTitle className="text-[100%] px-1 line-clamp-2 overflow-hidden h-[3em]">
            {t(`${slug}.title`)}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col">
          {/* desc */}
          <p className="text-sm text-muted-foreground mb-3.5 p-1 line-clamp-3 h-[4.5em] overflow-hidden">
            {t(`${slug}.desc`)}
          </p>

          {/* tech stacks */}
          <div className="flex flex-wrap gap-2 mb-4">
            {visible.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center whitespace-nowrap px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag === 'Spring boot' ? 'Spring Boot' : tag}
              </span>
            ))}
            {hidden > 0 && (
              <span className="inline-flex items-center whitespace-nowrap px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                +{hidden} more
              </span>
            )}
          </div>

          {/* project type */}
          <div className="mt-auto">
            <ProjectTypeTag type={project.type} />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
