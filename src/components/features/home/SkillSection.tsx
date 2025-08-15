import FESkillSet from '@/components/features/skills/FESkillSet'
import Diamond from '@/components/ui/Diamond'
import BESkillSet from '@/components/features/skills/BESkillSet'
import CloudSkillSet from '@/components/features/skills/CloudSkillSet'
import DevopsSkillSet from '@/components/features/skills/DevopsSkillSet'
import { motion, Variants } from 'framer-motion'

export default function SkillSection() {
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

  return (
    <>
      <div className="flex gap-20 h-screen px-20">
        <div className="mt-10 flex-col gap-10 items-center h-[100px]">
          <div className="animate-rotate w-[150px]">
            <Diamond />
          </div>
          <span className="text-8xl italic">Skills</span>
        </div>

        <motion.div
          className="flex flex-col h-screen justify-center gap-10 pb-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }} // threshold
        >
          <motion.div variants={item}>
            <div className="text-3xl">FE</div>
            <motion.div variants={item} className="w-[50vw] border border-black p-4 bg-white">
              <FESkillSet />
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <div className="text-3xl">BE</div>
            <motion.div variants={item} className="w-[50vw] border border-black p-4 bg-white">
              <BESkillSet />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col h-screen justify-center gap-10 pt-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }} // threshold
        >
          <motion.div variants={item}>
            <div className="text-3xl">Cloud/Infra</div>
            <motion.div variants={item} className="w-[50vw] border border-black p-4 bg-white">
              <CloudSkillSet />
            </motion.div>
          </motion.div>
          <motion.div variants={item}>
            <div className="text-3xl">Devops</div>
            <motion.div variants={item} className="w-[50vw] border border-black p-4 bg-white">
              <DevopsSkillSet />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
