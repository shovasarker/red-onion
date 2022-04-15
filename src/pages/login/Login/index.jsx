import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../shared/header/standalone/Button'
import Input from '../../shared/header/standalone/Input'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20'>
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

          <div className='mt-5 mb-10 flex justify-between items-center'>
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
            <button className='text-amber-500 underline underline-offset-1 font-medium hover:opacity-70 transition-opacity duration-300'>
              Forget Password?
            </button>
          </div>
          <Button wFull>Login</Button>
        </form>
        <p className='font-medium text-center mt-5'>
          Don't have an account?{' '}
          <span
            className='ml-2 underline underline-offset-1 text-amber-500 cursor-pointer hover:opacity-70 transition-opacity duration-300'
            onClick={() => navigate('/create-account', { replace: true })}
          >
            Create an account
          </span>
        </p>
      </div>
    </main>
  )
}

export default Login
