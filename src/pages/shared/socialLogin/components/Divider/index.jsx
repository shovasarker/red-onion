import React from 'react'

const Divider = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
      <div className='w-5/12 h-px bg-slate-300'></div>
      <p className='font-medium'>or</p>
      <div className='w-5/12 h-px bg-slate-300'></div>
    </div>
  )
}

export default Divider
