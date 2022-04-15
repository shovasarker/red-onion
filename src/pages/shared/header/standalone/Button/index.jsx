import React from 'react'

const Button = ({ children, wFull, pill }) => {
  return (
    <button
      className={`relative ${wFull ? 'w-full' : 'px-5'} ${
        pill ? 'rounded-full' : 'rounded'
      } py-1.5 mt-5 font-medium border border-amber-500 bg-amber-500 hover:bg-amber-500/10 transition-colors duration-300`}
    >
      {children}
    </button>
  )
}

export default Button
