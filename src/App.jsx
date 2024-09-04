import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {


  return (
    <div>
      <h1>Bereme se!!!!</h1>
      <nav>
        <NavLink to="/wedding/">Domů</NavLink>
        {" | "}
        <NavLink to="/wedding/place">Kdy a kde</NavLink>
        {" | "}
        <NavLink to="/wedding/about">Náš příběh</NavLink>
        {" | "}
        <NavLink to="/wedding/qanda">Časté otázky</NavLink>
        {" | "}
        <NavLink to="/wedding/contact">Napiš nám</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
