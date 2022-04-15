import React from 'react'
import LinkButton from '../LinkButton'

const MessageLink = ({ message, linkText, onClick }) => {
  return (
    <div className='flex justify-center items-center gap-2 flex-wrap mt-5'>
      <p className='font-medium text-center'>{message}</p>
      <LinkButton onClick={onClick}>{linkText}</LinkButton>
    </div>
  )
}

export default MessageLink
