'use client'

import SkillCard from '@/components/features/skills/SkillCard'
import { frontendSkills, backendSkills, cloudInfraSkills, devopsSkills } from '@/data/skills'
import Image from 'next/image'

export default function Skills() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <Image src={'/icons/apple.png'} width={100} height={100} alt={'apple'} className="my-4" />
      <h1 className="text-6xl font-bold mb-12">Skills</h1>
      {/* Frontend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frontend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {frontendSkills.map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </section>

      {/* Backend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Backend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {backendSkills.map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </section>

      {/* Cloud & Infrastructure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Cloud & Infrastructure</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cloudInfraSkills.map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </section>

      {/* DevOps Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Database & DevOps Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {devopsSkills.map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </section>
    </div>
  )
}
