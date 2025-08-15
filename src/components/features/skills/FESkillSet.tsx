import { frontendSkills } from '@/data/skills'
import SkillCard from '@/components/features/skills/SkillCard'

export default function FESkillSet() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {frontendSkills.map((skill, idx) => (
          <SkillCard key={idx} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </>
  )
}
