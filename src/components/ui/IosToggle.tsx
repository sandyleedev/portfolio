import React from 'react'

interface IosToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function IosToggle({ checked, onChange }: IosToggleProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-12 h-7 flex items-center rounded-full p-1 duration-500 transition-colors cursor-pointer
        ${checked ? 'bg-pink-500' : 'bg-gray-300'}`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-500
          ${checked ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  )
}
