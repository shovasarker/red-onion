import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiTireIronCross } from 'react-icons/gi'

import logoWhite from '../../../../../images/icons/logo.svg'
import logoDark from '../../../../../images/icons/logo-dark.svg'
import Menu from '../Menu/index.jsx'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
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
        <button
          className={`lg:hidden px-4 py-2 border ${
            pathname === '/' || pathname?.includes('/booking')
              ? 'border-white text-white'
              : 'border-black text-black'
          } rounded bg-transparent`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <GiTireIronCross className='w-5 h-5' />
          ) : (
            <AiOutlineMenu className='w-5 h-5' />
          )}
        </button>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  )
}

export default Navbar
