import React from 'react'

const Button = ({ children, wFull, pill, outlined }) => {
  return (
    <button
      className={`relative ${wFull ? 'w-full' : 'px-5'} ${
        pill ? 'rounded-full' : 'rounded'
      } py-2 mt-5 font-medium border ${
        outlined
          ? 'bg-transparent border-slate-300 hover:opacity-70'
          : 'border-amber-500 bg-amber-500 hover:bg-amber-500/10 '
      } transition-all duration-300`}
    >
      {children}
    </button>
  )
}

export default Button
