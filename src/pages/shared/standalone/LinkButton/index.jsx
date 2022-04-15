import React from 'react'

const LinkButton = ({ children, onClick }) => {
  return (
    <button
      className='underline underline-offset-1 text-amber-500 cursor-pointer hover:opacity-70 transition-opacity duration-300'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default LinkButton
