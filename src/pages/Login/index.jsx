import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SocialLogin from '../shared/socialLogin/SocialLogin'
import Button from '../shared/standalone/Button'
import Input from '../shared/standalone/Input'
import LinkButton from '../shared/standalone/LinkButton'
import MessageLink from '../shared/standalone/MessageLink'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20 mt-5 mb-10'>
      <div className='w-full md:w-[570px] mx-auto px-6 md:px-12 py-10 border border-slate-400 rounded font-montserrat font-medium'>
        <h2 className='text-2xl font-bold mb-12'>Login</h2>
        <form>
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
            <LinkButton>Forget Password?</LinkButton>
          </div>
          <Button wFull>Login</Button>
        </form>
        <MessageLink
          message={"Don't have an account?"}
          linkText={'Create an account'}
          onClick={() => navigate('/create-account', { replace: true })}
        />
      </div>

      <SocialLogin />
    </main>
  )
}

export default Login
