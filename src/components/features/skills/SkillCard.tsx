interface SkillCardProps {
  icon: React.ReactNode
  name: string
}

export default function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {icon}
      <span>{name}</span>
    </div>
  )
}
