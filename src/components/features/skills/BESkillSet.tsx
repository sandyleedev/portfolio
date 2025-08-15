import { backendSkills } from '@/data/skills'
import SkillCard from '@/components/features/skills/SkillCard'

export default function BESkillSet() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {backendSkills.map((skill, idx) => (
          <SkillCard key={idx} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </>
  )
}
