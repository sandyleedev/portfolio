'use client'

import SkillCard from '@/components/features/skills/SkillCard'
import { frontendSkills, backendSkills, cloudInfraSkills, devopsSkills } from '@/data/skills'
import Image from 'next/image'
import FESkillSet from '@/components/features/skills/FESkillSet'
import BESkillSet from '@/components/features/skills/BESkillSet'
import CloudSkillSet from '@/components/features/skills/CloudSkillSet'
import DevopsSkillSet from '@/components/features/skills/DevopsSkillSet'

export default function Skills() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <Image src={'/icons/apple.png'} width={100} height={100} alt={'apple'} className="my-4" />
      <h1 className="text-6xl font-bold mb-12">Skills</h1>

      {/* Frontend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frontend</h2>
        <FESkillSet />
      </section>

      {/* Backend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Backend</h2>
        <BESkillSet />
      </section>

      {/* Cloud & Infrastructure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Cloud & Infrastructure</h2>
        <CloudSkillSet />
      </section>

      {/* DevOps Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Database & DevOps Tools</h2>
        <DevopsSkillSet />
      </section>
    </div>
  )
}
