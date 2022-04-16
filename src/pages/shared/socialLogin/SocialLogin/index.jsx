import React from 'react'

import Divider from '../components/Divider'
import SignInWithGoogle from '../components/SignInWithGoogle/index.jsx'
import SignInWIthFacebook from '../components/SignInWithFacebook/index.jsx'

const SocialLogin = () => {
  return (
    <div className='w-full md:w-[570px] mx-auto px-6 md:px-12 py-6'>
      <Divider />
      <SignInWIthFacebook />
      <SignInWithGoogle />
    </div>
  )
}

export default SocialLogin
