import { devopsSkills } from '@/data/skills'
import SkillCard from '@/components/features/skills/SkillCard'

export default function DevopsSkillSet() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {devopsSkills.map((skill, idx) => (
          <SkillCard key={idx} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </>
  )
}
