import { ProjectType, ProjectTypeValue } from '@/data/projects'
import { Button } from '@/components/ui/button'

export const ProjectTypeTag = ({
  type,
  isSmall = false,
}: {
  type: ProjectTypeValue
  isSmall?: boolean
}) => {
  let variant: any = 'default'
  if (type === ProjectType.Personal) variant = 'blue'
  if (type === ProjectType.Team) variant = 'green'
  if (type === ProjectType.Industrial) variant = 'pink'

  return isSmall ? (
    <Button size="sm" variant={variant} className="rounded-full text-[10px] px-2.5 py-0 h-[2.5em]">
      {type}
    </Button>
  ) : (
    <Button size="sm" variant={variant} className="rounded-full">
      {type}
    </Button>
  )
}

export default ProjectTypeTag
