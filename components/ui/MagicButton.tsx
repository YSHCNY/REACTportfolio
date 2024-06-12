import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon: React.ReactNode,
    position: string;
    handleClick?: () => void; otherClasses?:
    string;
}) => {
  return (
    <button className="relative inline-flex w-full h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none md:w-60 md:mt-10">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-7 bg-slate-950  gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
            {position ==='left' && icon}
            {title}
            {position ==='right' && icon}
        </span>
    </button>
  )
}

export default MagicButton