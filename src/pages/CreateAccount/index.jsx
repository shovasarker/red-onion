import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import SocialLogin from '../shared/socialLogin/SocialLogin'
import Button from '../shared/standalone/Button'
import Input from '../shared/standalone/Input'
import MessageLink from '../shared/standalone/MessageLink'

import 'react-toastify/dist/ReactToastify.css'
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase/firebase.init'
import Spinner from '../shared/standalone/Spinner'

const CreateAccount = () => {
  const emailRef = useRef('')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [user] = useAuthState(auth)

  const [createUserWithEmailAndPassword, emailUser, loading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
  const [updateProfile] = useUpdateProfile(auth)

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
      toast.success('User Created Successfully.')
      return
    }
    if (user) {
      navigate('/', { replace: true })
    }
  }, [error, user, navigate, emailError, emailUser])

  const handleCreateAccount = async (e) => {
    e.preventDefault()
    setError(null)
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please! fill out all the fields.')
      return
    }

    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(
        email
      )
    ) {
      setError('Please! Enter a Valid Email.')
      setEmail('')
      emailRef?.current?.focus()
      emailRef?.current?.classList?.add('error')
      return
    }

    if (emailRef?.current?.classList?.contains('error')) {
      emailRef?.current?.classList?.remove('error')
    }

    if (password?.length < 6) {
      setError('Password Length Must be atleast 6 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords doesn't match.")
      return
    }
    setError('')
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName: `${firstName} ${lastName}` })
    toast('Profile Updated')
  }

  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20 mt-5 mb-10'>
      <div className='w-full md:w-[570px] mx-auto px-6 md:px-12 py-10 border border-slate-400 rounded font-montserrat font-medium'>
        <h2 className='text-2xl font-bold mb-12'>Create an account</h2>
        <form onSubmit={handleCreateAccount}>
          <Input
            type={'text'}
            id='first-name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label='First Name'
          />
          <Input
            type={'text'}
            id='last-name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label='Last Name'
          />
          <Input
            refs={emailRef}
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
          <Input
            type={'password'}
            id='confirm-password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label='Confirm Password'
          />

          <p className='mt-4 text-red-600'>
            {error ? error : ''}
            {emailError ? emailError?.message : ''}
          </p>
          <Button type='submit' wFull>
            {loading ? <Spinner small /> : 'Create an account'}
          </Button>
        </form>
        <MessageLink
          message={'Already have an account?'}
          linkText='Login'
          onClick={() => {
            navigate('/login', { replace: true })
          }}
        />
      </div>

      <SocialLogin />
      <ToastContainer autoClose={8000} />
    </main>
  )
}

export default CreateAccount
