import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './pages/shared/header/Header'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
