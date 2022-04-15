import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SocialLogin from '../shared/socialLogin/SocialLogin'
import Button from '../shared/standalone/Button'
import Input from '../shared/standalone/Input'
import MessageLink from '../shared/standalone/MessageLink'

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20 mt-5 mb-10'>
      <div className='w-full md:w-[570px] mx-auto px-6 md:px-12 py-10 border border-slate-400 rounded font-montserrat font-medium'>
        <h2 className='text-2xl font-bold mb-12'>Create an account</h2>
        <form>
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

          <Button wFull>Login</Button>
        </form>
        <MessageLink
          message={'Already have an account?'}
          linkText='Login'
          onClick={() => navigate('/login', { replace: true })}
        />
      </div>

      <SocialLogin />
    </main>
  )
}

export default CreateAccount
