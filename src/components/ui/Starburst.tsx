type StarProps = {
  size?: number | string
  color?: string
  className?: string
}

export default function Starburst({ size = 128, color, className }: StarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={color ? ({ ['--star-color' as any]: color } as React.CSSProperties) : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="50,10 56.9,33.4 78.3,21.7 66.6,43.1 90,50 66.6,56.9 78.3,78.3 56.9,66.6 50,90 43.1,66.6 21.7,78.3 33.4,56.9 10,50 33.4,43.1 21.7,21.7 43.1,33.4"
        fill="var(--star-color, currentColor)"
      />
    </svg>
  )
}
