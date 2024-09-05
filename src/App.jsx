import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {


  return (
    <div>
      <nav>
        <NavLink to="/wedding/" className="navLink" id='homeLink'>Domů</NavLink>
        <NavLink to="/wedding/place" className="navLink">Kdy a kde</NavLink>
        <NavLink to="/wedding/about" className="navLink">Náš příběh</NavLink>
        <NavLink to="/wedding/qanda" className="navLink">Časté otázky</NavLink>
        <NavLink to="/wedding/contact" className="navLink">Napiš nám</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
