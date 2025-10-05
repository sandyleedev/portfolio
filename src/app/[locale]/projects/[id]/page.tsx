'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { projectData } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ProjectTypeTag from '@/components/features/projects/ProjectTypeTag'
import ButtonText from '@/components/ui/ButtonText'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import ProjectMediaCarousel from '@/components/features/projects/ProjectMediaCarousel'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.id as string

  const t = useTranslations('projects')
  const project = projectData.find((p) => p.slug === slug)
  const features = t.raw(`${slug}.features`) as string[]
  const role = t.raw(`${slug}.role`) as string[]
  const contributions = t.has(`${slug}.contributions`)
    ? (t.raw(`${slug}.contributions`) as string[])
    : null
  const troubleshooting = t.has(`${slug}.troubleshooting`)
    ? (t.raw(`${slug}.troubleshooting`) as string[])
    : null

  const [openArchitecture, setOpenArchitecture] = useState(false)

  if (!project) return <div>Project not found</div>

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto mb-10">
      <Button asChild variant="outline" className="rounded-full">
        <Link href="/projects">◀ BACK TO PROJECT LIST</Link>
      </Button>

      <Image src={project.imageUrl} width={100} height={100} alt={slug} className="my-6" />

      {/* title */}
      <h1 className="text-4xl font-bold mb-2">{t(`${slug}.title`)}</h1>

      {/* date range */}
      <div className="font-bold tracking-tight mt-4">
        <span>{project.startMonth}</span>
        {project.endMonth && <span>- {project.endMonth}</span>}
      </div>

      {/* desc */}
      <p className="text-lg text-gray-700 mt-4 ">{t(`${slug}.desc`)}</p>

      {/* tag */}
      <div className="mt-4 flex gap-2 flex-wrap items-center">
        <ProjectTypeTag type={project.type} />
        {project.stacks.map((stack) => (
          <span key={stack} className="px-2 py-1 bg-gray-200 text-sm rounded">
            {stack}
          </span>
        ))}
      </div>

      {/* media carousel */}
      {project.mediaUrl?.length ? (
        <div className="mt-15">
          <ProjectMediaCarousel title={t(`${slug}.title`)} images={project.mediaUrl} />
        </div>
      ) : null}

      {/* architecture */}
      {project.architectureUrl && (
        <div className="mt-8">
          <ButtonText
            textColorStyle="text-white"
            bgColorStyle="bg-neutral-700"
            onClick={() => setOpenArchitecture(true)}
          >
            System Architecture
          </ButtonText>

          <img
            src={project.architectureUrl}
            alt="architecture_diagram"
            className="w-[100vw] mt-2 border cursor-zoom-in hover:opacity-90 transition"
            onClick={() => setOpenArchitecture(true)}
          />

          <Lightbox
            open={openArchitecture}
            close={() => setOpenArchitecture(false)}
            slides={[{ src: project.architectureUrl }]}
            plugins={[Zoom]}
          />
        </div>
      )}

      {/* features */}
      <div>
        <ButtonText textColorStyle="text-white" bgColorStyle="bg-neutral-700">
          Features
        </ButtonText>
        <ul className="list-disc list-inside pl-5 space-y-2 p-2">
          {features.map((f, i) => (
            <li key={`feature-${i}`}>{f}</li>
          ))}
        </ul>
      </div>

      {/* role */}
      <div>
        <ButtonText textColorStyle="text-white" bgColorStyle="bg-neutral-700">
          Role
        </ButtonText>
        <ul className="list-disc list-inside pl-5 space-y-2 p-2">
          {role.map((r, i) => (
            <li key={`role-${i}`}>{r}</li>
          ))}
        </ul>
      </div>

      {/* contributions */}
      {contributions && contributions.length > 0 && (
        <div>
          <ButtonText textColorStyle="text-white" bgColorStyle="bg-neutral-700">
            Contributions
          </ButtonText>
          <ul className="list-disc list-inside pl-5 space-y-2 p-2">
            {contributions.map((c, i) => (
              <li key={`contribution-${i}`} className="whitespace-pre-line">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* troubleshooting */}
      {troubleshooting && troubleshooting.length > 0 && (
        <div>
          <ButtonText textColorStyle="text-white" bgColorStyle="bg-neutral-700">
            Troubleshooting
          </ButtonText>
          <ul className="list-disc list-inside pl-5 space-y-2 p-2">
            {(t.raw(`${slug}.troubleshooting`) as string[]).map((issue, i) => (
              <li key={`issue-${i}`}>{issue}</li>
            ))}
          </ul>
        </div>
      )}

      {/* footer */}
      <div className="flex w-full justify-center mt-20">
        <Button asChild variant="outline" className="rounded-full font-semibold">
          <Link href="/projects">
            <Menu className="w-6 h-6" />
            BACK TO PROJECT LIST
          </Link>
        </Button>
      </div>
    </div>
  )
}
