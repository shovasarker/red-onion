import React from 'react'
import Button from '../../standalone/Button'
import Divider from '../components/Divider'
import fbIcon from '../../../../images/icons/fbIcon.svg'
import googleIcon from '../../../../images/icons/googleIcon.svg'

const SocialLogin = () => {
  return (
    <div className='w-full md:w-[570px] mx-auto px-6 md:px-12 py-6'>
      <Divider />
      <Button wFull pill outlined>
        <img
          src={fbIcon}
          alt=''
          className='absolute w-8 h-8 rounded-full top-1 left-1'
        />
        Continue With Facebook
      </Button>
      <Button wFull pill outlined className={'mt-3'}>
        <img
          src={googleIcon}
          alt=''
          className='absolute w-8 h-8 rounded-full top-1 left-1'
        />
        Continue With Google
      </Button>
    </div>
  )
}

export default SocialLogin
