import React from 'react'

const Spinner = ({ height, mTop, small }) => {
  return (
    <div
      className={`w-full ${height ? 'h-[500px]' : 'h-auto'} ${
        mTop ? 'mt-20' : 'mt-0'
      } flex justify-center items-center`}
    >
      <div
        className={`${
          small ? 'w-5 h-5' : 'w-8 h-8'
        } rounded-full border-[3px] border-gray-400 border-b-transparent animate-spin`}
      ></div>
    </div>
  )
}

export default Spinner
