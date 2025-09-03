import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import ProjectTypeTag from '@/components/features/projects/ProjectTypeTag'
import React from 'react'
import { projectData, ProjectDataType } from '@/data/projects'

interface ProjectCardProps {
  slug: string
}

// home 페이지의 projects carousel에 들어가는 카드
export function ProjectCardSimple({ slug }: ProjectCardProps) {
  const t = useTranslations('projects')
  const project = projectData.find((p) => p.slug === slug) as ProjectDataType

  const MAX_TAGS = 5
  const visible = project.tags.slice(0, MAX_TAGS)
  const hidden = Math.max(project.tags.length - visible.length, 0)

  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-white border border-zinc-500/50 flex w-full h-full flex-col overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-[0.5vw] md:hover:-translate-y-1 cursor-pointer gap-2 p-4 rounded-lg">
        {/* 이미지 */}
        <div className="relative w-full h-[20vw] md:h-[120px] my-[2.5vw] md:my-4">
          <Image src={project.imageUrl} alt={t(`${slug}.title`)} fill className="object-contain" />
        </div>

        {/* 제목 */}
        <CardHeader className="gap-0 px-0 py-0">
          <CardTitle className="text-[14px] md:text-base px-1 md:px-1 line-clamp-2 overflow-hidden h-[3em]">
            {t(`${slug}.title`)}
          </CardTitle>
        </CardHeader>

        {/* 설명 */}
        <CardContent className="flex flex-col px-0 md:pt-2 pb-0">
          <p className="text-[11px] md:text-xs text-muted-foreground mb-3 px-1 md:px-1 line-clamp-3 h-[4.2em] overflow-hidden leading-[1.4]">
            {t(`${slug}.desc`)}
          </p>

          {/* 태그들 */}
          <div className="flex flex-wrap gap-2 mb-3">
            {visible.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center whitespace-nowrap px-2 py-1 md:px-2 md:py-1 text-[9px] md:text-[10px] rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {hidden > 0 && (
              <span className="inline-flex items-center whitespace-nowrap px-2 py-1 md:px-2 md:py-1 text-[9px] md:text-[10px] rounded-full bg-muted text-muted-foreground">
                +{hidden} more
              </span>
            )}
          </div>

          <div>
            <ProjectTypeTag type={project.type} isSmall />
          </div>
        </CardContent>
      </div>
    </Link>
  )
}
