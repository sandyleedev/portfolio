interface SkillCardProps {
  icon: React.ReactNode
  name: string
}

export default function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="flex bg-white gap-4 border border-gray-500 rounded-full items-center px-3 py-2 size-fit hover:scale-105 cursor-default">
      <div className="w-[25px]">{icon}</div>
      <span>{name}</span>
    </div>
  )
}
