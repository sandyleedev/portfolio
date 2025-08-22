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
  stacks: string[]
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
    stacks: ['React', 'Typescript', 'Kotlin', 'JPA', 'Jest', 'JUnit', 'Grafana'],
    architectureUrl: '/images/projects/acs/acs_architecture.png',
  },
  {
    slug: 'crewcall',
    type: ProjectType.Industrial,
    startMonth: '2024.06',
    endMonth: '2024.08',
    imageUrl: '/icons/letter.png',
    tags: ['Spring boot', 'AWS', 'Docker', 'K8S'],
    stacks: ['Spring boot', 'Java', 'AWS', 'Docker', 'K8S', 'Github Actions', 'Thymeleaf', 'MySQL'],
    mediaUrl: [
      '/images/projects/crewcall/crewcall_media7.png',
      '/images/projects/crewcall/crewcall_media8.png',
      '/images/projects/crewcall/crewcall_media1.png',
      '/images/projects/crewcall/crewcall_media2.png',
      '/images/projects/crewcall/crewcall_media3.png',
      '/images/projects/crewcall/crewcall_media4.png',
      '/images/projects/crewcall/crewcall_media5.png',
      '/images/projects/crewcall/crewcall_media6.png',
    ],
    architectureUrl: '/images/projects/crewcall/crewcall_architecture.png',
  },
  {
    slug: 'techSupport',
    type: ProjectType.Team,
    startMonth: '2025.01',
    endMonth: '2025.03',
    imageUrl: '/icons/bucket.png',
    tags: ['React', 'TypeScript', 'Spring Boot', 'AWS Chime', 'PostgreSQL'],
    stacks: [
      'React',
      'TypeScript',
      'Spring Boot',
      'Java',
      'AWS Chime',
      'PostgreSQL',
      'Redis',
      'Jenkins',
    ],
  },
  {
    slug: 'approvalWeb',
    type: ProjectType.Industrial,
    startMonth: '2023.10',
    endMonth: '2023.11',
    imageUrl: '/icons/folders.png',
    tags: ['React', 'Next.js', 'TypeScript'],
    stacks: ['React', 'Next.js', 'TypeScript'],
  },
]
