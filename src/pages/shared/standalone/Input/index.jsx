import React from 'react'

const Input = ({ value, onChange, type, id, label, refs, className }) => {
  return (
    <div className='relative w-full mt-5 font-medium'>
      <input
        ref={refs}
        type={type}
        id={id}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`peer w-full placeholder:text-transparent py-2 border-b border-b-gray-300 outline-none focus:outline-none ${
          className ? className : ''
        }`}
      />
      <label
        htmlFor={id}
        className='absolute left-0 -top-3 text-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:top-3 pointer-events-none peer-focus:-top-2 peer-focus:text-[12px] transition-all duration-200'
      >
        {label}
      </label>
    </div>
  )
}

export default Input
