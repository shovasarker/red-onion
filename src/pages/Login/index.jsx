import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import SocialLogin from '../shared/socialLogin/SocialLogin'
import Button from '../shared/standalone/Button'
import Input from '../shared/standalone/Input'
import LinkButton from '../shared/standalone/LinkButton'
import MessageLink from '../shared/standalone/MessageLink'

import 'react-toastify/dist/ReactToastify.css'
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase/firebase.init'
import Spinner from '../shared/standalone/Spinner'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [user] = useAuthState(auth)
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  const [signInWithEmailAndPassword, emailUser, loading, emailError] =
    useSignInWithEmailAndPassword(auth)

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)

  useEffect(() => {
    if (error) {
      toast.error(error)
      return
    }
    if (emailError) {
      toast?.error(emailError?.message)
      return
    }
    if (emailUser) {
      toast?.success('User Successfully logged in with email and passowrd.')
    }
    if (user) {
      navigate(from, { replace: true })
    }
  }, [error, user, navigate, from, emailUser, emailError])

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please! Fill out both the fields.')
      return
    }
    setError('')
    signInWithEmailAndPassword(email, password)
  }

  const handlePasswordReset = async () => {
    if (!email) {
      toast?.warn('Please! Enter Your Email for Sending Password Reset Email.')
      return
    }
    await sendPasswordResetEmail(email)
    toast?.success('Password Reset Email is Sent.')
  }

  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20 mt-5 mb-10'>
      <div className='w-full md:w-[570px] mx-auto px-6 md:px-12 py-10 border border-slate-400 rounded font-montserrat font-medium'>
        <h2 className='text-2xl font-bold mb-12'>Login</h2>
        <form onSubmit={handleLogin}>
          <Input
            type={'text'}
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label='Username or Email'
          />
          <Input
            type={'password'}
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label='Password'
          />

          <div className='mt-5 mb-10 flex justify-between items-center flex-wrap gap-4'>
            <div className='flex justify-center items-center'>
              <input
                type='checkbox'
                id='remember-me'
                className='accent-orange-500 w-5 h-5'
              />
              <label htmlFor='remember-me' className='ml-2'>
                Remember Me
              </label>
            </div>
            <LinkButton onClick={handlePasswordReset}>
              Forget Password?
            </LinkButton>
          </div>

          <p className='mt-4 text-red-600'>{error ? error?.message : ''}</p>

          <Button type='sumbit' wFull>
            {loading ? <Spinner small /> : 'Login'}
          </Button>
        </form>
        <MessageLink
          message={"Don't have an account?"}
          linkText={'Create an account'}
          onClick={() => {
            navigate('/create-account', { replace: true })
          }}
        />
      </div>

      <SocialLogin />
      <ToastContainer autoClose={8000} />
    </main>
  )
}

export default Login
