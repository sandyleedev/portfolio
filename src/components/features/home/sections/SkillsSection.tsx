import FESkillSet from '@/components/features/skills/FESkillSet'
import Diamond from '@/components/ui/Diamond'
import BESkillSet from '@/components/features/skills/BESkillSet'
import CloudSkillSet from '@/components/features/skills/CloudSkillSet'
import DevopsSkillSet from '@/components/features/skills/DevopsSkillSet'
import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 },
  },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

type SectionItem = {
  id: string
  title: string
  Component: React.ComponentType
}

const SECTIONS: SectionItem[] = [
  { id: 'fe', title: '✳️ FRONTEND', Component: FESkillSet },
  { id: 'be', title: '🖥️ BACKEND', Component: BESkillSet },
  { id: 'cloud', title: '🌐️ Cloud / Infrastructure', Component: CloudSkillSet },
  { id: 'devops', title: '⚙️ DevOps', Component: DevopsSkillSet },
]

function SkillBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={item}>
      <div className="text-3xl border border-black border-b-0 px-2 py-1">{title}</div>
      <motion.div
        variants={item}
        className="w-[90vw] md:w-[50vw] md:min-w-[500px] border border-black p-4 bg-white"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <>
      <div className="flex flex-col w-screen justify-center items-center p-20">
        <div className="flex mt-10 gap-3 md:gap-10 items-center w-[100vw] pl-[5vw] md:pl-20">
          <div className="animate-rotate w-[80px] md:w-[150px] mb-[20px]">
            <div className="md:hidden">
              <Diamond size={80} />
            </div>
            <div className="hidden md:block">
              <Diamond size={150} />
            </div>
          </div>
          <span className="text-6xl md:text-8xl font-ppmori italic font-semibold">(SKILLS)</span>
          <br />
        </div>

        <motion.div
          className="flex flex-col items-center gap-10 pt-10 w-[90vw] md:w-[50vw] md:min-w-[500px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {SECTIONS.map(({ id, title, Component }) => (
            <SkillBlock key={id} title={title}>
              <Component />
            </SkillBlock>
          ))}
        </motion.div>
      </div>
    </>
  )
}
