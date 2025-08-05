import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ProjectCardProps {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

export function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer gap-1">
        <div className="relative w-full h-40 mb-6">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <CardHeader>
          <CardTitle className="text-lg px-1">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2 p-1">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button asChild size="sm" className={'rounded-full px-4'}>
            <a href={`/projects/${id}`} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
