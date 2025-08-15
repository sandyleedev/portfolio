import { cloudInfraSkills } from '@/data/skills'
import SkillCard from '@/components/features/skills/SkillCard'

export default function CloudSkillSet() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {cloudInfraSkills.map((skill, idx) => (
          <SkillCard key={idx} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </>
  )
}
