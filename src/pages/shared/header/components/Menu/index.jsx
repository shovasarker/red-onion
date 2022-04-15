import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useLocation } from 'react-router-dom'
import auth from '../../../../../firebase/firebase.init'

const links = [
  ['/news', 'News'],
  ['/destination', 'Destination'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact'],
]
const Menu = ({ menuOpen, setMenuOpen }) => {
  const { pathname } = useLocation()
  const [user] = useAuthState(auth)
  return (
    <div
      className={`absolute w-full lg:static lg:w-auto left-1/2 -translate-x-1/2 lg:translate-x-0 py-5 lg:py-0 ${
        menuOpen ? 'top-28' : '-top-full'
      } ${
        pathname === '/' || pathname?.includes('/booking')
          ? 'bg-black'
          : 'bg-white'
      } lg:bg-transparent flex flex-col lg:flex-row justify-end items-center gap-5 xl:gap-10 z-30 transition-all duration-500`}
    >
      {links?.map(([to, value], i) => (
        <Link
          onClick={() => setMenuOpen(!menuOpen)}
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
          className={`block px-4 py-1.5 rounded bg-amber-500 font-medium border border-amber-500 hover:bg-amber-500/10 ${
            pathname === '/' || pathname?.includes('/booking')
              ? 'text-white hover:text-amber-500'
              : 'text-black'
          } transition-colors duration-200`}
        >
          Sign Out
        </button>
      ) : (
        <Link
          onClick={() => setMenuOpen(!menuOpen)}
          className={`block px-4 py-1.5 rounded bg-amber-500 font-medium border border-amber-500 hover:bg-amber-500/10 ${
            pathname === '/' || pathname?.includes('/booking')
              ? 'text-white hover:text-amber-500'
              : 'text-black'
          } transition-colors duration-200`}
          to={'/login'}
        >
          Login
        </Link>
      )}
    </div>
  )
}

export default Menu
