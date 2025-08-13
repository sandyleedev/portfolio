interface ButtonTextProps {
  children: React.ReactNode
  bgColorStyle?: string
  textColorStyle?: string
}

export default function ButtonText({
  children,
  bgColorStyle = 'bg-neutral-700',
  textColorStyle = 'text-white',
}: ButtonTextProps) {
  return (
    <div
      className={`${bgColorStyle} ${textColorStyle} my-2 mt-10 font-medium border-black px-3 py-1 rounded-full inline-block`}
    >
      {children}
    </div>
  )
}
