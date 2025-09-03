import IntroSection from '@/components/features/home/sections/IntroSection'
import AboutSection from '@/components/features/home/sections/AboutSection'
import SkillsSection from '@/components/features/home/sections/SkillsSection'
import ProjectsSection from '@/components/features/home/sections/ProjectsSection'
import ContactSection from '@/components/features/home/sections/ContactSection'

export default function MobileHome() {
  return (
    <>
      <IntroSection ballpitDuration={3000} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/*<ContactSection />*/}
    </>
  )
}
