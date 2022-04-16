import React, { useEffect } from 'react'
import Button from '../../../standalone/Button'
import googleIcon from '../../../../../images/icons/googleIcon.svg'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../../../firebase/firebase.init'
import Spinner from '../../../standalone/Spinner'
import { toast } from 'react-toastify'

const SignInWithGoogle = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth)

  useEffect(() => {
    if (googleError) {
      toast.error(googleError?.message)
      return
    }
    if (googleUser) {
      toast.success('Successfully Logged In With Google')
    }
  }, [googleError, googleUser])

  return (
    <Button
      wFull
      pill
      outlined
      className={'mt-3'}
      onClick={() => signInWithGoogle()}
    >
      {googleLoading ? (
        <Spinner small />
      ) : (
        <>
          <img
            src={googleIcon}
            alt=''
            className='absolute w-8 h-8 rounded-full top-1 left-1'
          />
          Continue With Google
        </>
      )}
    </Button>
  )
}

export default SignInWithGoogle
