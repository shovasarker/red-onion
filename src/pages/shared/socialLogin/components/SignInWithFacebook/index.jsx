import React, { useEffect } from 'react'
import Button from '../../../standalone/Button'
import fbIcon from '../../../../../images/icons/fbIcon.svg'
import { useSignInWithFacebook } from 'react-firebase-hooks/auth'
import auth from '../../../../../firebase/firebase.init'
import Spinner from '../../../standalone/Spinner'
import { toast } from 'react-toastify'

const SignInWIthFacebook = () => {
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth)
  useEffect(() => {
    if (facebookError) {
      toast.error(facebookError?.message)
      return
    }
    if (facebookUser) {
      toast.success('Successfully Logged in with Facebook')
      return
    }
  }, [facebookError, facebookUser])

  return (
    <Button wFull pill outlined onClick={() => signInWithFacebook()}>
      {facebookLoading ? (
        <Spinner small />
      ) : (
        <>
          <img
            src={fbIcon}
            alt=''
            className='absolute w-8 h-8 rounded-full top-1 left-1'
          />
          Continue With Facebook
        </>
      )}
    </Button>
  )
}

export default SignInWIthFacebook
