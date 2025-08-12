import { ProjectType, ProjectTypeValue } from '@/data/projects'
import { Button } from '@/components/ui/button'

export const ProjectTypeTag = ({ type }: { type: ProjectTypeValue }) => {
  return (
    <>
      {type == ProjectType.Personal && (
        <Button size="sm" variant="blue" className="rounded-full">
          {type}
        </Button>
      )}
      {type == ProjectType.Team && (
        <Button size="sm" variant="green" className="rounded-full">
          {type}
        </Button>
      )}
      {type == ProjectType.Industrial && (
        <Button size="sm" variant="pink" className="rounded-full">
          {type}
        </Button>
      )}
    </>
  )
}

export default ProjectTypeTag
