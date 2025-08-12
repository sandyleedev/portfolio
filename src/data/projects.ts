/**
 * Project Card
 * - title
 * - short description
 * - date (yyyy/mm)
 * - thumbnail
 * - badge (Personal / Team / Industrial)
 * - main stack (button text)
 * - live demo btn / github
 *
 *
 * Project Detail
 * - title
 * - background / problem statement
 *  : 프로젝트를 왜 시작했는지, 해결하려는 문제(Problem)나 니즈(Need)를 간단히
 * - features & functionality
 *  : 구현한 핵심 기능 리스트업 (bullet 형식, 3~5개)
 *
 */

export const ProjectType = {
  Personal: 'Personal',
  Team: 'Team',
  Industrial: 'Industrial',
} as const

export type ProjectTypeValue = (typeof ProjectType)[keyof typeof ProjectType]

export interface ProjectDataType {
  slug: string
  type: ProjectTypeValue
  startMonth: string
  endMonth?: string
  imageUrl: string
  tags: string[]
  architectureUrl?: string
  apiDocsUrl?: string
  mediaUrl?: string[]
  liveDemoUrl?: string
  repoUrl?: string
}

export const projectData: ProjectDataType[] = [
  {
    slug: 'acs',
    type: ProjectType.Industrial,
    startMonth: '2024.01',
    endMonth: '2024.12',
    imageUrl: '/icons/apple.png',
    tags: ['React', 'Typescript', 'Kotlin'],
    architectureUrl: '/images/projects/acs/acs_architecture.png'
  },
]
