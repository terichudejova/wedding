import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'



function App() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <NavLink to="/wedding/" className="navLink" id='homeLink' onClick={toggleMenu}>Domů</NavLink>
          <NavLink to="/wedding/place" className="navLink" onClick={toggleMenu}>Kdy a kde</NavLink>
          <NavLink to="/wedding/about" className="navLink" onClick={toggleMenu}>Náš příběh</NavLink>
          <NavLink to="/wedding/qanda" className="navLink" onClick={toggleMenu}>Časté otázky</NavLink>
          <NavLink to="/wedding/contact" className="navLink" onClick={toggleMenu}>Napiš nám</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
