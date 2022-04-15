import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import auth from '../../../../../firebase/firebase.init.js'
import logoWhite from '../../../../../images/icons/logo.svg'
import logoDark from '../../../../../images/icons/logo-dark.svg'

const links = [
  ['/news', 'News'],
  ['/destination', 'Destination'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact'],
]

const Navbar = () => {
  const { pathname } = useLocation()
  const [user] = useAuthState(auth)
  return (
    <nav className='container px-6 md:px-10 lg:px-16 xl:px-20 py-8'>
      <div className='flex justify-between items-center'>
        <img
          src={
            pathname === '/' || pathname?.includes('/booking')
              ? logoWhite
              : logoDark
          }
          alt='logo'
          className='w-24 md:w-28 lg:w-32'
        />
        <div className='flex flex-col lg:flex-row justify-end items-center gap-5 xl:gap-10'>
          {links?.map(([to, value], i) => (
            <Link
              className={`${
                pathname === '/' || pathname?.includes('/booking')
                  ? 'text-white'
                  : 'text-black'
              } font-medium border-b border-b-transparent hover:border-b-black transition-colors duration-200`}
              key={i}
              to={to}
            >
              {value}
            </Link>
          ))}
          {user ? (
            <button
              className={`block px-4 py-1.5 rounded bg-orange-400 font-medium border border-orange-400 hover:bg-orange-400/10 ${
                pathname === '/' || pathname?.includes('/booking')
                  ? 'text-white hover:text-orange-400'
                  : 'text-black'
              } transition-colors duration-200`}
            >
              Sign Out
            </button>
          ) : (
            <Link
              className={`block px-4 py-1.5 rounded bg-orange-400 font-medium border border-orange-400 hover:bg-orange-400/10 ${
                pathname === '/' || pathname?.includes('/booking')
                  ? 'text-white hover:text-orange-400'
                  : 'text-black'
              } transition-colors duration-200`}
              to={'/login'}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
